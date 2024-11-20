"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PaymentModal } from "./payment-modal"

interface PurchaseModalProps {
  ticket: {
    type: string
    price: number
    supply: number
    remaining: number
    benefits: string[]
  }
  event?: {
    title: string
    date: string
    location: string
    description: string
    image: string
  }
  onClose: () => void
}

const paymentCurrencies = [
  { id: "USDC", name: "USDC", rate: 1 }, // Default
  { id: "USDT", name: "USDT", rate: 1 },
  { id: "BTC", name: "BTC", rate: 0.000025 }
]

export function PurchaseModal({ ticket, event, onClose }: PurchaseModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [currency, setCurrency] = useState(paymentCurrencies[0])
  const [showPayment, setShowPayment] = useState(false)

  const total = ticket.price * quantity
  const maxQuantity = Math.min(ticket.remaining, 4) // Limit to 4 tickets per purchase

  return (
    <>
      <Dialog open onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Purchase Ticket</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Ticket Type</Label>
              <div className="font-medium">{ticket.type}</div>
              <div className="text-sm text-muted-foreground">
                {ticket.remaining} remaining out of {ticket.supply}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                min={1}
                max={maxQuantity}
                value={quantity}
                onChange={(e) => setQuantity(Math.min(parseInt(e.target.value) || 1, maxQuantity))}
              />
              <div className="text-sm text-muted-foreground">
                Maximum {maxQuantity} tickets per purchase
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Payment Currency</Label>
              <Select 
                defaultValue="USDC"
                onValueChange={(value) => setCurrency(paymentCurrencies.find(c => c.id === value)!)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {paymentCurrencies.map((currency) => (
                    <SelectItem key={currency.id} value={currency.id}>
                      {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Total Amount</Label>
              <div className="text-lg font-bold">
                {(total * currency.rate).toFixed(currency.id === "BTC" ? 8 : 2)} {currency.name}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setShowPayment(true)}>
              Continue to Payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {showPayment && (
        <PaymentModal
          ticket={{
            ...ticket,
            price: (total * currency.rate).toFixed(currency.id === "BTC" ? 8 : 2),
            currency: currency.name,
          }}
          quantity={quantity}
          onClose={() => {
            setShowPayment(false)
            onClose()
          }}
        />
      )}
    </>
  )
}