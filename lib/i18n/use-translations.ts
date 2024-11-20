"use client";

import { useEffect, useState } from "react";
import { translations } from "./translations";

type Language = keyof typeof translations; // "en" | "es"

export function useTranslations(defaultLanguage: Language = "en") {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      localStorage.setItem("language", defaultLanguage);
    }
  }, [defaultLanguage]);

  const t = (key: string) => {
    if (!mounted) return key; // Evitar errores en SSR

    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Devuelve la clave si no existe traducción
      }
    }

    return typeof value === "string" ? value : key;
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return { t, language, setLanguage, toggleLanguage };
}