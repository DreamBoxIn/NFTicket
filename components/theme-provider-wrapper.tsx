"use client"

import { ThemeProvider } from '@/components/theme-provider'
import { TranslationsProvider } from '@/providers/translations-provider'
import { Toaster } from '@/components/ui/sonner'

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <TranslationsProvider defaultLanguage="en">
        {children}
        <Toaster />
      </TranslationsProvider>
    </ThemeProvider>
  )
}