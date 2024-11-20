"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Ticket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PurchaseModal } from "./purchase-modal"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"

interface EventDetailsModalProps {
  event: {
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    tickets: { 
      type: string; 
      price: number; 
      supply: number; 
      remaining: number; 
      benefits: string[]; 
    }[]; // Corregido aquí
  };
  onClose: () => void;
}

export function EventDetailsModal({ event, onClose }: EventDetailsModalProps) {
  const [selectedTicket, setSelectedTicket] = useState<null | typeof event.tickets[0]>(null)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)

  const handleTicketSelect = (ticket: typeof event.tickets[0]) => {
    setSelectedTicket(ticket)
    setShowPurchaseModal(true)
  }

  return (
    <>
      <Dialog open onOpenChange={onClose}>
        <DialogContent className="max-w-[900px] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{event.title}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[calc(90vh-8rem)]">
            <div className="space-y-6">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-muted-foreground" />
                  <span>{event.tickets.reduce((sum, t) => sum + t.remaining, 0)} total left</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">About the Event</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Available Tickets</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {event.tickets.map((ticket) => (
                    <Card 
                      key={ticket.type} 
                      className="relative overflow-hidden cursor-pointer transition-all hover:scale-[1.02]"
                      onClick={() => handleTicketSelect(ticket)}
                    >
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <span>{ticket.type}</span>
                          <Badge variant="secondary">${ticket.price} USDC</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>{ticket.remaining} left</span>
                              <span>{ticket.remaining}/{ticket.supply}</span>
                            </div>
                            <Progress 
                              value={(ticket.remaining / ticket.supply) * 100} 
                              className="h-2"
                            />
                          </div>
                          <ul className="space-y-2">
                            {ticket.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-center gap-2 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {showPurchaseModal && selectedTicket && (
        <PurchaseModal
          ticket={selectedTicket}
          event={event}
          onClose={() => {
            setShowPurchaseModal(false)
            setSelectedTicket(null)
          }}
        />
      )}
    </>
  )
}