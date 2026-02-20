import { useState, useEffect, type ReactNode } from 'react'
import { resumeConfig } from '../../data/resume-config'
import type { LanguageCode, LocalizedString, LocalizedStringArray } from '../../data/types'
import { LanguageContext } from './LanguageContext'

function isLang(x: string): x is LanguageCode {
  return x === 'fr' || x === 'en'
}

function getUrlLanguage(): LanguageCode | null {
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang')
  if (lang && isLang(lang) && (resumeConfig.languages.available as string[]).includes(lang)) return lang
  return null
}

function detectBrowserLanguage(): LanguageCode {
  const { available, default: defaultLang } = resumeConfig.languages
  const browser = navigator.language.split('-')[0]
  if (isLang(browser) && (available as string[]).includes(browser)) return browser
  return defaultLang
}

function updateUrlLanguage(lang: LanguageCode) {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', lang)
  window.history.replaceState({}, '', url.toString())
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { default: defaultLang } = resumeConfig.languages

  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const urlLang = getUrlLanguage()
    if (urlLang) return urlLang

    const stored = localStorage.getItem('resume-language')
    if (stored && isLang(stored) && (resumeConfig.languages.available as string[]).includes(stored)) return stored

    return detectBrowserLanguage()
  })

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang)
    localStorage.setItem('resume-language', lang)
    updateUrlLanguage(lang)
  }

  useEffect(() => {
    document.documentElement.lang = language
    updateUrlLanguage(language)
  }, [language])

  const resolve = (ls: LocalizedString): string => {
    return ls[language] ?? ls[defaultLang] ?? Object.values(ls)[0] ?? ''
  }

  const resolveArray = (lsa: LocalizedStringArray): string[] => {
    return lsa[language] ?? lsa[defaultLang] ?? Object.values(lsa)[0] ?? []
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, resolve, resolveArray }}>
      {children}
    </LanguageContext.Provider>
  )
}
