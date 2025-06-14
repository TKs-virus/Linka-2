"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ServiceCategoryCardProps {
  category: {
    id: number
    name: string
    icon: ReactNode
    description: string
    professionalCount: number
  }
}

export default function ServiceCategoryCard({ category }: ServiceCategoryCardProps) {
  const router = useRouter()

  return (
    <Card
      className="cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={() => router.push(`/professional/search?category=${category.id}`)}
    >
      <CardContent className="p-6 text-center">
        <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          {category.icon}
        </div>
        <h3 className="font-bold text-lg mb-2">{category.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
        <p className="text-sm font-medium">{category.professionalCount} professionals</p>
      </CardContent>
    </Card>
  )
}
