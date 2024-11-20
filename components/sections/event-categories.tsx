"use client"

import { useState } from "react"
import { Music2, Trophy, Palette, Code, Theater, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedEvents, events } from "./featured-events"

// Calculate actual counts from events data
const getCategoryCount = (categoryName: string) => {
  return events.filter(event => event.category === categoryName).length
}

const categories = [
  {
    name: "Music",
    icon: Music2,
    count: getCategoryCount("Music"),
    gradient: "bg-gradient-to-br from-[#FF0080] via-[#7928CA] to-[#FF0080]",
  },
  {
    name: "Sports",
    icon: Trophy,
    count: getCategoryCount("Sports"),
    gradient: "bg-gradient-to-br from-[#7928CA] via-[#FF0080] to-[#FF0080]",
  },
  {
    name: "Arts",
    icon: Palette,
    count: getCategoryCount("Arts"),
    gradient: "bg-gradient-to-br from-[#FF4D4D] via-[#F9CB28] to-[#FF4D4D]",
  },
  {
    name: "Tech",
    icon: Code,
    count: getCategoryCount("Tech"),
    gradient: "bg-gradient-to-br from-[#00DFD8] via-[#007CF0] to-[#00DFD8]",
  },
  {
    name: "Theater",
    icon: Theater,
    count: getCategoryCount("Theater"),
    gradient: "bg-gradient-to-br from-[#7928CA] via-[#FF0080] to-[#7928CA]",
  },
  {
    name: "Fitness",
    icon: Dumbbell,
    count: getCategoryCount("Fitness"),
    gradient: "bg-gradient-to-br from-[#FF4D4D] via-[#F9CB28] to-[#FF4D4D]",
  },
]

export function EventCategories() {
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(prev => prev === categoryName ? "" : categoryName)
  }

  return (
    <div className="space-y-12">
      <section className="py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Browse Categories</h2>
          {selectedCategory && (
            <Button 
              variant="ghost" 
              onClick={() => setSelectedCategory("")}
            >
              Clear Filter
            </Button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            const isSelected = selectedCategory === category.name
            return (
              <Button
                key={category.name}
                variant="ghost"
                className={`h-auto py-8 flex flex-col items-center gap-4 relative group overflow-hidden ${
                  isSelected ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${category.gradient}`} />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity blur-xl ${category.gradient}`} />
                <Icon className="h-8 w-8 relative z-10" />
                <div className="text-center relative z-10">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm text-muted-foreground">{category.count} Event{category.count !== 1 ? 's' : ''}</div>
                </div>
              </Button>
            )
          })}
        </div>
      </section>

      <FeaturedEvents selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  )
}