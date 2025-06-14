import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    role: string
    image: string
    text: string
    course: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-blue-600 mb-4" />
        <p className="mb-6 italic">{testimonial.text}</p>
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <div className="font-bold">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            <div className="text-sm text-blue-600">{testimonial.course}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
