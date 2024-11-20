import { MapPin, Calendar, Users, Music2, Clock, Ticket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const details = [
  {
    icon: Calendar,
    title: "Date",
    description: "July 15-17, 2024",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Central Park, New York",
  },
  {
    icon: Music2,
    title: "Artists",
    description: "20+ International Artists",
  },
  {
    icon: Clock,
    title: "Duration",
    description: "3 Days of Music",
  },
  {
    icon: Users,
    title: "Capacity",
    description: "10,000 Attendees",
  },
  {
    icon: Ticket,
    title: "NFT Collection",
    description: "Limited Edition Tickets",
  },
];

export function EventDetails() {
  return (
    <section id="details" className="py-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Event Details</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about the Summer Music Festival 2024
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {details.map((detail) => {
          const Icon = detail.icon;
          return (
            <Card key={detail.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {detail.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{detail.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {/* Aquí se optimiza la imagen usando Image de next/image */}
      <div className="mt-8 text-center">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Event cover"
          width={800}
          height={450}
          className="rounded-lg"
          priority={true} // Opcional: Prioriza la carga
        />
      </div>
    </section>
  );
}