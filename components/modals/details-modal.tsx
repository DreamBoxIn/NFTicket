"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet2, Ticket, QrCode, ShoppingCart } from "lucide-react"

interface DetailsModalProps {
  open: boolean
  onClose: () => void
}

const steps = [
  {
    icon: Wallet2,
    title: "Connect Your Wallet",
    description: "Start by connecting your Web3 wallet. We support MetaMask, WalletConnect, and other major providers."
  },
  {
    icon: ShoppingCart,
    title: "Browse & Purchase",
    description: "Explore events and select your preferred ticket tier. Purchase using USDC, USDT, or other supported cryptocurrencies."
  },
  {
    icon: Ticket,
    title: "Receive Your NFT Ticket",
    description: "Your ticket will be minted as an NFT and transferred to your wallet automatically after purchase."
  },
  {
    icon: QrCode,
    title: "Access Events",
    description: "Show your NFT ticket QR code at the venue for seamless entry. Your ticket can also be collected as a digital memorabilia."
  }
]

export function DetailsModal({ open, onClose }: DetailsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] h-[80vh]">
        <DialogHeader>
          <DialogTitle>How MoneTicket Works</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(80vh-8rem)] pr-4">
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p>
                MoneTicket revolutionizes event ticketing by combining the security of blockchain 
                with the collectible nature of NFTs. Each ticket is a unique digital asset that 
                provides both event access and lasting memorabilia.
              </p>
            </div>

            <div className="grid gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        <span>Step {index + 1}: {step.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="prose prose-invert max-w-none">
              <h3>Benefits of NFT Tickets</h3>
              <ul>
                <li>Guaranteed authenticity and prevention of counterfeiting</li>
                <li>Easy transfer and resale within platform guidelines</li>
                <li>Collectible digital memorabilia from your favorite events</li>
                <li>Special perks and access through NFT ownership</li>
                <li>Transparent transaction history</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}