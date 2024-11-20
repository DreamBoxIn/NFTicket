"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Star, Ticket } from "lucide-react"
import { PurchaseModal } from "@/components/modals/purchase-modal"

const tickets = [
  {
    type: "Super VIP",
    price: "2.5 ETH",
    icon: Crown,
    benefits: [
      "Front row access",
      "Exclusive NFT artwork",
      "Meet & Greet with artists",
      "VIP lounge access",
      "Limited edition merchandise"
    ]
  },
  {
    type: "VIP",
    price: "1.2 ETH",
    icon: Star,
    benefits: [
      "Premium viewing area",
      "VIP lounge access",
      "Special NFT badge",
      "Priority entry"
    ]
  },
  {
    type: "General",
    price: "0.5 ETH",
    icon: Ticket,
    benefits: [
      "General admission",
      "Basic NFT ticket",
      "Access to main areas"
    ]
  }
]

export function TicketTypes() {
  const [selectedTicket, setSelectedTicket] = useState<typeof tickets[0] | null>(null)

  return (
    <section id="tickets" className="py-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Choose Your Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Each ticket is minted as a unique NFT, giving you not just entry to the event, but a collectible piece of the experience.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {tickets.map((ticket) => {
          const Icon = ticket.icon
          return (
            <Card key={ticket.type} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{ticket.type}</CardTitle>
                    <CardDescription>Starting from {ticket.price}</CardDescription>
                  </div>
                  <Icon className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {ticket.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => setSelectedTicket(ticket)}
                >
                  Purchase Ticket
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
      {selectedTicket && (
        <PurchaseModal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </section>
  )
}