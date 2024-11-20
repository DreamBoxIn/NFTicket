"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslationsContext } from "@/providers/translations-provider"

export function SearchHeader() {
  const { t } = useTranslationsContext()

  return (
    <section className="pt-24 pb-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">{t("home.title")}</h1>
          <p className="text-muted-foreground">
            {t("home.subtitle")}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              className="pl-10" 
              placeholder={t("home.searchPlaceholder")} 
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={t("categories.music")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="music">{t("categories.music")}</SelectItem>
              <SelectItem value="sports">{t("categories.sports")}</SelectItem>
              <SelectItem value="arts">{t("categories.arts")}</SelectItem>
              <SelectItem value="tech">{t("categories.tech")}</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ny">New York</SelectItem>
              <SelectItem value="la">Los Angeles</SelectItem>
              <SelectItem value="miami">Miami</SelectItem>
              <SelectItem value="london">London</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  )
}