import { TechBadge } from './TechBadge'
import { GitHubIcon, ExternalLinkIcon } from '@/components/icons'

export interface ProjectItemProps {
  title: string
  description: string
  techs: string[]
  url?: string
  github?: string
  /**
   * Whether the project is currently expanded. When provided, the component
   * will display the full description and all tech badges. If false,
   * it will show a truncated description. Without this prop, the card
   * remains static (non-expandable).
   */
  expanded?: boolean
  /**
   * Callback triggered when the card is clicked. Use this to toggle
   * expansion in the parent component. If not provided, the card will
   * not be clickable.
   */
  onToggle?: () => void
}

export function ProjectItem({ title, description, techs, url, github, expanded = false, onToggle }: ProjectItemProps) {
  // Determine if we should truncate the description when collapsed
  const shouldTruncate = !expanded && description.length > 120
  const truncated = shouldTruncate ? description.slice(0, 120).trimEnd() + '…' : description

  return (
    <div
      className={`py-3 px-3 -mx-3 rounded-lg transition-colors ${expanded ? 'bg-resume-primary/5' : 'hover:bg-resume-primary/5'} ${onToggle ? 'cursor-pointer' : ''}`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-sm font-semibold text-resume-text">{title}</h3>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLinkIcon className="w-3.5 h-3.5 text-resume-primary" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} on GitHub`}
            onClick={(e) => e.stopPropagation()}
          >
            <GitHubIcon className="w-3.5 h-3.5 text-resume-primary" />
          </a>
        )}
      </div>
      <p className="text-xs text-resume-text-secondary mb-2 whitespace-pre-line">{truncated}</p>
      {expanded && techs && techs.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      )}
    </div>
  )
}
