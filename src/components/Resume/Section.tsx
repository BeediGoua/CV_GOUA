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
    <section className="mt-8">
      <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20 uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}