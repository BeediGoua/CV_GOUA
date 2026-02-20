interface EducationItemProps {
  school: string
  degree: string
  specialty?: string
  period?: string
}

export function EducationItem({ school, degree, specialty, period }: EducationItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-bold text-resume-text uppercase tracking-tight">{school}</p>
        {period && (
          <p className="text-xs text-resume-primary font-bold">{period}</p>
        )}
      </div>
      <p className="text-xs text-resume-text-secondary">
        {degree}
        {specialty && (
          <span className="text-resume-primary font-medium italic ml-2">— {specialty}</span>
        )}
      </p>
    </div>
  )
}
