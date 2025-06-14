"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Plane, Hotel, Car, Package, Compass } from "lucide-react"
import FlightSearchForm from "./search-forms/flight-search-form"
import HotelSearchForm from "./search-forms/hotel-search-form"
import CarSearchForm from "./search-forms/car-search-form"
import PackageSearchForm from "./search-forms/package-search-form"
import ActivitySearchForm from "./search-forms/activity-search-form"
import TravelDestinationCard from "./travel-destination-card"

export default function TravelHomePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("flights")

  const popularDestinations = [
    {
      name: "Paris, France",
      image: "/placeholder.jpg",
      description: "Experience the city of lights and romance",
      price: "From $599",
    },
    {
      name: "Bali, Indonesia",
      image: "/placeholder.jpg",
      description: "Discover tropical paradise and cultural wonders",
      price: "From $799",
    },
    {
      name: "Tokyo, Japan",
      image: "/placeholder.jpg",
      description: "Explore the perfect blend of tradition and innovation",
      price: "From $899",
    },
    {
      name: "New York, USA",
      image: "/placeholder.jpg",
      description: "Visit the city that never sleeps",
      price: "From $499",
    },
  ]

  const handleSearch = (type: string) => {
    router.push(`/travel/${type}-search-results`)
  }

  return (
    <main className="flex-grow">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full">
        <Image src="/placeholder.jpg" alt="Travel destinations" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl">
            Find and book flights, hotels, car rentals and more at the best prices
          </p>
        </div>
      </div>

      {/* Search Forms */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <Tabs defaultValue="flights" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="flights" className="flex items-center gap-2">
                <Plane className="h-4 w-4" />
                <span>Flights</span>
              </TabsTrigger>
              <TabsTrigger value="hotels" className="flex items-center gap-2">
                <Hotel className="h-4 w-4" />
                <span>Hotels</span>
              </TabsTrigger>
              <TabsTrigger value="cars" className="flex items-center gap-2">
                <Car className="h-4 w-4" />
                <span>Car Rentals</span>
              </TabsTrigger>
              <TabsTrigger value="packages" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span>Packages</span>
              </TabsTrigger>
              <TabsTrigger value="activities" className="flex items-center gap-2">
                <Compass className="h-4 w-4" />
                <span>Activities</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="flights">
              <FlightSearchForm onSearch={() => handleSearch("flights")} />
            </TabsContent>
            <TabsContent value="hotels">
              <HotelSearchForm onSearch={() => handleSearch("hotels")} />
            </TabsContent>
            <TabsContent value="cars">
              <CarSearchForm onSearch={() => handleSearch("cars")} />
            </TabsContent>
            <TabsContent value="packages">
              <PackageSearchForm onSearch={() => handleSearch("packages")} />
            </TabsContent>
            <TabsContent value="activities">
              <ActivitySearchForm onSearch={() => handleSearch("activities")} />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Promotional Deals */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Summer Sale: Up to 40% Off!</h2>
              <p className="text-lg opacity-90 mb-4">Book your dream vacation with incredible discounts</p>
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              View Deals
            </Button>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDestinations.map((destination, index) => (
            <TravelDestinationCard key={index} destination={destination} />
          ))}
        </div>
      </div>

      {/* Travel Guides */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Travel Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image src="/placeholder.jpg" alt="Travel guide" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Top 10 Beach Destinations</h3>
              <p className="text-muted-foreground mb-4">Discover the most beautiful beaches around the world</p>
              <Button variant="outline">Read Guide</Button>
            </div>
          </div>
          <div className="bg-card rounded-xl overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image src="/placeholder.jpg" alt="Travel guide" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Budget Travel Tips</h3>
              <p className="text-muted-foreground mb-4">How to travel the world without breaking the bank</p>
              <Button variant="outline">Read Guide</Button>
            </div>
          </div>
          <div className="bg-card rounded-xl overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image src="/placeholder.jpg" alt="Travel guide" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Family-Friendly Vacations</h3>
              <p className="text-muted-foreground mb-4">Perfect destinations for traveling with children</p>
              <Button variant="outline">Read Guide</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
