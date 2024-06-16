import React, { ReactNode, useState } from 'react'

import LanguageContext from './LanguageContext'
import en from './data/en.json'
import de from './data/de.json'
import { Language } from '../../../@types/language'

export type LanguageProviderProps = {
  initialLanguage: Language
  children: ReactNode
}
type Messages = { [messageKey: string]: string | string[] }
type LanguageDictionary = { [languageKey: string]: Messages }

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  initialLanguage,
  children,
}) => {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const toggleLanguage = () => setLanguage((currentState) => (currentState === 'en' ? 'de' : 'en'))

  const dictionary: LanguageDictionary = { en, de }

  const getMessage = (messageKey: string) => {
    const message = dictionary[language][messageKey]
    if (!message) throw new Error(`MessageKey ${messageKey} not found in ${language}.json`)
    return message
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getMessage }}>
      {children}
    </LanguageContext.Provider>
  )
}