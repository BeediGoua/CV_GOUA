import { motion, AnimatePresence } from 'framer-motion'
import { TechBadge } from './TechBadge'
import { GitHubIcon, ExternalLinkIcon, ChevronDownIcon } from '../icons'
import { cn } from '../../lib/utils'

export interface ProjectItemProps {
  title: string
  description: string
  techs: string[]
  url?: string
  github?: string
  /**
   * Whether the project is currently expanded.
   */
  expanded?: boolean
  /**
   * Callback triggered when the card is clicked.
   */
  onToggle?: () => void
  details?: {
    problem: string
    methodology: string
    validation: string
    tools?: string[]
  }
  labels?: {
    problem: string
    methodology: string
    validation: string
    tools: string
    viewDetails?: string
  }
}

export function ProjectItem({ title, description, techs, url, github, expanded = false, onToggle, details, labels }: ProjectItemProps) {
  return (
    <div className="relative group">
      <div
        className={cn(
          "py-4 px-4 -mx-4 rounded-xl transition-all duration-300 relative",
          expanded ? "bg-resume-primary/5 shadow-sm" : "hover:bg-resume-primary/5",
          onToggle ? "cursor-pointer" : ""
        )}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-bold text-resume-text uppercase tracking-tight">{title}</h3>
            <div className="flex items-center gap-1.5 ml-1">
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-resume-primary/60 hover:text-resume-primary transition-colors"
                >
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-resume-primary/60 hover:text-resume-primary transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {(onToggle || details) && (
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] border transition-all duration-300",
                  expanded
                    ? "bg-resume-primary text-white border-resume-primary"
                    : "bg-resume-primary/5 text-resume-primary border-resume-primary/20 hover:border-resume-primary/50 group-hover:bg-resume-primary/10"
                )}
              >
                <span>{labels?.viewDetails ?? 'Détails'}</span>
                <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
                  <ChevronDownIcon className="w-2.5 h-2.5" />
                </motion.div>
              </div>
            </div>
          )}
        </div>

        <p className="text-xs text-resume-text-secondary/90 leading-relaxed mb-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {techs.slice(0, expanded ? techs.length : 5).map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
          {!expanded && techs.length > 5 && (
            <span className="text-[10px] text-resume-primary/60 font-medium">+{techs.length - 5}</span>
          )}
        </div>
      </div>

      <AnimatePresence>
        {expanded && details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-1 mb-6 px-4 py-5 bg-resume-primary/5 rounded-xl border border-resume-primary/10 shadow-inner space-y-4">
              {details.problem && (
                <div>
                  <p className="text-[10px] uppercase font-bold text-resume-primary tracking-widest mb-1.5">{labels?.problem ?? 'Problem'}</p>
                  <p className="text-xs text-resume-text-secondary leading-relaxed">{details.problem}</p>
                </div>
              )}
              {details.methodology && (
                <div>
                  <p className="text-[10px] uppercase font-bold text-resume-primary tracking-widest mb-1.5">{labels?.methodology ?? 'Methodology'}</p>
                  <p className="text-xs text-resume-text-secondary leading-relaxed whitespace-pre-line">{details.methodology}</p>
                </div>
              )}
              {details.validation && (
                <div>
                  <p className="text-[10px] uppercase font-bold text-resume-primary tracking-widest mb-1.5">{labels?.validation ?? 'Validation'}</p>
                  <p className="text-xs text-resume-text-secondary leading-relaxed whitespace-pre-line">{details.validation}</p>
                </div>
              )}
              {details.tools && details.tools.length > 0 && (
                <div className="pt-2 border-t border-resume-primary/10">
                  <p className="text-[10px] uppercase font-bold text-resume-primary tracking-widest mb-1.5">{labels?.tools ?? 'Stack'}</p>
                  <p className="text-xs text-resume-text-secondary italic font-medium">{details.tools.join(' · ')}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
