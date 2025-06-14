"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin } from "lucide-react"

interface ProfessionalCardProps {
  professional: {
    id: number
    name: string
    title: string
    image: string
    rating: number
    reviewCount: number
    hourlyRate: number
    category: string
    location: string
    tags: string[]
  }
}

export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const router = useRouter()

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={professional.image || "/placeholder.svg"} alt={professional.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{professional.category}</div>
        <h3 className="font-bold text-lg mb-1">{professional.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{professional.title}</p>
        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-medium mr-1">{professional.rating}</span>
          <span className="text-xs text-muted-foreground">({professional.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {professional.location}
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {professional.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t flex justify-between items-center">
        <div className="font-bold">${professional.hourlyRate}/hr</div>
        <Button size="sm" variant="outline" onClick={() => router.push(`/professional/profile/${professional.id}`)}>
          View Profile
        </Button>
      </CardFooter>
    </Card>
  )
}
