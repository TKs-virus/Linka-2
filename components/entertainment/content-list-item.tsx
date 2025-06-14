import Image from "next/image"
import { Star } from "lucide-react"

interface ContentListItemProps {
  item: {
    id: string
    title: string
    image: string
    type?: string
    genre?: string
    year?: string
    rating?: number
    description?: string
  }
}

export default function ContentListItem({ item }: ContentListItemProps) {
  return (
    <div className="flex gap-4 bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors p-2">
      {/* Image */}
      <div className="relative h-24 w-16 flex-shrink-0">
        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover rounded" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <h3 className="font-medium line-clamp-1">{item.title}</h3>

        <div className="flex items-center text-xs text-gray-400 mt-1">
          {item.year && <span>{item.year}</span>}
          {item.year && (item.type || item.genre) && <span className="mx-1">•</span>}
          {item.type && <span>{item.type}</span>}
          {item.type && item.genre && <span className="mx-1">•</span>}
          {item.genre && <span>{item.genre}</span>}
        </div>

        {item.rating && (
          <div className="flex items-center mt-1">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            <span className="text-xs ml-1">{item.rating.toFixed(1)}</span>
          </div>
        )}

        {item.description && <p className="text-xs text-gray-300 mt-1 line-clamp-2">{item.description}</p>}
      </div>
    </div>
  )
}
