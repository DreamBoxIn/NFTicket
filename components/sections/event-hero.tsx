import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

export function EventHero() {
  return (
    <section className="pt-24 pb-12">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Event cover"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent">
          <div className="absolute bottom-0 left-0 p-8 space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="text-sm">Live Music</Badge>
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                Summer Music Festival 2024
              </h1>
            </div>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Experience an unforgettable night of music, art, and culture. Your ticket is not just an entry pass - it's a unique NFT collectible.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                July 15-17, 2024
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Central Park, New York
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                10,000 attendees
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}