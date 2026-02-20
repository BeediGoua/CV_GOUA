import { useState } from 'react'
import { useTranslation } from '../../lib/i18n'
import { resumeConfig } from '../../data/resume-config'
import { HeaderBlock } from './HeaderBlock'
import { Section } from './Section'
import { SkillCategory } from './SkillCategory'
import { ExperienceItem } from './ExperienceItem'
import { ProjectItem } from './ProjectItem'
import { EducationItem } from './EducationItem'
import { TechBadge } from './TechBadge'
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
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {/* En-tête : nom, titre, actions, contact */}
      <HeaderBlock />

      {/* Section Profil */}
      {personal.profile && (
        <Section title={profileSectionTitle}>
          <p className="text-sm text-resume-text whitespace-pre-line">
            {resolve(personal.profile)}
          </p>
        </Section>
      )}

      {/* Section Compétences */}
      {skills && skills.length > 0 && (
        <Section title={resolve(labels.sections.skills)}>
          <div className="space-y-4">
            {skills.map((category: SkillCategoryType, i: number) => (
              <SkillCategory key={`${resolve(category.title)}-${i}`} title={resolve(category.title)}>
                {category.type === 'badges' && (
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((item: any) => {
                      const techName = typeof item.name === 'string' ? item.name : resolve(item.name as LocalizedString)
                      return <TechBadge key={techName} tech={techName} color={item.color} />
                    })}
                  </div>
                )}
                {category.type === 'text' && (
                  <p className="text-xs text-resume-text-secondary">
                    {category.items
                      .map((item: any) => (typeof item.name === 'string' ? item.name : resolve(item.name)))
                      .join(', ')}
                  </p>
                )}
                {category.type === 'languages' && (
                  <div className="flex items-center gap-3 text-sm flex-wrap">
                    {category.items.map((item: any, j: number) => {
                      const name = typeof item.name === 'string' ? item.name : resolve(item.name)
                      return (
                        <span key={`${name}-${j}`} className="flex items-center gap-1">
                          <span className="text-resume-text-secondary">
                            {name} {item.level ? resolve(item.level) : ''}
                            {item.details && (
                              <span className="text-xs opacity-70 ml-1">{resolve(item.details)}</span>
                            )}
                          </span>
                        </span>
                      )
                    })}
                  </div>
                )}
              </SkillCategory>
            ))}
          </div>
        </Section>
      )}

      {/* Section Expériences */}
      {experiences && experiences.length > 0 && (
        <Section title={resolve(labels.sections.experience)}>
          <div className="space-y-2">
            {experiences.map((exp: Experience) => (
              <ExperienceItem
                key={exp.id}
                year={resolve(exp.period)}
                company={resolve(exp.company)}
                type={exp.type ? resolve(exp.type) : undefined}
                role={resolve(exp.role)}
                description={resolve(exp.description)}
                techs={exp.techs}
                expanded={expandedExp === exp.id}
                onToggle={() => toggleExp(exp.id)}
                details={
                  exp.details
                    ? {
                      context: resolve(exp.details.context),
                      tasks: exp.details.tasks ? resolveArray(exp.details.tasks) : undefined,
                      training: exp.details.training ? resolveArray(exp.details.training) : undefined,
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
                labels={experienceLabels}
                isHighlighted={exp.isHighlighted}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Section Projets */}
      {projects && projects.length > 0 && labels.sections.projects && (
        <Section title={resolve(labels.sections.projects)}>
          <div className="space-y-1">
            {projects.map((project: Project) => (
              <ProjectItem
                key={project.id}
                title={resolve(project.title)}
                description={resolve(project.description)}
                techs={project.techs}
                url={project.url}
                github={project.github}
                expanded={expandedProj === project.id}
                onToggle={() => toggleProj(project.id)}
              />
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
                logo={edu.logo}
              />
            ))}
          </div>
        </Section>
      )}
      {/* Indication pour l’utilisateur */}
      <p className="text-center text-sm text-resume-text-secondary mt-6">
        {resolve(labels.actions.clickHint)}
      </p>
    </div>
  )
}