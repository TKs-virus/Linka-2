"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, Grid, List, ShoppingCart, Star } from "lucide-react"
import Link from "next/link"

export default function SparePartsCatalogPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 1000])

  const sampleParts = [
    {
      id: 1,
      name: "Brake Pad Set - Front",
      image: "/placeholder.svg?height=200&width=200",
      brand: "Bosch",
      price: 89.99,
      originalPrice: 109.99,
      compatibility: "Toyota Camry 2018-2023",
      condition: "New",
      inStock: true,
      rating: 4.8,
      reviews: 124,
      sku: "BP-TOY-CAM-F18",
    },
    {
      id: 2,
      name: "Oil Filter",
      image: "/placeholder.svg?height=200&width=200",
      brand: "ACDelco",
      price: 12.99,
      compatibility: "Honda Accord 2016-2022",
      condition: "New",
      inStock: true,
      rating: 4.6,
      reviews: 89,
      sku: "OF-HON-ACC-16",
    },
    {
      id: 3,
      name: "Headlight Assembly - Right",
      image: "/placeholder.svg?height=200&width=200",
      brand: "Genuine OEM",
      price: 245.0,
      originalPrice: 289.99,
      compatibility: "Ford F-150 2015-2020",
      condition: "New",
      inStock: false,
      rating: 4.9,
      reviews: 67,
      sku: "HL-FOR-F15-R15",
    },
    {
      id: 4,
      name: "Air Filter",
      image: "/placeholder.svg?height=200&width=200",
      brand: "K&N",
      price: 34.99,
      compatibility: "Chevrolet Silverado 2019-2024",
      condition: "New",
      inStock: true,
      rating: 4.7,
      reviews: 156,
      sku: "AF-CHE-SIL-19",
    },
    {
      id: 5,
      name: "Shock Absorber - Rear",
      image: "/placeholder.svg?height=200&width=200",
      brand: "Monroe",
      price: 78.5,
      compatibility: "BMW 3 Series 2012-2018",
      condition: "New",
      inStock: true,
      rating: 4.5,
      reviews: 43,
      sku: "SA-BMW-3S-R12",
    },
    {
      id: 6,
      name: "Alternator",
      image: "/placeholder.svg?height=200&width=200",
      brand: "Denso",
      price: 189.99,
      originalPrice: 229.99,
      compatibility: "Mercedes-Benz C-Class 2014-2021",
      condition: "Refurbished",
      inStock: true,
      rating: 4.4,
      reviews: 78,
      sku: "ALT-MER-CC-14",
    },
  ]

  const categories = [
    "Braking System",
    "Engine Components",
    "Suspension & Steering",
    "Electrical",
    "Body & Exterior",
    "Interior",
    "Filters",
    "Belts & Hoses",
  ]

  const brands = ["Bosch", "ACDelco", "Denso", "Monroe", "K&N", "Genuine OEM", "Aftermarket"]

  const conditions = ["New", "Used", "Refurbished"]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/vehiclestore" className="hover:text-blue-600">
              VehicleStore
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Spare Parts</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Vehicle Selector */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find Parts for Your Vehicle</CardTitle>
            <CardDescription>Select your vehicle to see compatible parts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label>Make</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                    <SelectItem value="chevrolet">Chevrolet</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Model</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camry">Camry</SelectItem>
                    <SelectItem value="accord">Accord</SelectItem>
                    <SelectItem value="f150">F-150</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Year</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 25 }, (_, i) => 2024 - i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">Find Parts</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <Label>Search Parts</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="e.g. brake pad" className="pl-10" />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <Label className="text-base font-semibold">Part Category</Label>
                  <div className="space-y-2 mt-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <Label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <Label className="text-base font-semibold">Brand</Label>
                  <div className="space-y-2 mt-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={brand} />
                        <Label htmlFor={brand} className="text-sm cursor-pointer">
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Condition */}
                <div>
                  <Label className="text-base font-semibold">Condition</Label>
                  <div className="space-y-2 mt-2">
                    {conditions.map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox id={condition} />
                        <Label htmlFor={condition} className="text-sm cursor-pointer">
                          {condition}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <Label className="text-base font-semibold">Price Range</Label>
                  <div className="mt-4">
                    <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="mb-2" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <Label className="text-base font-semibold">Availability</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="instock" />
                      <Label htmlFor="instock" className="text-sm cursor-pointer">
                        In Stock
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="preorder" />
                      <Label htmlFor="preorder" className="text-sm cursor-pointer">
                        Pre-order
                      </Label>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">Spare Parts Catalog</h1>
                <p className="text-gray-600">Showing {sampleParts.length} results</p>
              </div>
              <div className="flex items-center space-x-4">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Sort by Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {sampleParts.map((part) => (
                <Card key={part.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    {viewMode === "grid" ? (
                      <div>
                        <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                          <img
                            src={part.image || "/placeholder.svg"}
                            alt={part.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">{part.name}</h3>
                          <p className="text-sm text-gray-600">SKU: {part.sku}</p>
                          <p className="text-sm text-blue-600">{part.compatibility}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{part.brand}</Badge>
                            <Badge variant={part.condition === "New" ? "default" : "outline"}>{part.condition}</Badge>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(part.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">({part.reviews})</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-xl font-bold">${part.price}</span>
                              {part.originalPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">${part.originalPrice}</span>
                              )}
                            </div>
                            <Badge variant={part.inStock ? "default" : "destructive"}>
                              {part.inStock ? "In Stock" : "Out of Stock"}
                            </Badge>
                          </div>
                          <Button className="w-full" disabled={!part.inStock}>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex space-x-4">
                        <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                          <img
                            src={part.image || "/placeholder.svg"}
                            alt={part.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-lg">{part.name}</h3>
                          <p className="text-sm text-gray-600">SKU: {part.sku}</p>
                          <p className="text-sm text-blue-600">{part.compatibility}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{part.brand}</Badge>
                            <Badge variant={part.condition === "New" ? "default" : "outline"}>{part.condition}</Badge>
                            <Badge variant={part.inStock ? "default" : "destructive"}>
                              {part.inStock ? "In Stock" : "Out of Stock"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(part.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">({part.reviews})</span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div>
                                <span className="text-xl font-bold">${part.price}</span>
                                {part.originalPrice && (
                                  <span className="text-sm text-gray-500 line-through ml-2">${part.originalPrice}</span>
                                )}
                              </div>
                              <Button disabled={!part.inStock}>
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
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
