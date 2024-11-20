"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { EventDetailsModal } from "@/components/modals/event-details-modal"

interface ProducerEventsProps {
  producer: string
}

const producerEvents = {
  "livenation": [
    {
      id: 1,
      title: "EDM Summer Festival",
      category: "Music",
      date: "July 15-17, 2024",
      location: "Miami Beach",
      description: "The biggest electronic music festival featuring world-class DJs and immersive experiences.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      tickets: [
        {
          type: "Super VIP",
          price: 999,
          supply: 100,
          remaining: 45,
          benefits: ["Backstage access", "Artist meet & greet", "Exclusive NFT artwork", "VIP lounge", "Priority entry"]
        },
        {
          type: "VIP",
          price: 499,
          supply: 500,
          remaining: 123,
          benefits: ["VIP viewing areas", "VIP lounge access", "Special NFT badge", "Fast-track entry"]
        },
        {
          type: "General",
          price: 199,
          supply: 2000,
          remaining: 876,
          benefits: ["General admission", "Basic NFT ticket", "Standard entry"]
        }
      ]
    }
  ],
  "nba-events": [
    {
      id: 2,
      title: "NBA Finals 2024",
      category: "Sports",
      date: "June 15, 2024",
      location: "Madison Square Garden, NY",
      description: "Experience the intensity of NBA Finals with premium seating and exclusive fan experiences.",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a",
      tickets: [
        {
          type: "Courtside",
          price: 2999,
          supply: 50,
          remaining: 12,
          benefits: ["Courtside seats", "Player meet & greet", "Limited edition NFT", "VIP entrance", "Exclusive merchandise"]
        },
        {
          type: "Premium",
          price: 999,
          supply: 200,
          remaining: 89,
          benefits: ["Lower level seats", "Special NFT collectible", "Premium lounge access", "Fast-track entry"]
        },
        {
          type: "Standard",
          price: 299,
          supply: 1000,
          remaining: 456,
          benefits: ["Upper level seats", "Basic NFT ticket", "Standard entry"]
        }
      ]
    }
  ],
  "moma": [
    {
      id: 3,
      title: "Modern Art Exhibition",
      category: "Arts",
      date: "August 10-20, 2024",
      location: "MoMA, New York",
      description: "A curated exhibition featuring contemporary artists and interactive installations.",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5",
      tickets: [
        {
          type: "Collector",
          price: 799,
          supply: 75,
          remaining: 34,
          benefits: ["Private viewing", "Artist reception", "Limited NFT artwork", "Exhibition catalog", "Year membership"]
        },
        {
          type: "Preview",
          price: 299,
          supply: 300,
          remaining: 167,
          benefits: ["Early access", "Curator talk", "Special NFT badge", "Exhibition catalog"]
        },
        {
          type: "General",
          price: 99,
          supply: 1500,
          remaining: 892,
          benefits: ["General admission", "Basic NFT ticket", "Digital guide"]
        }
      ]
    }
  ]
}

export function ProducerEvents({ producer }: ProducerEventsProps) {
  const [selectedEvent, setSelectedEvent] = useState<typeof producerEvents["livenation"][0] | null>(null)
  const events = producerEvents[producer as keyof typeof producerEvents] || []

  return (
    <>
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card 
              key={event.id}
              className="group cursor-pointer transition-all hover:scale-[1.02]"
              onClick={() => setSelectedEvent(event)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-t-lg object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  )
}