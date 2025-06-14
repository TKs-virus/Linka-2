"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Video } from "lucide-react"

interface FeaturedDoctorCardProps {
  doctor: {
    id: number
    name: string
    specialty: string
    image: string
    rating: number
    reviewCount: number
    availableToday: boolean
  }
}

export default function FeaturedDoctorCard({ doctor }: FeaturedDoctorCardProps) {
  const router = useRouter()

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
      </div>
      <CardContent className="pt-6">
        <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
        <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-medium mr-1">{doctor.rating}</span>
          <span className="text-sm text-muted-foreground">({doctor.reviewCount} reviews)</span>
        </div>
        {doctor.availableToday && (
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
            Available today
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => router.push(`/healthcare/doctor/${doctor.id}`)}>
          <Video className="h-4 w-4 mr-2" />
          Book Consultation
        </Button>
      </CardFooter>
    </Card>
  )
}
