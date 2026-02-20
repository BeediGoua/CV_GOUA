import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '../icons'
import { useBreakpoints } from '../../lib/hooks/useBreakpoints'
import { Modal } from '../ui/Modal'
import { cn } from '../../lib/utils'
import { TechBadge } from './TechBadge'
import { ExperienceDetailsContent } from './ExperienceDetails'

interface ExperienceItemProps {
  year: string
  company: string
  type?: string
  role: string
  description: string
  techs: string[]
  expanded: boolean
  onToggle: () => void
  details?: {
    context: string
    tasks?: string[]
    training?: string[]
    architecture?: string
    impact?: string
    env: string
  }
  subItem?: { title: string; description: string }
  labels: {
    mainTasks: string
    moreTasks: string
    training?: string
    techEnv: string
    technologies: string
    architecture: string
    impact: string
    viewDetails?: string
  }
  resolve?: (val: any) => string
  isHighlighted?: boolean
}

export function ExperienceItem({
  year,
  company,
  type,
  role,
  description,
  techs,
  expanded,
  onToggle,
  details,
  subItem,
  labels,
  isHighlighted = false,
}: ExperienceItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isDesktop } = useBreakpoints()
  const handleClick = () => {
    if (!details) return
    if (isDesktop) {
      onToggle()
    } else {
      setIsModalOpen(true)
    }
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={handleClick}
        aria-expanded={details ? expanded : undefined}
        className="w-full text-left group relative z-10 cursor-pointer"
      >
        <div
          className={cn(
            'flex items-start gap-4 py-4 rounded-lg px-4 -mx-4 transition-all duration-300 relative overflow-hidden',
            isHighlighted
              ? 'bg-resume-primary/5 hover:shadow-md'
              : 'hover:bg-resume-primary/5'
          )}
        >
          {/* Vertical Accent */}
          <div
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2/3 rounded-full transition-all duration-300",
              isHighlighted ? "bg-resume-primary scale-y-100" : "bg-resume-primary/20 scale-y-50 group-hover:scale-y-75 group-hover:bg-resume-primary/50"
            )}
          />

          <div className="flex-1 min-w-0 ml-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-bold text-resume-text uppercase tracking-wide">
                  {company}
                </h3>
                {type && (
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-resume-primary/10 text-resume-primary rounded tracking-tighter">
                    {type}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-resume-primary order-first md:order-last">
                {year}
              </span>
            </div>

            <p className="text-xs font-medium text-resume-text-secondary mb-1.5">
              {role}
            </p>

            <p className="text-xs text-resume-text-secondary/90 leading-relaxed mb-3">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 min-h-[24px]">
              {techs.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}

              {details && (
                <div className="ml-auto md:ml-2">
                  <div
                    className={cn(
                      "flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] border transition-all duration-300",
                      expanded
                        ? "bg-resume-primary text-white border-resume-primary"
                        : "bg-resume-primary/5 text-resume-primary border-resume-primary/20 hover:border-resume-primary/50 group-hover:bg-resume-primary/10"
                    )}
                  >
                    <span>{labels.viewDetails ? labels.viewDetails : 'Détails'}</span>
                    <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
                      <ChevronDownIcon className="w-2.5 h-2.5" />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>

            {subItem && (
              <div className="mt-3 pl-3 border-l border-resume-primary/20">
                <p className="text-[11px] font-bold text-resume-text uppercase tracking-tight">{subItem.title}</p>
                <p className="text-xs text-resume-text-secondary">{subItem.description}</p>
              </div>
            )}
          </div>
        </div>
      </button>

      {isDesktop && details && (
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="ml-8 mt-2 mb-6 p-5 bg-resume-primary/5 rounded-xl border border-resume-primary/10 shadow-inner">
                <ExperienceDetailsContent
                  context={details.context}
                  tasks={details.tasks}
                  training={details.training}
                  architecture={details.architecture}
                  impact={details.impact}
                  env={details.env}
                  labels={labels}
                  variant="inline"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {details && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          header={
            <div>
              <h2 className="font-semibold text-lg text-resume-text">{company}</h2>
              <p className="text-sm text-resume-primary">{role}</p>
              <p className="text-xs text-resume-text-secondary mt-1">{year}</p>
            </div>
          }
        >
          <ExperienceDetailsContent
            context={details.context}
            tasks={details.tasks}
            training={details.training}
            architecture={details.architecture}
            impact={details.impact}
            env={details.env}
            techs={techs}
            description={description}
            labels={labels}
            variant="modal"
          />
          {subItem && (
            <div className="pt-3 mt-3 border-t border-resume-primary/20">
              <p className="text-sm font-medium text-resume-text mb-1">{subItem.title}</p>
              <p className="text-sm text-resume-text-secondary">{subItem.description}</p>
            </div>
          )}
        </Modal>
      )}
    </motion.div>
  )
}
