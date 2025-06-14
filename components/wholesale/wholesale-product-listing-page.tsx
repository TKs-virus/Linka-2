"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ChevronDown, ChevronUp, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WholesaleProductListingPage() {
  const [showFilters, setShowFilters] = useState(true)
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [weightRange, setWeightRange] = useState([0, 100])
  const [moqRange, setMoqRange] = useState([50, 1000])

  const products = [
    {
      id: 1,
      name: "Premium Coffee Beans - Arabica Blend",
      image: "/placeholder.svg?height=200&width=250",
      description: "High-quality arabica coffee beans, perfect for cafes and restaurants",
      moq: "50 kg minimum",
      price: "From $12.50/kg",
      originalPrice: "$15.00/kg",
      brand: "CoffeePro",
      category: "Food & Beverage",
      inStock: true,
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Industrial LED Panel Lights",
      image: "/placeholder.svg?height=200&width=250",
      description: "Energy-efficient LED panels for commercial and industrial use",
      moq: "100 units minimum",
      price: "From $45.00/unit",
      originalPrice: "$65.00/unit",
      brand: "LightTech",
      category: "Electronics",
      inStock: true,
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "Cotton T-Shirts Bulk Pack",
      image: "/placeholder.svg?height=200&width=250",
      description: "100% cotton t-shirts in various sizes and colors",
      moq: "500 pieces minimum",
      price: "From $3.20/piece",
      originalPrice: "$5.50/piece",
      brand: "TextilePlus",
      category: "Apparel",
      inStock: true,
      rating: 4.7,
      reviews: 203,
    },
    {
      id: 4,
      name: "Stainless Steel Bolts & Screws",
      image: "/placeholder.svg?height=200&width=250",
      description: "Industrial grade stainless steel fasteners in bulk quantities",
      moq: "1000 pieces minimum",
      price: "From $0.15/piece",
      originalPrice: "$0.25/piece",
      brand: "SteelWorks",
      category: "Industrial Supplies",
      inStock: false,
      rating: 4.5,
      reviews: 67,
    },
    {
      id: 5,
      name: "Organic Coconut Oil",
      image: "/placeholder.svg?height=200&width=250",
      description: "Cold-pressed organic coconut oil for food service industry",
      moq: "25 liters minimum",
      price: "From $8.90/liter",
      originalPrice: "$12.00/liter",
      brand: "NaturalOils",
      category: "Food & Beverage",
      inStock: true,
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 6,
      name: "Wireless Bluetooth Speakers",
      image: "/placeholder.svg?height=200&width=250",
      description: "Portable bluetooth speakers for retail or promotional use",
      moq: "200 units minimum",
      price: "From $18.50/unit",
      originalPrice: "$28.00/unit",
      brand: "AudioMax",
      category: "Electronics",
      inStock: true,
      rating: 4.4,
      reviews: 91,
    },
  ]

  const categories = [
    "All Categories",
    "Food & Beverage",
    "Electronics",
    "Apparel",
    "Industrial Supplies",
    "Raw Materials",
  ]
  const brands = ["All Brands", "CoffeePro", "LightTech", "TextilePlus", "SteelWorks", "NaturalOils", "AudioMax"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/wholesale" className="hover:text-blue-600">
              Wholesale
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">All Products</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                    {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <Label htmlFor="search">Product Name</Label>
                  <div className="relative mt-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="search" placeholder="Search products..." className="pl-10" />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <Label>Product Type</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <Label>Price Range</Label>
                  <div className="mt-2">
                    <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="w-full" />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Weight Range */}
                <div>
                  <Label>Weight Range (kg)</Label>
                  <div className="mt-2">
                    <Slider value={weightRange} onValueChange={setWeightRange} max={100} step={1} className="w-full" />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{weightRange[0]} kg</span>
                      <span>{weightRange[1]} kg</span>
                    </div>
                  </div>
                </div>

                {/* MOQ Range */}
                <div>
                  <Label>Minimum Order Quantity</Label>
                  <div className="mt-2">
                    <Slider
                      value={moqRange}
                      onValueChange={setMoqRange}
                      min={50}
                      max={1000}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{moqRange[0]} units</span>
                      <span>{moqRange[1]} units</span>
                    </div>
                  </div>
                </div>

                {/* Brand */}
                <div>
                  <Label>Brand/Manufacturer</Label>
                  <div className="mt-2 space-y-2">
                    {brands.slice(1).map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={brand} />
                        <Label htmlFor={brand} className="text-sm font-normal">
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <Label>Availability</Label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-stock" />
                      <Label htmlFor="in-stock" className="text-sm font-normal">
                        In Stock
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pre-order" />
                      <Label htmlFor="pre-order" className="text-sm font-normal">
                        Pre-order
                      </Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Wholesale Products</h1>
                <p className="text-gray-600">Showing {products.length} products</p>
              </div>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="moq-low">MOQ: Low to High</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {!product.inStock && (
                      <Badge variant="secondary" className="absolute top-2 right-2">
                        Pre-order
                      </Badge>
                    )}
                    {product.inStock && <Badge className="absolute top-2 right-2 bg-green-500">In Stock</Badge>}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">
                          <Link href={`/wholesale/product/${product.id}`} className="hover:text-blue-600">
                            {product.name}
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-500 mt-1">
                          {product.brand} • {product.category}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600">{product.moq}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-blue-600">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        Add to Quote
                      </Button>
                      <Link href={`/wholesale/product/${product.id}`}>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button className="bg-blue-600">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
