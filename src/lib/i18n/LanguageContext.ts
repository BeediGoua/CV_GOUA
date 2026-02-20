import { createContext } from 'react'
import type { LanguageCode, LocalizedString, LocalizedStringArray } from '../../data/types'

export interface LanguageContextValue {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  resolve: (ls: LocalizedString) => string
  resolveArray: (lsa: LocalizedStringArray) => string[]
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
