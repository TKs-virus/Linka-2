import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, Filter } from "lucide-react"

export default function ChineseCuisinePage() {
  const restaurants = [
    {
      id: 1,
      name: "Golden Dragon",
      rating: 4.7,
      reviews: 980,
      deliveryTime: "30-45",
      deliveryFee: 2.49,
      image: "/placeholder.svg?height=200&width=300",
      distance: "1.5 miles",
      specialties: ["Dim Sum", "Peking Duck", "Hot Pot"],
      priceRange: "$$$",
      isOpen: true,
      featured: true,
    },
    {
      id: 2,
      name: "Panda Express",
      rating: 4.2,
      reviews: 1500,
      deliveryTime: "15-25",
      deliveryFee: 1.99,
      image: "/placeholder.svg?height=200&width=300",
      distance: "0.5 miles",
      specialties: ["Orange Chicken", "Fried Rice", "Chow Mein"],
      priceRange: "$",
      isOpen: true,
      featured: false,
    },
    {
      id: 3,
      name: "Szechuan Palace",
      rating: 4.8,
      reviews: 650,
      deliveryTime: "35-50",
      deliveryFee: 3.99,
      image: "/placeholder.svg?height=200&width=300",
      distance: "2.3 miles",
      specialties: ["Spicy", "Authentic", "Mapo Tofu"],
      priceRange: "$$",
      isOpen: true,
      featured: true,
    },
    {
      id: 4,
      name: "Lucky Bamboo",
      rating: 4.5,
      reviews: 420,
      deliveryTime: "25-35",
      deliveryFee: 0,
      image: "/placeholder.svg?height=200&width=300",
      distance: "1.8 miles",
      specialties: ["Cantonese", "Seafood", "Noodles"],
      priceRange: "$$",
      isOpen: false,
      featured: false,
    },
  ]

  const popularDishes = [
    {
      name: "Sweet & Sour Pork",
      restaurants: 15,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Kung Pao Chicken",
      restaurants: 12,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Fried Rice",
      restaurants: 18,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Spring Rolls",
      restaurants: 10,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <span>/</span>
        <Link href="/food-delivery" className="hover:text-gray-700">
          Food Delivery
        </Link>
        <span>/</span>
        <span className="text-gray-900">Chinese Cuisine</span>
      </nav>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Chinese Cuisine</h1>
          <p className="text-gray-600">Authentic Chinese flavors from traditional to modern</p>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Popular Dishes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Popular Chinese Dishes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularDishes.map((dish) => (
            <Card key={dish.name} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-16 h-16 mx-auto mb-2 rounded-full object-cover"
                />
                <h3 className="font-medium text-sm">{dish.name}</h3>
                <p className="text-xs text-gray-500">{dish.restaurants} restaurants</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Restaurants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Chinese Restaurants Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="w-full h-40 object-cover"
                />
                {!restaurant.isOpen && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Badge variant="secondary">Closed</Badge>
                  </div>
                )}
                {restaurant.featured && <Badge className="absolute top-2 left-2 bg-red-600">Featured</Badge>}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{restaurant.name}</h3>
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm">{restaurant.rating}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">({restaurant.reviews} reviews)</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="ml-1 text-sm text-gray-500">{restaurant.distance}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm">{restaurant.priceRange}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {restaurant.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{restaurant.deliveryTime} min</span>
                  </div>
                  <div className="text-sm">
                    {restaurant.deliveryFee === 0 ? (
                      <span className="text-green-600 font-medium">Free Delivery</span>
                    ) : (
                      <span>${restaurant.deliveryFee.toFixed(2)} delivery</span>
                    )}
                  </div>
                </div>
                <Button className="w-full mt-4" disabled={!restaurant.isOpen}>
                  {restaurant.isOpen ? "Order Now" : "Closed"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
