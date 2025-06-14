import Image from "next/image"
import { Button } from "@/components/ui/button"

interface TravelDestinationCardProps {
  destination: {
    name: string
    image: string
    description: string
    price: string
  }
}

export default function TravelDestinationCard({ destination }: TravelDestinationCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <Image src={destination.image || "/placeholder.svg"} alt={destination.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
        <p className="text-muted-foreground mb-4">{destination.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-primary">{destination.price}</span>
          <Button variant="outline" size="sm">
            Explore
          </Button>
        </div>
      </div>
    </div>
  )
}
