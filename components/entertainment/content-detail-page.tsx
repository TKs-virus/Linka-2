"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Heart, Play, Plus, Share, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock content data
const contentData = {
  "1": {
    id: "1",
    title: "The Epic Saga",
    image: "/placeholder.svg?height=600&width=1200",
    poster: "/placeholder.svg?height=400&width=300",
    year: "2023",
    rating: "TV-MA",
    duration: "2h 35m",
    genre: "Sci-Fi, Adventure",
    description:
      "An epic journey through time and space that will leave you breathless. Follow the adventures of a group of unlikely heroes as they navigate through the cosmos, facing challenges and discovering the true meaning of courage.",
    cast: [
      { name: "John Smith", role: "Captain Alex", image: "/placeholder.svg?height=100&width=100" },
      { name: "Emma Johnson", role: "Dr. Eliza", image: "/placeholder.svg?height=100&width=100" },
      { name: "Michael Brown", role: "Commander Zack", image: "/placeholder.svg?height=100&width=100" },
      { name: "Sarah Davis", role: "Lieutenant Maya", image: "/placeholder.svg?height=100&width=100" },
    ],
    director: "Christopher Nolan",
    writers: ["Jane Doe", "Robert Wilson"],
    userRating: 4.8,
    reviews: 1245,
    seasons: null, // Movie, no seasons
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  "2": {
    id: "2",
    title: "Dark Waters",
    image: "/placeholder.svg?height=600&width=1200",
    poster: "/placeholder.svg?height=400&width=300",
    year: "2023",
    rating: "PG-13",
    duration: "1h 55m",
    genre: "Thriller, Mystery",
    description:
      "A thrilling underwater adventure with unexpected twists and turns. When a team of marine biologists discovers a mysterious creature in the depths of the ocean, they soon realize they've stumbled upon something that could change the course of human history.",
    cast: [
      { name: "David Wilson", role: "Dr. James", image: "/placeholder.svg?height=100&width=100" },
      { name: "Lisa Chen", role: "Captain Mei", image: "/placeholder.svg?height=100&width=100" },
      { name: "Robert Taylor", role: "Professor Thomas", image: "/placeholder.svg?height=100&width=100" },
      { name: "Jennifer Lopez", role: "Dr. Rodriguez", image: "/placeholder.svg?height=100&width=100" },
    ],
    director: "James Cameron",
    writers: ["Steven Spielberg", "George Lucas"],
    userRating: 4.6,
    reviews: 987,
    seasons: null, // Movie, no seasons
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  "3": {
    id: "3",
    title: "City of Dreams",
    image: "/placeholder.svg?height=600&width=1200",
    poster: "/placeholder.svg?height=400&width=300",
    year: "2023",
    rating: "TV-14",
    duration: "Series",
    genre: "Drama, Romance",
    description:
      "Follow the intertwined stories of people chasing their dreams in the big city. From aspiring artists to ambitious entrepreneurs, each character navigates the challenges of love, career, and self-discovery in this compelling drama series.",
    cast: [
      { name: "Emily Johnson", role: "Sophia", image: "/placeholder.svg?height=100&width=100" },
      { name: "Daniel Lee", role: "Marcus", image: "/placeholder.svg?height=100&width=100" },
      { name: "Olivia Martinez", role: "Isabella", image: "/placeholder.svg?height=100&width=100" },
      { name: "William Jackson", role: "Tyler", image: "/placeholder.svg?height=100&width=100" },
    ],
    director: "Various",
    writers: ["Shonda Rhimes", "Aaron Sorkin"],
    userRating: 4.7,
    reviews: 2345,
    seasons: [
      { number: 1, episodes: 10, year: "2023" },
      { number: 2, episodes: 8, year: "2023" },
    ],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
}

// Mock related content
const relatedContent = [
  {
    id: "4",
    title: "Breaking Bad",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Drama",
  },
  {
    id: "5",
    title: "The Queen's Gambit",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Drama",
  },
  {
    id: "6",
    title: "The Last of Us",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Drama",
  },
  {
    id: "7",
    title: "Dune",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Sci-Fi",
  },
  {
    id: "8",
    title: "Wednesday",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Comedy",
  },
]

interface ContentDetailPageProps {
  id: string
}

export default function ContentDetailPage({ id }: ContentDetailPageProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "episodes" | "more">("overview")
  const [showTrailer, setShowTrailer] = useState(false)

  // Get content data based on ID
  const content = contentData[id as keyof typeof contentData]

  if (!content) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
          <Link href="/entertainment">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <div className="relative">
        {/* Background Image */}
        <div className="relative h-[50vh] min-h-[400px] w-full">
          <Image src={content.image || "/placeholder.svg"} alt={content.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Back Button */}
        <Link href="/entertainment" className="absolute top-4 left-4 z-10">
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>

        {/* Trailer Modal */}
        {showTrailer && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                src={content.trailer}
                className="w-full h-full"
                allowFullScreen
                title={`${content.title} Trailer`}
              ></iframe>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70"
                onClick={() => setShowTrailer(false)}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Poster (Mobile: Hidden, Desktop: Shown) */}
          <div className="hidden md:block relative w-64 h-96 flex-shrink-0">
            <Image
              src={content.poster || "/placeholder.svg"}
              alt={content.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content Details */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{content.title}</h1>

            <div className="flex items-center text-sm text-gray-300 mb-4 flex-wrap gap-y-1">
              <span>{content.year}</span>
              <span className="mx-2">•</span>
              <span>{content.rating}</span>
              <span className="mx-2">•</span>
              <span>{content.duration}</span>
              <span className="mx-2">•</span>
              <span>{content.genre}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-yellow-500/20 px-2 py-1 rounded">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="ml-1 font-medium">{content.userRating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-gray-400 ml-2">({content.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                Play Now
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={() => setShowTrailer(true)}>
                Watch Trailer
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Plus className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share className="h-5 w-5" />
              </Button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-800 mb-6">
              <div className="flex gap-4">
                <button
                  className={`py-2 px-1 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === "overview"
                      ? "border-white text-white"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                {content.seasons && (
                  <button
                    className={`py-2 px-1 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === "episodes"
                        ? "border-white text-white"
                        : "border-transparent text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab("episodes")}
                  >
                    Episodes
                  </button>
                )}
                <button
                  className={`py-2 px-1 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === "more"
                      ? "border-white text-white"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("more")}
                >
                  More Like This
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div>
                  <p className="text-gray-300 mb-6">{content.description}</p>

                  {/* Cast & Crew */}
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Cast & Crew</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {content.cast.map((person) => (
                        <div key={person.name} className="text-center">
                          <div className="relative w-16 h-16 mx-auto mb-2">
                            <Image
                              src={person.image || "/placeholder.svg"}
                              alt={person.name}
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <p className="font-medium text-sm">{person.name}</p>
                          <p className="text-xs text-gray-400">{person.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm">
                        <span className="text-gray-400">Director: </span>
                        {content.director}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="text-gray-400">Writers: </span>
                        {content.writers.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Episodes Tab */}
              {activeTab === "episodes" && content.seasons && (
                <div>
                  <div className="mb-6">
                    <select className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-white/20">
                      {content.seasons.map((season) => (
                        <option key={season.number} value={season.number}>
                          Season {season.number} ({season.year})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-4">
                    {Array.from({ length: content.seasons[0].episodes }).map((_, index) => (
                      <div key={index} className="flex gap-4 bg-gray-900 rounded-lg overflow-hidden p-4">
                        <div className="relative h-24 w-40 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=200&width=300"
                            alt={`Episode ${index + 1}`}
                            fill
                            className="object-cover rounded"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                            <Play className="h-10 w-10" />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Episode {index + 1}</h3>
                            <span className="text-sm text-gray-400">45m</span>
                          </div>
                          <p className="text-sm text-gray-300 mt-1">Episode title goes here</p>
                          <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                            Episode description with a brief synopsis of what happens in this particular episode.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* More Like This Tab */}
              {activeTab === "more" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">More Like This</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {relatedContent.map((item) => (
                      <Link key={item.id} href={`/entertainment/content/${item.id}`}>
                        <div className="relative group rounded-lg overflow-hidden">
                          <div className="aspect-[2/3] relative">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                            <h3 className="font-medium text-sm">{item.title}</h3>
                            <p className="text-xs text-gray-300 mt-1">
                              {item.type} • {item.genre}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
