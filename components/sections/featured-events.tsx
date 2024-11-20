"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { EventDetailsModal } from "@/components/modals/event-details-modal";

export const events = [
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
        benefits: ["Backstage access", "Artist meet & greet", "Exclusive NFT artwork", "VIP lounge", "Priority entry"],
      },
    ],
  },
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
        benefits: ["Courtside seats", "Player meet & greet", "Limited edition NFT", "VIP entrance", "Exclusive merchandise"],
      },
    ],
  },
];

interface FeaturedEventsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function FeaturedEvents({ selectedCategory, setSelectedCategory }: FeaturedEventsProps) {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Featured Events</h2>
        <Button variant="ghost" onClick={() => setSelectedCategory("")}>
          View All
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
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

      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
