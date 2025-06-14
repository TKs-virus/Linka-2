"use client"

import { useState, useEffect } from "react"
import { Play, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock featured content
const featuredContent = [
  {
    id: "1",
    title: "The Epic Saga",
    description: "An epic journey through time and space that will leave you breathless.",
    image: "/placeholder.svg?height=600&width=1200",
    year: "2023",
    rating: "TV-MA",
    duration: "2h 35m",
    genre: "Sci-Fi, Adventure",
  },
  {
    id: "2",
    title: "Dark Waters",
    description: "A thrilling underwater adventure with unexpected twists and turns.",
    image: "/placeholder.svg?height=600&width=1200",
    year: "2023",
    rating: "PG-13",
    duration: "1h 55m",
    genre: "Thriller, Mystery",
  },
  {
    id: "3",
    title: "City of Dreams",
    description: "Follow the intertwined stories of people chasing their dreams in the big city.",
    image: "/placeholder.svg?height=600&width=1200",
    year: "2023",
    rating: "TV-14",
    duration: "Series",
    genre: "Drama, Romance",
  },
]

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentContent = featuredContent[currentIndex]

  // Auto-rotate featured content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${currentContent.image})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">{currentContent.title}</h1>

            <div className="flex items-center text-sm text-gray-300 mb-4">
              <span>{currentContent.year}</span>
              <span className="mx-2">•</span>
              <span>{currentContent.rating}</span>
              <span className="mx-2">•</span>
              <span>{currentContent.duration}</span>
              <span className="mx-2">•</span>
              <span>{currentContent.genre}</span>
            </div>

            <p className="text-lg text-gray-200 mb-6">{currentContent.description}</p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                Play Now
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Plus className="h-5 w-5" />
                Add to My List
              </Button>
              <Link href={`/entertainment/content/${currentContent.id}`}>
                <Button variant="link" className="text-white">
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
