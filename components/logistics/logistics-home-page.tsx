"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Package, Truck, Search, Globe, Clock, Shield } from "lucide-react"
import Link from "next/link"

export function LogisticsHomePage() {
  const [trackingNumber, setTrackingNumber] = useState("")

  const handleTrackShipment = () => {
    if (trackingNumber.trim()) {
      window.location.href = `/logistics/tracking?number=${encodeURIComponent(trackingNumber)}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Logistics & Delivery Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Fast, reliable, and secure shipping services connecting you to the world
          </p>

          {/* Quick Tracking */}
          <div className="max-w-md mx-auto bg-white rounded-lg p-4 shadow-lg">
            <div className="flex gap-2">
              <Input
                placeholder="Enter tracking number..."
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleTrackShipment()}
              />
              <Button onClick={handleTrackShipment} className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of logistics and delivery solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Send a Parcel */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Send a Parcel</CardTitle>
              <CardDescription>
                Quick and easy parcel delivery for documents, packages, and personal items
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/logistics/parcel-booking">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send a Parcel</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Freight Quote */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Request Freight Quote</CardTitle>
              <CardDescription>Commercial shipping solutions for businesses and large cargo shipments</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/logistics/freight-quote">
                <Button className="w-full bg-green-600 hover:bg-green-700">Get Freight Quote</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Track Shipment */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Track Your Shipment</CardTitle>
              <CardDescription>Real-time tracking and updates on your packages and freight shipments</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/logistics/tracking">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Track Shipment</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our Logistics Services?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Global Network</h4>
              <p className="text-gray-600">Extensive worldwide coverage with reliable partners in over 200 countries</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
              <p className="text-gray-600">
                Multiple speed options from same-day to economy delivery to meet your needs
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Secure & Insured</h4>
              <p className="text-gray-600">Full insurance coverage and secure handling for your valuable shipments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
