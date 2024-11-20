import { EventCategories } from "@/components/sections/event-categories"
import { TopProducers } from "@/components/sections/top-producers"
import { Navigation } from "@/components/navigation"
import { SearchHeader } from "@/components/sections/search-header"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
      <Navigation />
      <div className="container mx-auto px-4 space-y-16 py-8">
        <SearchHeader />
        <EventCategories />
        <TopProducers />
      </div>
    </main>
  )
}