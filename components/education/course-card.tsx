"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface CourseCardProps {
  course: {
    id: number
    title: string
    instructor: string
    image: string
    rating: number
    reviewCount: number
    price: number
    category: string
    level: string
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter()

  return (
    <Card
      className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={() => router.push(`/education/course/${course.id}`)}
    >
      <div className="relative h-40">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
        <Badge className="absolute top-2 right-2 bg-blue-600">{course.level}</Badge>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{course.category}</div>
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-medium mr-1">{course.rating}</span>
          <span className="text-xs text-muted-foreground">({course.reviewCount})</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t mt-2">
        <div className="font-bold">${course.price}</div>
      </CardFooter>
    </Card>
  )
}
