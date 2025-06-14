"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ServiceCardProps {
  service: {
    id: string
    name: string
    icon: ReactNode
    description: string
    color: string
  }
  onSelect: (serviceId: string) => void
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <Card className="cursor-pointer transition-transform hover:scale-[1.02]" onClick={() => onSelect(service.id)}>
      <CardContent className="p-6 text-center">
        <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${service.color}`}>
          {service.icon}
        </div>
        <h3 className="font-bold text-lg mb-2">{service.name}</h3>
        <p className="text-sm text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  )
}
