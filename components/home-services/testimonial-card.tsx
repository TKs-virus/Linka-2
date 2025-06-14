import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    location: string
    image: string
    text: string
    service: string
    rating: number
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
        </div>
        <p className="mb-2">"{testimonial.text}"</p>
        <p className="text-sm text-muted-foreground">Service: {testimonial.service}</p>
      </CardContent>
    </Card>
  )
}
