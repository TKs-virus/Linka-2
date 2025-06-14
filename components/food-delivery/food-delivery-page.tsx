import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Star } from "lucide-react"

export default function FoodDeliveryPage() {
  // Sample cuisine types
  const cuisines = [
    {
      name: "Italian",
      image: "/placeholder.svg?height=150&width=150",
      href: "/food-delivery/cuisines/italian",
    },
    {
      name: "Chinese",
      image: "/placeholder.svg?height=150&width=150",
      href: "/food-delivery/cuisines/chinese",
    },
    {
      name: "Indian",
      image: "/placeholder.svg?height=150&width=150",
      href: "/food-delivery/cuisines/indian",
    },
    {
      name: "Mexican",
      image: "/placeholder.svg?height=150&width=150",
      href: "/food-delivery/cuisines/mexican",
    },
    {
      name: "Japanese",
      image: "/placeholder.svg?height=150&width=150",
      href: "/food-delivery/cuisines/japanese",
    },
  ]

  // Sample restaurants
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      cuisine: "Italian",
      rating: 4.7,
      deliveryTime: "25-35",
      deliveryFee: 2.99,
      image: "/placeholder.svg?height=200&width=300",
      distance: "1.2 miles",
    },
    {
      id: 2,
      name: "Sushi Express",
      cuisine: "Japanese",
      rating: 4.5,
      deliveryTime: "30-45",
      deliveryFee: 3.99,
      image: "/placeholder.svg?height=200&width=300",
      distance: "0.8 miles",
    },
    {
      id: 3,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      rating: 4.3,
      deliveryTime: "20-30",
      deliveryFee: 1.99,
      image: "/placeholder.svg?height=200&width=300",
      distance: "1.5 miles",
    },
    {
      id: 4,
      name: "Curry House",
      cuisine: "Indian",
      rating: 4.8,
      deliveryTime: "35-50",
      deliveryFee: 2.49,
      image: "/placeholder.svg?height=200&width=300",
      distance: "2.1 miles",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative rounded-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 md:p-12 lg:p-16">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hungry? We've got you covered
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Order food from your favorite restaurants and get it delivered to your doorstep in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Find Food
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisines Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Explore by Cuisine</h2>
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {cuisines.map((cuisine) => (
            <Link key={cuisine.name} href={cuisine.href} className="flex-shrink-0 group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-2 mx-auto">
                <img
                  src={cuisine.image || "/placeholder.svg"}
                  alt={cuisine.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="text-center font-medium">{cuisine.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular Restaurants</h2>
          <Link href="/food-delivery/restaurants" className="text-orange-600 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-video relative">
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
                  {restaurant.cuisine}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{restaurant.name}</h3>
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm">{restaurant.rating}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{restaurant.distance}</span>
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
                <Button className="w-full mt-4">Order Now</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">New User Offer</h3>
          <p className="mb-4">Get 50% off on your first order (up to $10)</p>
          <Button variant="outline" className="bg-white text-purple-600 hover:bg-gray-100 border-0">
            Claim Offer
          </Button>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Refer a Friend</h3>
          <p className="mb-4">Get $5 credit for each friend who signs up</p>
          <Button variant="outline" className="bg-white text-teal-600 hover:bg-gray-100 border-0">
            Invite Friends
          </Button>
        </div>
      </section>
    </div>
  )
}
