import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Filter, Grid, List, Heart } from "lucide-react"

export default function ClothingPage() {
  const products = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 89.99,
      originalPrice: 119.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 340,
      category: "Jackets",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Blue", "Black", "White"],
      inStock: true,
      discount: 25,
    },
    {
      id: 2,
      name: "Summer Floral Dress",
      price: 59.99,
      originalPrice: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 520,
      category: "Dresses",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Floral", "Pink", "Blue"],
      inStock: true,
      discount: 25,
    },
    {
      id: 3,
      name: "Premium Cotton T-Shirt",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.4,
      reviews: 890,
      category: "T-Shirts",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Gray", "Navy"],
      inStock: true,
      discount: 0,
    },
    {
      id: 4,
      name: "Slim Fit Chinos",
      price: 69.99,
      originalPrice: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 280,
      category: "Pants",
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Khaki", "Navy", "Black"],
      inStock: false,
      discount: 22,
    },
    {
      id: 5,
      name: "Cozy Knit Sweater",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 150,
      category: "Sweaters",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Cream", "Gray", "Burgundy"],
      inStock: true,
      discount: 0,
    },
    {
      id: 6,
      name: "Athletic Joggers",
      price: 49.99,
      originalPrice: 64.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.3,
      reviews: 670,
      category: "Activewear",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
      inStock: true,
      discount: 23,
    },
  ]

  const categories = [
    "All Clothing",
    "T-Shirts",
    "Dresses",
    "Jeans",
    "Jackets",
    "Sweaters",
    "Pants",
    "Activewear",
    "Accessories",
    "Shoes",
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
        <span className="text-gray-900">Clothing & Fashion</span>
      </nav>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Clothing & Fashion</h1>
          <p className="text-gray-600">Discover the latest fashion trends and styles</p>
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
              <h3 className="font-semibold mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button key={size} className="border rounded px-2 py-1 text-sm hover:bg-gray-100">
                    {size}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Color</h3>
              <div className="grid grid-cols-4 gap-2">
                {["Black", "White", "Gray", "Navy", "Blue", "Red", "Green", "Pink"].map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
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
                  <Button variant="ghost" size="sm" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
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
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">Available sizes:</p>
                    <div className="flex gap-1">
                      {product.sizes.slice(0, 4).map((size) => (
                        <span key={size} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {size}
                        </span>
                      ))}
                      {product.sizes.length > 4 && (
                        <span className="text-xs text-gray-500">+{product.sizes.length - 4}</span>
                      )}
                    </div>
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
