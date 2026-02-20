import React from 'react'

interface SectionProps {
  title: string
  children: React.ReactNode
}

/**
 * Section est un simple wrapper qui affiche un titre de section avec
 * un séparateur, puis le contenu passé en children. Il centralise
 * le style commun pour toutes les sections du CV en une colonne.
 */
export function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-12 first:mt-8">
      <h2 className="text-[13px] font-black tracking-[0.3em] text-resume-text mb-6 flex items-center gap-4 uppercase outline-none">
        <span className="whitespace-nowrap">{title}</span>
        <div className="h-px bg-resume-primary/10 flex-1" />
      </h2>
      {children}
    </section>
  )
}