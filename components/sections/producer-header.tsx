"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Star } from "lucide-react";
import Image from "next/image";

interface ProducerHeaderProps {
  producer: string;
}

const producerData = {
  livenation: {
    name: "LiveNation",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    description:
      "The world&apos;s leading live entertainment company, connecting millions of fans to thousands of events.",
    stats: {
      events: 45,
      totalSales: "2.5K ETH",
      followers: "10.2K",
    },
  },
  "nba-events": {
    name: "NBA Events",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a",
    description:
      "Official NBA event producer, bringing you courtside experiences and exclusive basketball events.",
    stats: {
      events: 32,
      totalSales: "1.8K ETH",
      followers: "8.5K",
    },
  },
  moma: {
    name: "MoMA",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5",
    description:
      "The Museum of Modern Art&apos;s exclusive events and exhibitions, featuring contemporary art and culture.",
    stats: {
      events: 28,
      totalSales: "890 ETH",
      followers: "6.7K",
    },
  },
};

export function ProducerHeader({ producer }: ProducerHeaderProps) {
  const data = producerData[producer as keyof typeof producerData];

  if (!data) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Producer not found</h1>
        <p className="text-muted-foreground">
          Please check the producer&apos;s name and try again.
        </p>
      </div>
    );
  }

  return (
    <section className="pt-24">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              src={data.image}
              alt={data.name}
              width={128}
              height={128}
              className="w-32 h-32 rounded-lg object-cover"
            />
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <Badge variant="secondary">Verified Producer</Badge>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                {data.description}
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{data.stats.events} Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span>{data.stats.totalSales} Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{data.stats.followers} Followers</span>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <Button>Follow Producer</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}