"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Filter, ChevronDown, ChevronUp, Star } from "lucide-react"

export default function HotelSearchResults() {
  const router = useRouter()
  const [priceRange, setPriceRange] = useState([50, 500])
  const [sortBy, setSortBy] = useState("price")
  const [filtersVisible, setFiltersVisible] = useState(true)
  const [viewMode, setViewMode] = useState("list") // list or map

  // Mock hotel data
  const hotels = [
    {
      id: 1,
      name: "Grand Hyatt Dubai",
      image: "/placeholder.jpg",
      rating: 5,
      reviewScore: 9.2,
      reviewCount: 1245,
      price: 220,
      perNight: true,
      location: "Downtown Dubai",
      amenities: ["pool", "wifi", "breakfast", "restaurant", "gym"]
    },
    {
      id: 2,
      name: "Jumeirah Beach Hotel",
      image: "/placeholder.jpg",
      rating: 5,
      reviewScore: 9.4,
      reviewCount: 1876,
      price: 350,
      perNight: true,
      location: "Jumeirah Beach",
      amenities: ["pool", "wifi", "breakfast", "restaurant", "spa", "beach"]
    },
    {
      id: 3,
      name: "Rove Downtown",
      image: "/placeholder.jpg",
      rating: 3,
      reviewScore: 8.8,
      reviewCount: 2340,
      price: 120,
      perNight: true,
      location: "Downtown Dubai",
      amenities: ["wifi", "restaurant", "gym"]
    },
    {
      id: 4,
      name: "Atlantis The Palm",
      image: "/placeholder.jpg",
      rating: 5,
      reviewScore: 9.1,
      reviewCount: 3210,
      price: 420,
      perNight: true,
      location: "Palm Jumeirah",
      amenities: ["pool", "wifi", "breakfast", "restaurant", "spa", "beach", "waterpark"]
    },
    {
      id: 5,
      name: "Zabeel House by Jumeirah",
      image: "/placeholder.jpg",
      rating: 4,
      reviewScore: 8.9,
      reviewCount: 876,
      price: 180,
      perNight: true,
      location: "The Greens",
      amenities: ["pool", "wifi", "restaurant", "gym"]
    }
  ]

  const handleSelectHotel = (hotelId: number) => {
    router.push(`/travel/hotel-details?id=${hotelId}`)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Search criteria summary */}
      <div className="bg-card rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <span className="font-medium">Dubai, United Arab Emirates</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Jun 20, 2025 - Jun 27, 2025 • 2 Adults • 1 Room
          </div>
          <Button variant="outline" size="sm" className="ml-auto">
            Modify Search
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              <div className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                <h2 className="font-semibold">Filters</h2>
              </div>
              {filtersVisible ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </div>
            
            {filtersVisible && (
              <div className="p-4 border-t">
                {/* Price filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price per night</h3>
                  <Slider
                    defaultValue={priceRange}
                    min={10}
                    max={1000}
                    step={10}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Star rating filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Star Rating</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="5star" />
                      <Label htmlFor="5star" className="flex">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="4star" />
                      <Label htmlFor="4star" className="flex">
                        {Array(4).fill(0).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="3star" />
                      <Label htmlFor="3star" className="flex">
                        {Array(3).fill(0).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="2star" />
                      <Label htmlFor="2star" className="flex">
                        {Array(2).fill(0).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Amenities filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Amenities</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="wifi" />
                      <Label htmlFor="wifi">Free WiFi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="breakfast" />
                      <Label htmlFor="breakfast">Breakfast Included</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pool" />
                      <Label htmlFor="pool">Swimming Pool</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="parking" />
                      <Label htmlFor="parking">Free Parking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gym" />
                      <Label htmlFor="gym">Fitness Center</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="spa" />
                      <Label htmlFor="spa">Spa</Label>
                    </div>
                  </div>
                </div>

                {/* Property type filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Property Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hotel" />
                      <Label htmlFor="hotel">Hotel</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="resort" />
                      <Label htmlFor="resort">Resort</Label>
                    \
