"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/i18n/use-translations"

export function LanguageToggle() {
  const { language, toggleLanguage } = useTranslations()

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="font-semibold"
    >
      {language.toUpperCase()}
    </Button>
  )
}