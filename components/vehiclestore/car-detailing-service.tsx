"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Star } from "lucide-react"

export default function CarDetailingService() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [mobileService, setMobileService] = useState(false)

  const packages = [
    {
      id: "basic",
      name: "Basic Shine",
      price: 89,
      duration: "2 hours",
      features: ["Exterior wash", "Interior vacuum", "Window cleaning", "Tire shine"],
    },
    {
      id: "premium",
      name: "Premium Rejuvenation",
      price: 149,
      duration: "3 hours",
      features: [
        "Everything in Basic",
        "Clay bar treatment",
        "Paint protection",
        "Interior detailing",
        "Dashboard conditioning",
      ],
      popular: true,
    },
    {
      id: "showroom",
      name: "Showroom Finish",
      price: 249,
      duration: "4 hours",
      features: [
        "Everything in Premium",
        "Paint correction",
        "Ceramic coating",
        "Engine bay cleaning",
        "Leather conditioning",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🚗 Car Detailing Services</h1>
          <p className="text-gray-600 text-lg">Professional car detailing to make your vehicle shine like new</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Packages */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Choose Your Package</h2>
            <div className="space-y-6">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`cursor-pointer transition-all ${selectedPackage === pkg.id ? "ring-2 ring-blue-500" : ""}`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {pkg.name}
                          {pkg.popular && <Badge className="bg-orange-100 text-orange-800">Most Popular</Badge>}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {pkg.duration}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">${pkg.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Book Your Service</CardTitle>
                <CardDescription>Schedule your car detailing appointment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone" />
                </div>
                <div>
                  <Label htmlFor="vehicle">Vehicle Details</Label>
                  <Input id="vehicle" placeholder="e.g., 2020 Toyota Camry" />
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="11am">11:00 AM</SelectItem>
                      <SelectItem value="1pm">1:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mobile" checked={mobileService} onCheckedChange={setMobileService} />
                  <Label htmlFor="mobile" className="text-sm">
                    Mobile service (+$20)
                  </Label>
                </div>
                {mobileService && (
                  <div>
                    <Label htmlFor="address">Service Address</Label>
                    <Input id="address" placeholder="Enter your address" />
                  </div>
                )}
                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-4">
                    <span>Selected Package:</span>
                    <span className="font-semibold">
                      {selectedPackage ? packages.find((p) => p.id === selectedPackage)?.name : "None selected"}
                    </span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span>Total:</span>
                    <span className="font-bold text-xl">
                      $
                      {selectedPackage
                        ? (packages.find((p) => p.id === selectedPackage)?.price || 0) + (mobileService ? 20 : 0)
                        : 0}
                    </span>
                  </div>
                  <Button className="w-full" disabled={!selectedPackage}>
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="font-semibold">Sarah J.</span>
                    </div>
                    <p className="text-sm text-gray-600">"Amazing service! My car looks brand new."</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="font-semibold">Mike C.</span>
                    </div>
                    <p className="text-sm text-gray-600">"Professional and thorough. Highly recommend!"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
