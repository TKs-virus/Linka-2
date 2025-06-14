"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"

interface PopularCategoryCardProps {
  category: {
    id: number
    name: string
    image: string
    itemCount: number
  }
}

export default function PopularCategoryCard({ category }: PopularCategoryCardProps) {
  const router = useRouter()

  return (
    <Card
      className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={() => router.push(`/healthcare/pharmacy/category/${category.id}`)}
    >
      <div className="relative h-40">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="font-bold text-lg">{category.name}</h3>
          <p className="text-sm">{category.itemCount} items</p>
        </div>
      </div>
    </Card>
  )
}
