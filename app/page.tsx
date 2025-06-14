"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const industries = [
    { name: "Travel", href: "/travel", icon: "✈️" },
    { name: "Healthcare", href: "/healthcare", icon: "🏥" },
    { name: "Education", href: "/education", icon: "📚" },
    { name: "Professional", href: "/professional", icon: "💼" },
    { name: "Financial", href: "/financial", icon: "💰" },
    { name: "Entertainment", href: "/entertainment", icon: "🎬" },
    { name: "Home Services", href: "/home-services", icon: "🏠" },
    { name: "Logistics", href: "/logistics", icon: "📦" },
    { name: "E-commerce", href: "/ecommerce", icon: "🛒" },
    { name: "Food Delivery", href: "/food-delivery", icon: "🍕" },
    { name: "Wholesale", href: "/wholesale", icon: "🏭" },
    { name: "Fabric & Textiles", href: "/fabric-textiles", icon: "🧵" },
    { name: "VehicleStore", href: "/vehiclestore", icon: "🚗" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg"></div>
              <span className="font-bold text-xl">MultiPlatform</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Vendor Login</Button>
              <Button>Join as Provider</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Multi-Industry Platform</h1>
          <p className="text-gray-600 text-lg">Connect with services across multiple industries</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Link key={index} href={industry.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{industry.icon}</div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full">Explore Services</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
