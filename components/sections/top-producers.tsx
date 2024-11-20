import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const producers = [
  {
    name: "LiveNation",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    eventCount: 45,
    totalSales: "2.5K ETH",
    verified: true,
  },
  {
    name: "NBA Events",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a",
    eventCount: 32,
    totalSales: "1.8K ETH",
    verified: true,
  },
  {
    name: "MoMA",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5",
    eventCount: 28,
    totalSales: "890 ETH",
    verified: true,
  },
  {
    name: "ETH Global",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7",
    eventCount: 24,
    totalSales: "750 ETH",
    verified: true,
  },
]

export function TopProducers() {
  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Top Event Producers</h2>
        <Button variant="ghost">View All</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {producers.map((producer) => (
          <Card key={producer.name}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src={producer.image}
                  alt={producer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{producer.name}</h3>
                    {producer.verified && (
                      <Badge variant="secondary">Verified</Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {producer.eventCount} Events
                  </div>
                  <div className="text-sm font-medium">
                    {producer.totalSales} Total Sales
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}