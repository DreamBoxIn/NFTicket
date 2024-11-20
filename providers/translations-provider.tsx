"use client"

import { createContext, useContext, ReactNode } from "react"
import { useTranslations } from "@/lib/i18n/use-translations"

const TranslationsContext = createContext<ReturnType<typeof useTranslations> | null>(null)

interface TranslationsProviderProps {
  children: ReactNode
  defaultLanguage?: "en" | "es"
}

export function TranslationsProvider({ children, defaultLanguage = "en" }: TranslationsProviderProps) {
  const translations = useTranslations(defaultLanguage)

  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  )
}

export function useTranslationsContext() {
  const context = useContext(TranslationsContext)
  if (!context) {
    throw new Error("useTranslationsContext must be used within a TranslationsProvider")
  }
  return context
}