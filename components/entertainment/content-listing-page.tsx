"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContentCard from "./content-card"
import ContentListItem from "./content-list-item"
import FilterSidebar from "./filter-sidebar"

// Mock data
const allContent = [
  {
    id: "1",
    title: "Stranger Things",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Sci-Fi",
    year: "2016",
    rating: 4.8,
    description:
      "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
  },
  {
    id: "2",
    title: "The Witcher",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Fantasy",
    year: "2019",
    rating: 4.5,
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
  },
  {
    id: "3",
    title: "Inception",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Sci-Fi",
    year: "2010",
    rating: 4.9,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  // Add more mock content items
  {
    id: "4",
    title: "Breaking Bad",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Drama",
    year: "2008",
    rating: 4.9,
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  },
  {
    id: "5",
    title: "The Queen's Gambit",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Drama",
    year: "2020",
    rating: 4.7,
    description:
      "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
  },
  {
    id: "6",
    title: "The Last of Us",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Drama",
    year: "2023",
    rating: 4.8,
    description:
      "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
  },
  {
    id: "7",
    title: "Dune",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Sci-Fi",
    year: "2021",
    rating: 4.7,
    description:
      "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
  },
  {
    id: "8",
    title: "Wednesday",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Comedy",
    year: "2022",
    rating: 4.6,
    description:
      "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree, and solve the supernatural mystery that affected her family 25 years ago.",
  },
  {
    id: "9",
    title: "Oppenheimer",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Drama",
    year: "2023",
    rating: 4.9,
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: "10",
    title: "Barbie",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Comedy",
    year: "2023",
    rating: 4.5,
    description: "Barbie suffers a crisis that leads her to question her world and her existence.",
  },
  {
    id: "11",
    title: "The Office",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Comedy",
    year: "2005",
    rating: 4.8,
    description:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
  },
  {
    id: "12",
    title: "Interstellar",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Sci-Fi",
    year: "2014",
    rating: 4.8,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
]

const sortOptions = [
  { id: "popular", name: "Popular" },
  { id: "trending", name: "Trending" },
  { id: "newest", name: "Newest" },
  { id: "highest-rated", name: "Highest Rated" },
  { id: "a-z", name: "A-Z" },
]

interface ContentListingPageProps {
  searchParams: {
    genre?: string
    category?: string
    sort?: string
  }
}

export default function ContentListingPage({ searchParams }: ContentListingPageProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState(searchParams.sort || "popular")
  const [showFilters, setShowFilters] = useState(false)
  const [filteredContent, setFilteredContent] = useState(allContent)

  // Get category and genre from URL params
  const category = searchParams.category || "all"
  const genre = searchParams.genre || "all"

  // Title based on filters
  const pageTitle =
    genre !== "all"
      ? `${genre} ${category !== "all" ? category : "Content"}`
      : category !== "all"
        ? category
        : "All Content"

  // Apply filters when params change
  useEffect(() => {
    let filtered = [...allContent]

    if (genre && genre !== "all") {
      filtered = filtered.filter((item) => item.genre?.toLowerCase() === genre.toLowerCase())
    }

    if (category && category !== "all") {
      filtered = filtered.filter((item) => {
        if (category === "movies") return item.type === "Movie"
        if (category === "tv-shows") return item.type === "TV Show"
        return true
      })
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
        break
      case "highest-rated":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "a-z":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      // For popular and trending, we'll use the default order in our mock data
    }

    setFilteredContent(filtered)
  }, [genre, category, sortBy])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <Link href="/entertainment" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-white">{pageTitle}</span>
        </div>

        {/* Title and Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <h1 className="text-3xl font-bold">{pageTitle}</h1>

          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 text-white rounded-md py-2 pl-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <ChevronRight className="h-4 w-4 rotate-90" />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-800 rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-r-none ${viewMode === "grid" ? "bg-gray-700" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-l-none ${viewMode === "list" ? "bg-gray-700" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
            </div>

            {/* Filter Button (Mobile) */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <FilterSidebar showOnMobile={showFilters} onClose={() => setShowFilters(false)} />

          {/* Content Grid/List */}
          <div className="flex-1">
            {filteredContent.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl">No content found matching your filters.</p>
                <Button
                  variant="link"
                  className="mt-4 text-white"
                  onClick={() => {
                    // Reset filters
                    window.location.href = "/entertainment/browse"
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredContent.map((item) => (
                  <Link key={item.id} href={`/entertainment/content/${item.id}`}>
                    <ContentCard item={item} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredContent.map((item) => (
                  <Link key={item.id} href={`/entertainment/content/${item.id}`}>
                    <ContentListItem item={item} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
