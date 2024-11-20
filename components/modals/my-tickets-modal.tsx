"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode } from "lucide-react";
import { NFTPreview } from "@/components/nft-preview";
import { useTranslationsContext } from "@/providers/translations-provider";
import Image from "next/image";

const myTickets = [
  {
    id: 1,
    event: "Summer Music Festival 2024",
    type: "VIP",
    date: "July 15-17, 2024",
    location: "Central Park, NY",
    description: "Experience an unforgettable night of music, art, and culture with VIP access.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    benefits: ["Premium viewing areas", "VIP lounge access", "Special NFT badge", "Priority entry and parking"],
  },
  {
    id: 2,
    event: "NBA Finals Game 7",
    type: "Courtside",
    date: "June 20, 2024",
    location: "Madison Square Garden",
    description: "Witness basketball history from the best seats in the house.",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a",
    benefits: ["Courtside seats", "Player meet & greet", "Exclusive NFT collection", "VIP entrance"],
  },
];

interface MyTicketsModalProps {
  open: boolean;
  onClose: () => void;
}

export function MyTicketsModal({ open, onClose }: MyTicketsModalProps) {
  const [selectedTicket, setSelectedTicket] = useState<typeof myTickets[0] | null>(null);
  const { t } = useTranslationsContext();

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-[900px] max-h-[80vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>{t("modals.myTickets.title")}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[calc(80vh-4rem)] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myTickets.map((ticket) => (
                <Card
                  key={ticket.id}
                  className="cursor-pointer transition-all hover:scale-[1.02]"
                  onClick={() => setSelectedTicket(ticket)}
                >
                  <CardContent className="p-4">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <Image
                        src={ticket.image}
                        alt={ticket.event}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <QrCode className="text-white h-8 w-8" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold truncate">{ticket.event}</h3>
                      <div className="text-sm text-muted-foreground">
                        {ticket.type} • {ticket.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {selectedTicket && (
        <NFTPreview
          ticket={{
            type: selectedTicket.type,
            benefits: selectedTicket.benefits,
          }}
          event={{
            title: selectedTicket.event,
            date: selectedTicket.date,
            location: selectedTicket.location,
            description: selectedTicket.description,
          }}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </>
  );
}
