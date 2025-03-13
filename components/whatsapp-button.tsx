"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your products.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-2 text-sm whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        )}
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          size="lg"
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  )
}

