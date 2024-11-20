"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Wallet2, Sun, Moon } from "lucide-react"
import { MyTicketsModal } from "@/components/modals/my-tickets-modal"
import { DetailsModal } from "@/components/modals/details-modal"
import { FAQModal } from "@/components/modals/faq-modal"
import { useTheme } from "next-themes"
import { LanguageToggle } from "@/components/language-toggle"
import { useTranslationsContext } from "@/providers/translations-provider"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMyTickets, setShowMyTickets] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [showFAQ, setShowFAQ] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useTranslationsContext()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold">
              Mone<span className="text-[#41dbcb]">Ticket</span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowMyTickets(true)}
                className="hover:text-[#41dbcb] transition-colors"
              >
                {t("common.myTickets")}
              </button>
              <button 
                onClick={() => setShowDetails(true)}
                className="hover:text-[#41dbcb] transition-colors"
              >
                {t("common.details")}
              </button>
              <button 
                onClick={() => setShowFAQ(true)}
                className="hover:text-[#41dbcb] transition-colors"
              >
                {t("common.faq")}
              </button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:text-[#41dbcb]"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <LanguageToggle />
              <Button variant="outline" className="gap-2">
                <Wallet2 className="h-4 w-4" />
                {t("common.connect")}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <MyTicketsModal open={showMyTickets} onClose={() => setShowMyTickets(false)} />
      <DetailsModal open={showDetails} onClose={() => setShowDetails(false)} />
      <FAQModal open={showFAQ} onClose={() => setShowFAQ(false)} />
    </>
  )
}