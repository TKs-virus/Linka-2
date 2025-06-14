"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock watchlist data
const watchlistData = [
  {
    id: "1",
    title: "Stranger Things",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Sci-Fi",
    progress: 65,
    year: "2016",
  },
  {
    id: "2",
    title: "The Witcher",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Fantasy",
    progress: 30,
    year: "2019",
  },
  {
    id: "3",
    title: "Inception",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Sci-Fi",
    year: "2010",
  },
  {
    id: "6",
    title: "The Last of Us",
    image: "/placeholder.svg?height=400&width=300",
    type: "TV Show",
    genre: "Drama",
    year: "2023",
  },
  {
    id: "7",
    title: "Dune",
    image: "/placeholder.svg?height=400&width=300",
    type: "Movie",
    genre: "Sci-Fi",
    year: "2021",
  },
]

export default function WatchlistPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [watchlist, setWatchlist] = useState(watchlistData);
  
  const removeFromWatchlist = (id: string) => {
    setWatchlist(watchlist.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/entertainment" className="mr-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">My List</h1>
        </div>
        
        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400">{watchlist.length} titles</p>
          
          {/* View Mode Toggle */}
          <div className="flex bg-gray-800 rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-r-none ${viewMode === 'grid' ? 'bg-gray-700' : ''}`}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-l-none ${viewMode === 'list' ? 'bg-gray-700' : ''}`}
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
        </div>
        
        {/* Content */}
        {watchlist.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">Your list is empty</h2>
            <p className="text-gray-400 mb-6">Add shows and movies to your list to watch them later</p>
            <Link href="/entertainment">
              <Button>Browse Content</Button>
            </Link>
          </div>\
        ) : viewMode === "gri\
