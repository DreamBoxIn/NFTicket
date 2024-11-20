"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is an NFT ticket?",
    answer: "An NFT ticket is a digital ticket stored on the blockchain that proves ownership and authenticity. It can also be collected and traded as a unique digital asset."
  },
  {
    question: "How do I store my NFT ticket?",
    answer: "Your NFT ticket will be stored in your digital wallet. We recommend using MetaMask or any other Ethereum-compatible wallet."
  },
  {
    question: "Can I transfer my ticket to someone else?",
    answer: "Yes, NFT tickets can be transferred to other wallet addresses. However, some tickets may have transfer restrictions to prevent scalping."
  },
  {
    question: "What happens if I lose access to my wallet?",
    answer: "It's crucial to keep your wallet recovery phrase safe. If you lose access, you won't be able to access your NFT ticket."
  },
  {
    question: "How do I enter the event with an NFT ticket?",
    answer: "Simply show the QR code in your NFT ticket at the entrance. Our staff will scan it to verify authenticity."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about NFT tickets and the event
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}