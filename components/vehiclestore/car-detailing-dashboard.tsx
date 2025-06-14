"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, Star, Users, Car } from "lucide-react"

export default function CarDetailingDashboard() {
  const [activeTab, setActiveTab] = useState("bookings")

  const bookings = [
    {
      id: "CD001",
      customer: "John Smith",
      vehicle: "2020 Toyota Camry",
      service: "Premium Rejuvenation",
      date: "2024-01-15",
      time: "10:00 AM",
      status: "confirmed",
      price: 149,
    },
    {
      id: "CD002",
      customer: "Sarah Johnson",
      vehicle: "2019 Honda Civic",
      service: "Basic Shine",
      date: "2024-01-15",
      time: "2:00 PM",
      status: "pending",
      price: 89,
    },
    {
      id: "CD003",
      customer: "Mike Wilson",
      vehicle: "2021 BMW X5",
      service: "Showroom Finish",
      date: "2024-01-16",
      time: "9:00 AM",
      status: "completed",
      price: 249,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Car Detailing Provider Dashboard</h1>
          <p className="text-gray-600">Manage your car detailing business operations</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Bookings</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
                  <p className="text-2xl font-bold">$487</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Rating</p>
                  <p className="text-2xl font-bold">4.8</p>
                </div>
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Customers</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex space-x-4 border-b">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`pb-2 px-1 ${activeTab === "bookings" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab("packages")}
              className={`pb-2 px-1 ${activeTab === "packages" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`}
            >
              Packages
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-2 px-1 ${activeTab === "reviews" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`}
            >
              Reviews
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "bookings" && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>Manage your upcoming and recent car detailing appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Car className="h-8 w-8 text-gray-400" />
                      <div>
                        <h3 className="font-semibold">{booking.customer}</h3>
                        <p className="text-sm text-gray-600">{booking.vehicle}</p>
                        <p className="text-sm text-gray-600">{booking.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                      <p className="text-sm text-gray-600 mt-1">
                        {booking.date} at {booking.time}
                      </p>
                      <p className="font-semibold">${booking.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      {booking.status === "pending" && (
                        <>
                          <Button size="sm" variant="outline">
                            Accept
                          </Button>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                        </>
                      )}
                      {booking.status === "confirmed" && (
                        <Button size="sm" variant="outline">
                          Complete
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "packages" && (
          <Card>
            <CardHeader>
              <CardTitle>Service Packages</CardTitle>
              <CardDescription>Manage your detailing service packages and pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Basic Shine</h3>
                    <p className="text-sm text-gray-600">Duration: 2 hours</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">$89</p>
                    <Badge>Active</Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Premium Rejuvenation</h3>
                    <p className="text-sm text-gray-600">Duration: 3 hours</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">$149</p>
                    <Badge>Active</Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Showroom Finish</h3>
                    <p className="text-sm text-gray-600">Duration: 4 hours</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">$249</p>
                    <Badge>Active</Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <Button>Add New Package</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "reviews" && (
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
              <CardDescription>Monitor customer feedback and ratings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Alice Brown</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">2024-01-10</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">"Excellent service! My car looks brand new."</p>
                  <Badge variant="outline">Premium Rejuvenation</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">David Lee</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">2024-01-08</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">"Great attention to detail. Very satisfied."</p>
                  <Badge variant="outline">Basic Shine</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
