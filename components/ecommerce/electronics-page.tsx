import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Filter, Grid, List } from "lucide-react"

export default function ElectronicsPage() {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 999.99,
      originalPrice: 1099.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 1250,
      category: "Smartphones",
      inStock: true,
      discount: 9,
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 1199.99,
      originalPrice: 1299.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 890,
      category: "Laptops",
      inStock: true,
      discount: 8,
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: 349.99,
      originalPrice: 399.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 2100,
      category: "Headphones",
      inStock: true,
      discount: 13,
    },
    {
      id: 4,
      name: "Samsung 4K Smart TV",
      price: 799.99,
      originalPrice: 999.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 650,
      category: "TVs",
      inStock: false,
      discount: 20,
    },
    {
      id: 5,
      name: "iPad Pro 12.9",
      price: 1099.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 420,
      category: "Tablets",
      inStock: true,
      discount: 0,
    },
    {
      id: 6,
      name: "AirPods Pro 2",
      price: 249.99,
      originalPrice: 279.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 1800,
      category: "Audio",
      inStock: true,
      discount: 11,
    },
  ]

  const categories = [
    "All Electronics",
    "Smartphones",
    "Laptops",
    "Tablets",
    "Headphones",
    "TVs",
    "Cameras",
    "Gaming",
    "Smart Home",
    "Accessories",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <span>/</span>
        <Link href="/ecommerce" className="hover:text-gray-700">
          E-commerce
        </Link>
        <span>/</span>
        <span className="text-gray-900">Electronics</span>
      </nav>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Electronics</h1>
          <p className="text-gray-600">Discover the latest in technology and electronics</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <div className="flex border rounded-lg">
            <Button variant="ghost" size="sm">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button key={category} className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    {category}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Under $100</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">$100 - $500</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">$500 - $1000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Over $1000</span>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-red-500">-{product.discount}%</Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Badge variant="secondary">Out of Stock</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full mt-4" disabled={!product.inStock}>
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
