"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContentCarousel from "./content-carousel"
import HeroBanner from "./hero-banner"

// Mock data
const continueWatching = [
  {
    id: "1",
    title: "Stranger Things",
    image: "/placeholder.svg?height=400&width=300",
    progress: 65,
    type: "TV Show",
    genre: "Sci-Fi",
  },
  {
    id: "2",
    title: "The Witcher",
    image: "/placeholder.svg?height=400&width=300",
    progress: 30,
    type: "TV Show",
    genre: "Fantasy",
  },
  {
    id: "3",
    title: "Inception",
    image: "/placeholder.svg?height=400&width=300",
    progress: 80,
    type: "Movie",
    genre: "Sci-Fi",
  },
  {
    id: "4",
    title: "Breaking Bad",
    image: "/placeholder.svg?height=400&width=300",
    progress: 45,
    type: "TV Show",
    genre: "Drama",
  },
  {
    id: "5",
    title: "The Queen's Gambit",
    image: "/placeholder.svg?height=400&width=300",
    progress: 20,
    type: "TV Show",
    genre: "Drama",
  },
]

const trending = [
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
  {
    id: "9",
    title: "Oppenheimer",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Drama",
  },
  {
    id: "10",
    title: "Barbie",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Comedy",
  },
]

const genres = [
  { id: "action", name: "Action" },
  { id: "comedy", name: "Comedy" },
  { id: "drama", name: "Drama" },
  { id: "sci-fi", name: "Sci-Fi" },
  { id: "documentary", name: "Documentary" },
  { id: "music", name: "Music" },
  { id: "thriller", name: "Thriller" },
]

const categories = [
  { id: "movies", name: "Movies" },
  { id: "tv-shows", name: "TV Shows" },
  { id: "originals", name: "Originals" },
  { id: "live-sports", name: "Live Sports" },
  { id: "kids", name: "Kids" },
]

export default function EntertainmentHomePage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroBanner />

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8 flex overflow-x-auto gap-4 pb-2">
          <Button
            variant={activeTab === "all" ? "default" : "outline"}
            onClick={() => setActiveTab("all")}
            className="whitespace-nowrap"
          >
            For You
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeTab === category.id ? "default" : "outline"}
              onClick={() => setActiveTab(category.id)}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Continue Watching Section */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Continue Watching</h2>
            <Link href="/entertainment/my-list" className="flex items-center text-sm text-gray-300 hover:text-white">
              See All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <ContentCarousel items={continueWatching} showProgress />
        </section>

        {/* Trending Now Section */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <Link
              href="/entertainment/browse?sort=trending"
              className="flex items-center text-sm text-gray-300 hover:text-white"
            >
              See All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <ContentCarousel items={trending} />
        </section>

        {/* Genres Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Browse by Genre</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {genres.map((genre) => (
              <Link
                key={genre.id}
                href={`/entertainment/browse?genre=${genre.id}`}
                className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
              >
                {genre.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/entertainment/browse?category=${category.id}`}
                className="relative aspect-video rounded-lg overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"
                  style={{ backgroundImage: `url(/placeholder.svg?height=200&width=400)` }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <span className="text-xl font-bold">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
