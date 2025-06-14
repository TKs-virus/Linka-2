"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FilterSidebarProps {
  showOnMobile?: boolean
  onClose?: () => void
}

// Mock filter data
const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
]

const years = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2010-2014",
  "2000-2009",
  "Before 2000",
]

const languages = ["English", "Spanish", "French", "German", "Japanese", "Korean", "Chinese", "Hindi"]

const ratings = ["5 Stars", "4+ Stars", "3+ Stars", "2+ Stars", "1+ Star"]

export default function FilterSidebar({ showOnMobile = false, onClose }: FilterSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {showOnMobile && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose}></div>}

      {/* Sidebar */}
      <aside
        className={`
          w-full md:w-64 bg-gray-900 p-4 rounded-lg
          fixed md:static top-0 bottom-0 right-0 z-50
          transform transition-transform duration-300 ease-in-out
          ${showOnMobile ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          overflow-y-auto
        `}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-xl font-bold">Filters</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Desktop Title */}
        <h2 className="text-xl font-bold mb-4 hidden md:block">Filters</h2>

        {/* Genres */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Genres</h3>
          <div className="space-y-2">
            {genres.map((genre) => (
              <div key={genre} className="flex items-center">
                <input
                  type="checkbox"
                  id={`genre-${genre}`}
                  className="rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`genre-${genre}`} className="ml-2 text-sm">
                  {genre}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Year Released */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Year Released</h3>
          <div className="space-y-2">
            {years.map((year) => (
              <div key={year} className="flex items-center">
                <input
                  type="checkbox"
                  id={`year-${year}`}
                  className="rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`year-${year}`} className="ml-2 text-sm">
                  {year}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Language</h3>
          <div className="space-y-2">
            {languages.map((language) => (
              <div key={language} className="flex items-center">
                <input
                  type="checkbox"
                  id={`language-${language}`}
                  className="rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`language-${language}`} className="ml-2 text-sm">
                  {language}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Rating</h3>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <div key={rating} className="flex items-center">
                <input
                  type="checkbox"
                  id={`rating-${rating}`}
                  className="rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`rating-${rating}`} className="ml-2 text-sm">
                  {rating}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Actions */}
        <div className="flex gap-2 mt-6">
          <Button className="flex-1">Apply Filters</Button>
          <Button variant="outline" className="flex-1">
            Reset
          </Button>
        </div>
      </aside>
    </>
  )
}
