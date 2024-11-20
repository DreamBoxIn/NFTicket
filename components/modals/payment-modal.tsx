"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NFTPreview } from "@/components/nft-preview";
import { useState } from "react";
import { useTranslationsContext } from "@/providers/translations-provider";

interface PaymentModalProps {
  ticket: {
    type: string;
    price: string; // Precio como string porque es formateado
    currency: string; // USDC, BTC, etc.
    benefits: string[];
  };
  event?: {
    title: string;
    date: string;
    location: string;
    description: string;
  };
  quantity: number;
  onClose: () => void;
}

export function PaymentModal({ ticket, event, quantity, onClose }: PaymentModalProps) {
  const [showNFT, setShowNFT] = useState(false);
  const { t } = useTranslationsContext();
  const total = parseFloat(ticket.price) * quantity;
  const gasFee = ticket.currency === "BTC" ? 0.0001 : 5; // Ajuste de gas basado en la moneda

  return (
    <>
      <Dialog open={!showNFT} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("tickets.completePurchase")}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">{t("tickets.orderSummary")}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>
                      {ticket.type} {t("common.ticket")} × {quantity}
                    </span>
                    <span>
                      {total} {ticket.currency}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>{t("tickets.gasFee")}</span>
                    <span>
                      {gasFee} {ticket.currency}
                    </span>
                  </div>
                  <div className="pt-2 border-t flex justify-between font-bold">
                    <span>{t("tickets.total")}</span>
                    <span>
                      {(total + gasFee).toFixed(ticket.currency === "BTC" ? 8 : 2)}{" "}
                      {ticket.currency}
                    </span>
                  </div>
                </div>
              </div>
              <Button className="w-full" onClick={() => setShowNFT(true)}>
                {t("tickets.completePurchase")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showNFT && (
        <NFTPreview
          ticket={ticket}
          event={event}
          onClose={() => {
            setShowNFT(false);
            onClose();
          }}
        />
      )}
    </>
  );
}
