"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { QrCode, Download, Calendar, MapPin } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useTranslationsContext } from "@/providers/translations-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface NFTPreviewProps {
  ticket: {
    type: string
    benefits: string[]
    currency?: string
    price?: string
  }
  event?: {
    title: string
    date: string
    location: string
    description?: string
    image?: string
  }
  onClose: () => void
}

export function NFTPreview({ ticket, event, onClose }: NFTPreviewProps) {
  const { t } = useTranslationsContext()

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-[500px] h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle>{t("tickets.yourNFTTicket")}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 px-6">
          <div className="space-y-6 py-4">
            {/* NFT Preview Card */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gradient-to-br from-[#41dbcb]/20 to-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <QrCode className="h-32 w-32 text-[#41dbcb]" />
                  </div>
                  {/* Event Details Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent flex flex-col justify-end p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{ticket.type} {t("common.ticket")}</h3>
                        {ticket.price && (
                          <p className="text-sm text-muted-foreground">
                            {ticket.price} {ticket.currency}
                          </p>
                        )}
                      </div>
                      {event && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-lg">{event.title}</h4>
                          <div className="flex flex-col gap-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Button */}
            <Button className="w-full gap-2 bg-[#41dbcb] hover:bg-[#41dbcb]/90">
              <Download className="h-4 w-4" />
              {t("common.download")} {t("common.ticket")}
            </Button>

            <Separator />

            {/* Event Description */}
            {event?.description && (
              <>
                <div className="space-y-2">
                  <h4 className="font-semibold">{t("common.details")}</h4>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
                <Separator />
              </>
            )}

            {/* NFT Benefits */}
            <div className="space-y-4 pb-6">
              <h4 className="font-semibold">{t("tickets.benefits")}</h4>
              <div className="grid gap-3">
                {ticket.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#41dbcb] mt-2" />
                    <p className="text-sm flex-1">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}