import Image from "next/image"

interface ContentCardProps {
  item: {
    id: string
    title: string
    image: string
    progress?: number
    type?: string
    genre?: string
  }
  showProgress?: boolean
}

export default function ContentCard({ item, showProgress = false }: ContentCardProps) {
  return (
    <div className="relative group rounded-lg overflow-hidden">
      {/* Image */}
      <div className="aspect-[2/3] relative">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay with info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
        <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
        {(item.type || item.genre) && (
          <p className="text-xs text-gray-300 mt-1">
            {item.type}
            {item.type && item.genre && " • "}
            {item.genre}
          </p>
        )}
      </div>

      {/* Progress bar */}
      {showProgress && item.progress !== undefined && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
          <div className="h-full bg-red-600" style={{ width: `${item.progress}%` }}></div>
        </div>
      )}
    </div>
  )
}
