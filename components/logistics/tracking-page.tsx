"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, Package, MapPin, Clock, CheckCircle, Truck, Phone } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface TrackingEvent {
  date: string
  time: string
  location: string
  status: string
  description: string
}

interface TrackingInfo {
  trackingNumber: string
  status: "in-transit" | "out-for-delivery" | "delivered" | "pending"
  origin: string
  destination: string
  serviceType: string
  estimatedDelivery: string
  events: TrackingEvent[]
}

export function TrackingPage() {
  const searchParams = useSearchParams()
  const [trackingNumber, setTrackingNumber] = useState(searchParams?.get("number") || "")
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const number = searchParams?.get("number")
    if (number) {
      setTrackingNumber(number)
      handleTrack(number)
    }
  }, [searchParams])

  const handleTrack = async (number?: string) => {
    const trackNum = number || trackingNumber
    if (!trackNum.trim()) {
      setError("Please enter a tracking number")
      return
    }

    setLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      const mockData: TrackingInfo = {
        trackingNumber: trackNum,
        status: "in-transit",
        origin: "New York, NY, USA",
        destination: "Lusaka, Zambia",
        serviceType: "Express International",
        estimatedDelivery: "2024-06-18",
        events: [
          {
            date: "2024-06-13",
            time: "09:15",
            location: "New York, NY",
            status: "Picked Up",
            description: "Package picked up from sender",
          },
          {
            date: "2024-06-13",
            time: "14:30",
            location: "New York, NY",
            status: "In Transit",
            description: "Departed from origin facility",
          },
          {
            date: "2024-06-14",
            time: "08:45",
            location: "London, UK",
            status: "In Transit",
            description: "Arrived at international hub",
          },
          {
            date: "2024-06-15",
            time: "16:20",
            location: "Dubai, UAE",
            status: "In Transit",
            description: "In transit to destination country",
          },
          {
            date: "2024-06-16",
            time: "11:30",
            location: "Johannesburg, SA",
            status: "In Transit",
            description: "Arrived at regional hub",
          },
        ],
      }

      setTrackingInfo(mockData)
      setLoading(false)
    }, 1500)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "out-for-delivery":
        return "bg-blue-100 text-blue-800"
      case "in-transit":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "out-for-delivery":
        return <Truck className="h-5 w-5 text-blue-600" />
      case "in-transit":
        return <Package className="h-5 w-5 text-yellow-600" />
      default:
        return <Clock className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/logistics" className="text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Track Your Shipment</h1>
              <p className="text-gray-600">Enter your tracking number to get real-time updates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Tracking Input */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Track Shipment
              </CardTitle>
              <CardDescription>Enter your tracking number to view shipment status and history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="tracking" className="sr-only">
                    Tracking Number
                  </Label>
                  <Input
                    id="tracking"
                    placeholder="Enter tracking number (e.g., TN123456789)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                  />
                </div>
                <Button onClick={() => handleTrack()} disabled={loading}>
                  {loading ? "Tracking..." : "Track"}
                </Button>
              </div>
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {trackingInfo && (
            <div className="space-y-6">
              {/* Status Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {getStatusIcon(trackingInfo.status)}
                        Tracking: {trackingInfo.trackingNumber}
                      </CardTitle>
                      <CardDescription>{trackingInfo.serviceType}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(trackingInfo.status)}>
                      {trackingInfo.status.replace("-", " ").toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">From</p>
                        <p className="font-medium">{trackingInfo.origin}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">To</p>
                        <p className="font-medium">{trackingInfo.destination}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Estimated Delivery</p>
                        <p className="font-medium">{trackingInfo.estimatedDelivery}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking History */}
              <Card>
                <CardHeader>
                  <CardTitle>Tracking History</CardTitle>
                  <CardDescription>Detailed timeline of your shipment's journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingInfo.events.map((event, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          {index < trackingInfo.events.length - 1 && <div className="w-px h-12 bg-gray-300 mt-2"></div>}
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{event.status}</h4>
                            <span className="text-sm text-gray-500">
                              {event.date} at {event.time}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-1">{event.description}</p>
                          <p className="text-gray-500 text-sm flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                  <CardDescription>Contact our customer support team for assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contact Support
                    </Button>
                    <Button variant="outline">Report Issue</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
