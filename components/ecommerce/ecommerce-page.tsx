import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function EcommercePage() {
  // Sample product categories
  const categories = [
    {
      name: "Electronics",
      image: "/placeholder.svg?height=200&width=200",
      href: "/ecommerce/electronics",
    },
    {
      name: "Clothing & Fashion",
      image: "/placeholder.svg?height=200&width=200",
      href: "/ecommerce/clothing",
    },
    {
      name: "Home & Garden",
      image: "/placeholder.svg?height=200&width=200",
      href: "/ecommerce/home",
    },
    {
      name: "Beauty & Personal Care",
      image: "/placeholder.svg?height=200&width=200",
      href: "/ecommerce/beauty",
    },
    {
      name: "Sports & Outdoors",
      image: "/placeholder.svg?height=200&width=200",
      href: "/ecommerce/sports",
    },
  ]

  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Designer T-Shirt",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Clothing",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Smart Home Speaker",
      price: 199.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Organic Face Cream",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Beauty",
      rating: 4.6,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative rounded-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 lg:p-16">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Shop the Latest Products</h1>
            <p className="text-lg text-white/90 mb-6">
              Discover amazing deals on thousands of products with fast shipping and secure payment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link href="/ecommerce/all-products" className="text-blue-600 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">{product.category}</span>
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                </div>
                <Button className="w-full mt-4">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Summer Sale</h3>
          <p className="mb-4">Up to 50% off on selected items</p>
          <Button variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100 border-0">
            Shop Now
          </Button>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">New Arrivals</h3>
          <p className="mb-4">Check out the latest products</p>
          <Button variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 border-0">
            Explore
          </Button>
        </div>
      </section>
    </div>
  )
}
