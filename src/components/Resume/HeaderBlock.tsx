import { useTranslation } from '../../lib/i18n'
import { resumeConfig } from '../../data/resume-config'
import { ContactItem } from './ContactItem'
import { PdfDownload } from './PdfDownload'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import type { ContactItem as ContactItemType } from '../../data/types'

/**
 * HeaderBlock affiche le nom, le titre, le profil, les contacts et les actions
 * (changement de langue, thème, téléchargement PDF) sur une seule colonne.
 * Il utilise les données issues du resumeConfig et la traduction via useTranslation.
 */
export function HeaderBlock() {
  const { resolve } = useTranslation()
  const { personal, contact, labels } = resumeConfig

  return (
    <header className="mb-8 space-y-4">
      {/* Ligne supérieure : nom, titre et actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-resume-text">
            {personal.name.toUpperCase()}
          </h1>
          <p className="text-base text-resume-text-secondary tracking-widest">
            {resolve(personal.title).toUpperCase()}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto">
          {/* Bouton PDF */}
          <PdfDownload />
          {/* Toggle langue */}
          <LanguageToggle />
          {/* Toggle thème */}
          <ThemeToggle label={resolve(labels.actions.switchTheme)} />
        </div>
      </div>

      {/* Sous-titre (subtitle) */}
      {personal.subtitle && (
        <p className="text-sm text-resume-primary">
          {resolve(personal.subtitle)}
        </p>
      )}

      {/* Profil détaillé (profile) */}
      {personal.profile && (
        <p className="text-sm text-resume-text">
          {resolve(personal.profile)}
        </p>
      )}

      <div className="flex flex-wrap gap-4 mt-2">
        {contact.map((item: ContactItemType) => (
          <ContactItem
            key={`${item.type}-${resolve(item.label)}`}
            type={item.type}
            label={resolve(item.label)}
            href={item.href}
          />
        ))}
      </div>
    </header>
  )
}