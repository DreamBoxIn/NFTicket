import { ProducerHeader } from "@/components/sections/producer-header";
import { ProducerEvents } from "@/components/sections/producer-events";
import { Navigation } from "@/components/navigation";

type ProducerPageProps = {
  params: {
    producer: string;
  };
};

export default function ProducerPage({ params }: ProducerPageProps) {
  const { producer } = params;

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
      <Navigation />
      <div className="container mx-auto px-4 space-y-16 py-8">
        <ProducerHeader producer={producer} />
        <ProducerEvents producer={producer} />
      </div>
    </main>
  );
}