"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import ContentCard from "./content-card"

interface ContentCarouselProps {
  items: any[]
  showProgress?: boolean
}

export default function ContentCarousel({ items, showProgress = false }: ContentCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    const scrollAmount = carouselRef.current.clientWidth * 0.75
    const newScrollLeft =
      direction === "left"
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount

    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })

    // Update arrow visibility after scroll
    setTimeout(() => {
      if (!carouselRef.current) return
      setShowLeftArrow(carouselRef.current.scrollLeft > 0)
      setShowRightArrow(
        carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth - 10,
      )
    }, 300)
  }

  return (
    <div className="relative group">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Content Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x"
        onScroll={() => {
          if (!carouselRef.current) return
          setShowLeftArrow(carouselRef.current.scrollLeft > 0)
          setShowRightArrow(
            carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth - 10,
          )
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="flex-none w-[200px] snap-start">
            <Link href={`/entertainment/content/${item.id}`}>
              <ContentCard item={item} showProgress={showProgress} />
            </Link>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
