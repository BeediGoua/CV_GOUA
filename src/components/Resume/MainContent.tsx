import { useState } from 'react'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import type { Experience, Project, Education, LocalizedString } from '@/data/types'
import { ExperienceItem } from './ExperienceItem'
import { ProjectItem } from './ProjectItem'
import { EducationItem } from './EducationItem'
import { SkillCategory } from './SkillCategory'
import { SkillTextItem } from './SkillTextItem'
import { TechBadge } from './TechBadge'
import { cn } from '@/lib/utils'

export function MainContent() {
  const { resolve, resolveArray } = useTranslation()
  const { personal, experiences, projects, education, skills, labels } = resumeConfig
  const [expandedExp, setExpandedExp] = useState<string | null>(null)
  const [expandedProj, setExpandedProj] = useState<string | null>(null)

  const toggleExp = (id: string) => {
    setExpandedExp(expandedExp === id ? null : id)
  }

  const toggleProj = (id: string) => {
    setExpandedProj(expandedProj === id ? null : id)
  }

  const experienceLabels = {
    mainTasks: resolve(labels.experience.mainTasks),
    moreTasks: resolve(labels.experience.moreTasks),
    training: labels.experience.training ? resolve(labels.experience.training) : undefined,
    techEnv: resolve(labels.experience.techEnv),
    technologies: resolve(labels.experience.technologies),
    architecture: resolve({ fr: 'Architecture', en: 'Architecture' }),
    impact: resolve({ fr: 'Impact', en: 'Impact' }),
  }

  return (
    <div className="md:w-[62%] p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-resume-text">
          {personal.name.toUpperCase()}
        </h1>
        <p className="text-base text-resume-text-secondary tracking-widest mt-2">
          {resolve(personal.title).toUpperCase()}
        </p>
        {personal.subtitle && (
          <p className="text-sm text-resume-primary mt-1">{resolve(personal.subtitle)}</p>
        )}
      </div>

      {/* Experiences */}
      <div className="relative">
        <h2 className="text-[13px] font-black tracking-[0.3em] text-resume-text mb-6 flex items-center gap-4 uppercase outline-none">
          <span className="whitespace-nowrap">{resolve(labels.sections.experience)}</span>
          <div className="h-px bg-resume-primary/10 flex-1" />
        </h2>
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
                viewDetails: resolve(labels.actions.viewDetails ?? { fr: 'Détails', en: 'Details' }),
              }}
              resolve={resolve}
              isHighlighted={exp.isHighlighted}
            />
          ))}
        </div>
      </div>

      {/* Projects */}
      {projects && projects.length > 0 && labels.sections.projects && (
        <div className="mt-12">
          <h2 className="text-[13px] font-black tracking-[0.3em] text-resume-text mb-6 flex items-center gap-4 uppercase outline-none">
            <span className="whitespace-nowrap">{resolve(labels.sections.projects)}</span>
            <div className="h-px bg-resume-primary/10 flex-1" />
          </h2>
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
                  techs={project.techs}
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
        </div>
      )}

      {/* Section Compétences */}
      {skills && skills.length > 0 && (
        <div className="mt-12">
          <h2 className="text-[13px] font-black tracking-[0.3em] text-resume-text mb-6 flex items-center gap-4 uppercase outline-none">
            <span className="whitespace-nowrap">{resolve(labels.sections.skills)}</span>
            <div className="h-px bg-resume-primary/10 flex-1" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {skills.map((category: any, i: number) => (
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
        </div>
      )}

      {/* Education */}
      <div className="mt-12">
        <h2 className="text-[13px] font-black tracking-[0.3em] text-resume-text mb-6 flex items-center gap-4 uppercase outline-none">
          <span className="whitespace-nowrap">{resolve(labels.sections.education)}</span>
          <div className="h-px bg-resume-primary/10 flex-1" />
        </h2>
        <div className="space-y-6">
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
      </div>
    </div>
  )
}
