interface SkillCategoryProps {
  title: string
  children: React.ReactNode
}

export function SkillCategory({ title, children }: SkillCategoryProps) {
  return (
    <div className="group transition-all duration-300 hover:translate-x-1">
      <p className="text-[10px] font-black text-resume-primary uppercase tracking-[0.2em] mb-3 px-2 border-l-2 border-resume-primary/30 group-hover:border-resume-primary transition-all">
        {title}
      </p>
      <div className="px-2">
        {children}
      </div>
    </div>
  )
}
