"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQModalProps {
  open: boolean
  onClose: () => void
}

const faqs = [
  {
    question: "What is an NFT ticket?",
    answer: "An NFT ticket is a digital ticket stored on the blockchain that proves ownership and authenticity. Each ticket is a unique digital asset that can be collected and includes special perks or benefits for the holder."
  },
  {
    question: "How do I purchase tickets?",
    answer: "First, connect your Web3 wallet. Browse available events, select your preferred ticket tier, and complete the purchase using USDC or other supported cryptocurrencies. The NFT ticket will be automatically transferred to your wallet."
  },
  {
    question: "Which wallets are supported?",
    answer: "We support major Web3 wallets including MetaMask, WalletConnect, Coinbase Wallet, and other Ethereum-compatible wallets."
  },
  {
    question: "What cryptocurrencies can I use?",
    answer: "Currently, we accept USDC (default), USDT, and BTC for ticket purchases. All prices are displayed in USD equivalent."
  },
  {
    question: "How do I enter events with my NFT ticket?",
    answer: "Simply show the QR code in your NFT ticket at the venue entrance. Our staff will scan it to verify authenticity and grant access."
  },
  {
    question: "Can I transfer or sell my ticket?",
    answer: "Yes, NFT tickets can be transferred to other wallet addresses. However, some tickets may have transfer restrictions to prevent scalping. All transfers must be done through our platform."
  },
  {
    question: "What happens if I lose access to my wallet?",
    answer: "It's crucial to keep your wallet recovery phrase safe. If you lose access to your wallet, you won't be able to access your NFT tickets. We recommend using a secure wallet and backing up your recovery phrase."
  },
  {
    question: "Are there any additional fees?",
    answer: "Transaction fees (gas fees) on the blockchain apply to all purchases. These fees vary based on network conditions. All fees will be clearly displayed before purchase."
  },
  {
    question: "What makes NFT tickets special?",
    answer: "NFT tickets offer several advantages: guaranteed authenticity, easy transfer within platform guidelines, collectible digital memorabilia, special perks through ownership, and transparent transaction history."
  },
  {
    question: "How do I contact support?",
    answer: "Our support team is available 24/7 through our help center, email support@moneticket.com, or our Discord community."
  }
]

export function FAQModal({ open, onClose }: FAQModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] h-[80vh]">
        <DialogHeader>
          <DialogTitle>Frequently Asked Questions</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(80vh-8rem)] pr-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}