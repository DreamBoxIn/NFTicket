"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { EventDetailsModal } from "@/components/modals/event-details-modal";

interface ProducerEventsProps {
  producer: string;
}

const producerEvents = {
  livenation: [
    {
      id: 1,
      title: "EDM Summer Festival",
      category: "Music",
      date: "July 15-17, 2024",
      location: "Miami Beach",
      description:
        "The biggest electronic music festival featuring world-class DJs and immersive experiences.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    },
  ],
  "nba-events": [
    {
      id: 2,
      title: "NBA Finals 2024",
      category: "Sports",
      date: "June 15, 2024",
      location: "Madison Square Garden, NY",
      description:
        "Experience the intensity of NBA Finals with premium seating and exclusive fan experiences.",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a",
    },
  ],
  moma: [
    {
      id: 3,
      title: "Modern Art Exhibition",
      category: "Arts",
      date: "August 10-20, 2024",
      location: "MoMA, New York",
      description:
        "A curated exhibition featuring contemporary artists and interactive installations.",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5",
    },
  ],
};

export function ProducerEvents({ producer }: ProducerEventsProps) {
  const [selectedEvent, setSelectedEvent] = useState<
    typeof producerEvents["livenation"][0] | null
  >(null);
  const events = producerEvents[producer as keyof typeof producerEvents] || [];

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
                    <Badge variant="secondary">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
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
  );
}