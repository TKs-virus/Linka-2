"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Package, Truck, Shield, Download, Phone, Mail, Plus, Minus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface WholesaleProductDetailPageProps {
  productId: string
}

export default function WholesaleProductDetailPage({ productId }: WholesaleProductDetailPageProps) {
  const [quantity, setQuantity] = useState(100)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data - in real app, fetch based on productId
  const product = {
    id: productId,
    name: "Premium Coffee Beans - Arabica Blend",
    sku: "CB-ARB-001",
    manufacturer: "CoffeePro International",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "High-quality arabica coffee beans sourced from premium farms in Colombia and Brazil. Perfect for cafes, restaurants, and food service establishments. These beans offer a rich, smooth flavor profile with notes of chocolate and caramel.",
    features: [
      "100% Arabica beans",
      "Medium roast profile",
      "Ethically sourced",
      "Vacuum sealed packaging",
      "12-month shelf life",
    ],
    specifications: {
      origin: "Colombia & Brazil",
      roastLevel: "Medium",
      packaging: "25kg bags",
      shelfLife: "12 months",
      storage: "Cool, dry place",
    },
    pricing: [
      { min: 50, max: 99, price: 15.0 },
      { min: 100, max: 249, price: 13.5 },
      { min: 250, max: 499, price: 12.5 },
      { min: 500, max: 999, price: 11.75 },
      { min: 1000, max: null, price: 11.0 },
    ],
    moq: 50,
    inStock: true,
    stockLevel: "High",
    leadTime: "3-5 business days",
    weight: "25kg per bag",
    dimensions: "60cm x 40cm x 15cm",
    rating: 4.8,
    reviews: 124,
    certifications: ["Organic", "Fair Trade", "ISO 9001"],
  }

  const getCurrentPrice = () => {
    for (const tier of product.pricing) {
      if (quantity >= tier.min && (tier.max === null || quantity <= tier.max)) {
        return tier.price
      }
    }
    return product.pricing[0].price
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + product.moq)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(product.moq, prev - product.moq))
  }

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
            <Link href="/wholesale/products" className="hover:text-blue-600">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.inStock && <Badge className="absolute top-4 right-4 bg-green-500">In Stock</Badge>}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>SKU: {product.sku}</span>
                <span>•</span>
                <span>Manufacturer: {product.manufacturer}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Pricing Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wholesale Pricing</CardTitle>
                <CardDescription>Prices per unit (kg) based on quantity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {product.pricing.map((tier, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="text-sm">
                        {tier.min}
                        {tier.max ? `-${tier.max}` : "+"} units
                      </span>
                      <span className="font-semibold">${tier.price.toFixed(2)}/kg</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Place Order</CardTitle>
                <CardDescription>Minimum order quantity: {product.moq} kg</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="quantity">Quantity (kg)</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Button variant="outline" size="sm" onClick={decrementQuantity} disabled={quantity <= product.moq}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      id="quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(product.moq, Number.parseInt(e.target.value) || product.moq))
                      }
                      className="text-center w-24"
                      min={product.moq}
                      step={product.moq}
                    />
                    <Button variant="outline" size="sm" onClick={incrementQuantity}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span>Unit Price:</span>
                    <span className="font-semibold">${getCurrentPrice().toFixed(2)}/kg</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Quantity:</span>
                    <span className="font-semibold">{quantity} kg</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                    <span>Total:</span>
                    <span className="text-blue-600">${(getCurrentPrice() * quantity).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">Add to Quote Request</Button>
                  <Button variant="outline">Request Sample</Button>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Sales
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Key Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Package className="h-4 w-4 text-blue-600" />
                <span>MOQ: {product.moq} kg</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-blue-600" />
                <span>Lead Time: {product.leadTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-blue-600" />
                <span>Stock: {product.stockLevel}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Package className="h-4 w-4 text-blue-600" />
                <span>Weight: {product.weight}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Lead Time</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{product.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Certifications:</h4>
                  <div className="flex gap-2">
                    {product.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping & Lead Time Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Lead Time:</h4>
                  <p className="text-gray-700">{product.leadTime} for orders up to 1000 kg</p>
                  <p className="text-gray-700">5-7 business days for larger orders</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Shipping Options:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Standard freight shipping (3-5 business days)</li>
                    <li>Express shipping available (1-2 business days)</li>
                    <li>White glove delivery for large orders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Packaging:</h4>
                  <p className="text-gray-700">
                    Products are packaged in {product.specifications.packaging} for optimal freshness and protection
                    during transit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documentation" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Documentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Product Specification Sheet (PDF)
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Safety Data Sheet (SDS)
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Certificate of Analysis
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Organic Certification
                  </Button>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Need Additional Documentation?</h4>
                  <p className="text-gray-700 mb-4">
                    Contact our sales team for custom documentation, compliance certificates, or technical
                    specifications.
                  </p>
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Request Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
