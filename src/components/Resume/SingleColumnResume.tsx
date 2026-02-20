import { useState } from 'react'
import { useTranslation } from '../../lib/i18n'
import { resumeConfig } from '../../data/resume-config'
import { HeaderBlock } from './HeaderBlock'
import { Section } from './Section'
import { SkillCategory } from './SkillCategory'
import { SkillTextItem } from './SkillTextItem'
import { ExperienceItem } from './ExperienceItem'
import { ProjectItem } from './ProjectItem'
import { EducationItem } from './EducationItem'
import { TechBadge } from './TechBadge'
import { cn } from '../../lib/utils'
import type { LocalizedString, SkillCategory as SkillCategoryType, Experience, Project, Education } from '../../data/types'

/**
 * SingleColumnResume est un composant qui assemble l’ensemble des
 * informations du CV en une seule colonne verticale, sans sidebar. Il
 * conserve les interactions d’expansion pour les expériences et les
 * projets, et utilise les traductions définies dans resume-config.
 */
export function SingleColumnResume() {
  const { resolve, resolveArray } = useTranslation()
  const { personal, skills, experiences, projects, education, labels } = resumeConfig

  // État pour l’expansion des expériences et projets
  const [expandedExp, setExpandedExp] = useState<string | null>(null)
  const [expandedProj, setExpandedProj] = useState<string | null>(null)

  const toggleExp = (id: string) => {
    setExpandedExp(expandedExp === id ? null : id)
  }

  const toggleProj = (id: string) => {
    setExpandedProj(expandedProj === id ? null : id)
  }

  // Préparer les libellés pour ExperienceItem
  const experienceLabels = {
    mainTasks: resolve(labels.experience.mainTasks),
    moreTasks: resolve(labels.experience.moreTasks),
    training: labels.experience.training ? resolve(labels.experience.training) : undefined,
    techEnv: resolve(labels.experience.techEnv),
    technologies: resolve(labels.experience.technologies),
  }

  // Titre pour la section Profil (non présent dans labels, on le définit ici)
  const profileSectionTitle = resolve({ fr: 'PROFIL', en: 'PROFILE' })

  return (
    <div className="w-full max-w-[860px] mx-auto px-6 py-12 md:py-20">
      {/* En-tête : nom, titre, actions, contact */}
      <HeaderBlock />

      {/* Section Profil */}
      {personal.profile && (
        <Section title={profileSectionTitle}>
          <p className="text-sm text-resume-text-secondary leading-relaxed max-w-2xl">
            {resolve(personal.profile)}
          </p>
        </Section>
      )}

      {/* Section Expériences */}
      {experiences && experiences.length > 0 && (
        <Section title={resolve(labels.sections.experience)}>
          <div className="space-y-4">
            {experiences.map((exp: Experience) => (
              <ExperienceItem
                key={exp.id}
                year={resolve(exp.period)}
                company={resolve(exp.company)}
                type={exp.type ? resolve(exp.type) : undefined}
                role={resolve(exp.role)}
                description={resolve(exp.description)}
                techs={exp.techs as string[]}
                expanded={expandedExp === exp.id}
                onToggle={() => toggleExp(exp.id)}
                details={
                  exp.details
                    ? {
                      context: resolve(exp.details.context),
                      tasks: exp.details.tasks ? resolveArray(exp.details.tasks) : undefined,
                      training: exp.details.training ? resolveArray(exp.details.training) : undefined,
                      architecture: exp.details.architecture ? resolve(exp.details.architecture) : undefined,
                      impact: exp.details.impact ? resolve(exp.details.impact) : undefined,
                      env: resolve(exp.details.env),
                    }
                    : undefined
                }
                subItem={
                  exp.subItem
                    ? {
                      title: resolve(exp.subItem.title),
                      description: resolve(exp.subItem.description),
                    }
                    : undefined
                }
                labels={{
                  ...experienceLabels,
                  architecture: resolve({ fr: 'Architecture', en: 'Architecture' }),
                  impact: resolve({ fr: 'Impact', en: 'Impact' }),
                  viewDetails: resolve(labels.actions.viewDetails ?? { fr: 'Détails', en: 'Details' }),
                }}
                resolve={resolve}
                isHighlighted={exp.isHighlighted}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Section Projets */}
      {projects && projects.length > 0 && labels.sections.projects && (
        <Section title={resolve(labels.sections.projects)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            {projects.map((project: Project) => (
              <div
                key={project.id}
                className={cn(
                  "transition-all duration-300",
                  expandedProj === project.id ? "md:col-span-2" : "col-span-1"
                )}
              >
                <ProjectItem
                  title={resolve(project.title)}
                  description={resolve(project.description)}
                  techs={project.techs as string[]}
                  url={project.url}
                  github={project.github}
                  expanded={expandedProj === project.id}
                  onToggle={() => toggleProj(project.id)}
                  details={project.details ? {
                    problem: resolve(project.details.problem),
                    methodology: resolve(project.details.methodology),
                    validation: resolve(project.details.validation),
                    tools: project.details.tools,
                  } : undefined}
                  labels={{
                    problem: resolve({ fr: 'Problématique', en: 'Problem' }),
                    methodology: resolve({ fr: 'Méthodologie', en: 'Methodology' }),
                    validation: resolve({ fr: 'Validation', en: 'Validation' }),
                    tools: resolve({ fr: 'Stack', en: 'Stack' }),
                    viewDetails: resolve(labels.actions.viewDetails ?? { fr: 'Détails', en: 'Details' }),
                  }}
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Section Compétences */}
      {skills && skills.length > 0 && (
        <Section title={resolve(labels.sections.skills)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {skills.map((category: SkillCategoryType, i: number) => (
              <SkillCategory key={`${resolve(category.title)}-${i}`} title={resolve(category.title)}>
                {category.type === 'badges' && (
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item: any) => {
                      const techName = typeof item.name === 'string' ? item.name : resolve(item.name as LocalizedString)
                      return <TechBadge key={techName} tech={techName} color={item.color} />
                    })}
                  </div>
                )}
                {category.type === 'text' && (
                  <div className="flex flex-col gap-1">
                    {category.items.some((item: any) => item.details) ? (
                      category.items.map((item: any, j: number) => (
                        <SkillTextItem
                          key={`${resolve(item.name)}-${j}`}
                          name={resolve(item.name)}
                          details={item.details ? resolve(item.details) : undefined}
                          viewDetailsLabel={resolve(labels.actions.viewDetails ?? { fr: 'Détails', en: 'Details' })}
                        />
                      ))
                    ) : (
                      <p className="text-xs text-resume-text-secondary font-medium leading-relaxed">
                        {category.items
                          .map((item: any) => (typeof item.name === 'string' ? item.name : resolve(item.name)))
                          .join(' · ')}
                      </p>
                    )}
                  </div>
                )}
                {category.type === 'languages' && (
                  <div className="flex flex-col gap-2">
                    {category.items.map((item: any, j: number) => {
                      const name = typeof item.name === 'string' ? item.name : resolve(item.name)
                      return (
                        <div key={`${name}-${j}`} className="flex items-center justify-between text-xs">
                          <span className="font-bold text-resume-text uppercase tracking-tight">{name}</span>
                          <span className="text-resume-primary font-medium">
                            {item.level ? resolve(item.level) : ''}
                            {item.details && (
                              <span className="text-[10px] opacity-70 ml-1 italic">({resolve(item.details)})</span>
                            )}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                )}
              </SkillCategory>
            ))}
          </div>
        </Section>
      )}

      {/* Section Formation */}
      {education && education.length > 0 && (
        <Section title={resolve(labels.sections.education)}>
          <div className="space-y-4">
            {education.map((edu: Education, i: number) => (
              <EducationItem
                key={`${resolve(edu.school)}-${resolve(edu.degree)}-${edu.period ?? i}`}
                school={resolve(edu.school)}
                degree={resolve(edu.degree)}
                specialty={edu.specialty ? resolve(edu.specialty) : undefined}
                period={edu.period}
              />
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}