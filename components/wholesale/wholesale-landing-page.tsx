"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Package, Users, TrendingDown, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function WholesaleLandingPage() {
  const categories = [
    { name: "Electronics & Tech", count: "2,500+ products", icon: "📱" },
    { name: "Food & Beverage", count: "1,800+ products", icon: "🍎" },
    { name: "Apparel & Textiles", count: "3,200+ products", icon: "👕" },
    { name: "Industrial Supplies", count: "1,500+ products", icon: "🔧" },
    { name: "Raw Materials", count: "900+ products", icon: "🏗️" },
    { name: "Home & Garden", count: "2,100+ products", icon: "🏠" },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Coffee Beans",
      image: "/placeholder.svg?height=200&width=200",
      moq: "50 kg",
      price: "$12.50/kg",
      originalPrice: "$15.00/kg",
      discount: "17% off",
      rating: 4.8,
      supplier: "Global Coffee Co.",
    },
    {
      id: 2,
      name: "Industrial LED Panels",
      image: "/placeholder.svg?height=200&width=200",
      moq: "100 units",
      price: "$45.00/unit",
      originalPrice: "$55.00/unit",
      discount: "18% off",
      rating: 4.9,
      supplier: "TechLight Solutions",
    },
    {
      id: 3,
      name: "Organic Cotton Fabric",
      image: "/placeholder.svg?height=200&width=200",
      moq: "200 yards",
      price: "$8.75/yard",
      originalPrice: "$11.00/yard",
      discount: "20% off",
      rating: 4.7,
      supplier: "EcoTextile Mills",
    },
  ]

  const benefits = [
    {
      icon: <TrendingDown className="h-6 w-6 text-green-600" />,
      title: "Bulk Discounts",
      description: "Save up to 40% with volume pricing tiers",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Dedicated Support",
      description: "Personal account manager for your business",
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Fast Processing",
      description: "Priority handling and expedited shipping",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      title: "Quality Guarantee",
      description: "100% quality assurance on all products",
    },
  ]

  const orderSteps = [
    {
      step: "1",
      title: "Browse & Select",
      description: "Search our catalog and add products to your quote request",
    },
    {
      step: "2",
      title: "Submit Quote",
      description: "Provide your requirements and submit for custom pricing",
    },
    {
      step: "3",
      title: "Review & Approve",
      description: "Our team will contact you with a personalized quote",
    },
    {
      step: "4",
      title: "Place Order",
      description: "Approve the quote and we'll process your bulk order",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Wholesale Solutions for Your Business</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Access thousands of products at wholesale prices. Get bulk discounts, dedicated support, and streamlined
              ordering for your business needs.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search wholesale products..."
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-8">
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/wholesale/products">
                <Button size="lg" className="px-8 py-4 text-lg">
                  <Package className="mr-2 h-5 w-5" />
                  Browse Wholesale Products
                </Button>
              </Link>
              <Link href="/wholesale/account/apply">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Apply for Wholesale Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Wholesale Platform?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <p className="text-gray-600">{category.count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Wholesale Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-red-500 text-white">{product.discount}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {product.supplier}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <span className="text-lg font-bold text-green-600">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    </div>
                    <Badge variant="outline">MOQ: {product.moq}</Badge>
                  </div>
                  <Link href={`/wholesale/product/${product.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Order Wholesale</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Wholesale Ordering?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust us for their wholesale needs. Get started today with competitive
            pricing and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wholesale/products">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Start Shopping Now
              </Button>
            </Link>
            <Link href="/wholesale/account/apply">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600"
              >
                Apply for Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
