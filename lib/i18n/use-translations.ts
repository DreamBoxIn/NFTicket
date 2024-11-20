"use client"

import { useEffect, useState } from "react"
import { translations } from "./translations"

type Language = "en" | "es"

export function useTranslations(defaultLanguage: Language = "en") {
  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      localStorage.setItem("language", defaultLanguage)
    }
  }, [defaultLanguage])

  const t = (key: string) => {
    if (!mounted) return translations[defaultLanguage][key] || key

    const keys = key.split(".")
    let value = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return translations[defaultLanguage][key] || key
      }
    }
    
    return value as string
  }

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return { t, language, setLanguage, toggleLanguage }
}