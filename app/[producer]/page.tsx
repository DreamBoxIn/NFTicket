import { ProducerHeader } from "@/components/sections/producer-header"
import { ProducerEvents } from "@/components/sections/producer-events"
import { Navigation } from "@/components/navigation"

export default function ProducerPage({ params }: { params: { producer: string } }) {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
      <Navigation />
      <div className="container mx-auto px-4 space-y-16 py-8">
        <ProducerHeader producer={params.producer} />
        <ProducerEvents producer={params.producer} />
      </div>
    </main>
  )
}