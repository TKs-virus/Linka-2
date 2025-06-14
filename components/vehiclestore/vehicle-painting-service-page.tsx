"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Palette, Info } from "lucide-react"
import Link from "next/link"

export default function VehiclePaintingServicePage() {
  const [selectedColor, setSelectedColor] = useState("")
  const [customColor, setCustomColor] = useState("")

  const popularColors = [
    { name: "Pearl White", hex: "#F8F8FF" },
    { name: "Jet Black", hex: "#000000" },
    { name: "Silver Metallic", hex: "#C0C0C0" },
    { name: "Deep Blue", hex: "#003366" },
    { name: "Racing Red", hex: "#CC0000" },
    { name: "Forest Green", hex: "#228B22" },
    { name: "Sunset Orange", hex: "#FF4500" },
    { name: "Royal Purple", hex: "#663399" },
  ]

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
            <span className="text-gray-900">Vehicle Painting</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Vehicle Painting Services</h1>
            <p className="text-gray-600 text-lg">Get a custom quote for your vehicle painting project</p>
          </div>

          <div className="space-y-8">
            {/* Vehicle Information */}
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
                <CardDescription>Tell us about your vehicle</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <Input placeholder="Enter model" />
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
                  <div>
                    <Label>Body Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="truck">Truck</SelectItem>
                        <SelectItem value="coupe">Coupe</SelectItem>
                        <SelectItem value="hatchback">Hatchback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Current Color</Label>
                  <Input placeholder="e.g. Red, Blue, White" />
                </div>
              </CardContent>
            </Card>

            {/* Current Paint Condition */}
            <Card>
              <CardHeader>
                <CardTitle>Current Paint Condition</CardTitle>
                <CardDescription>Help us understand the current state of your vehicle's paint</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="paint-condition">Condition:</Label>
                  <Select>
                    <SelectTrigger id="paint-condition">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Paint Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Paint Type Selection</CardTitle>
                <CardDescription>Choose the type of paint finish you want</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="paint-type">Type:</Label>
                  <Select>
                    <SelectTrigger id="paint-type">
                      <SelectValue placeholder="Select paint type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solid">Solid Color</SelectItem>
                      <SelectItem value="metallic">Metallic</SelectItem>
                      <SelectItem value="pearlescent">Pearlescent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Paint Classifications */}
            <Card>
              <CardHeader>
                <CardTitle>Paint Classifications</CardTitle>
                <CardDescription>Select the paint system that best fits your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="paint-classification">Classification:</Label>
                  <Select>
                    <SelectTrigger id="paint-classification">
                      <SelectValue placeholder="Select classification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acrylic">Acrylic Urethane</SelectItem>
                      <SelectItem value="polyurethane">Polyurethane</SelectItem>
                      <SelectItem value="waterbased">Water-based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Color Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2 h-5 w-5" />
                  Color Selection
                </CardTitle>
                <CardDescription>Choose your desired color or specify a custom color</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Popular Colors</Label>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mt-3">
                    {popularColors.map((color) => (
                      <div
                        key={color.name}
                        className={`cursor-pointer p-2 border-2 rounded-lg text-center ${
                          selectedColor === color.name ? "border-blue-500" : "border-gray-200"
                        }`}
                        onClick={() => setSelectedColor(color.name)}
                      >
                        <div className="w-full h-8 rounded mb-2" style={{ backgroundColor: color.hex }}></div>
                        <span className="text-xs">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Custom Color Code</Label>
                  <Input
                    placeholder="e.g. #FF5733 or RAL 3020"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                  />
                  <p className="text-sm text-gray-600 mt-1">Enter hex code, RAL number, or Pantone color code</p>
                </div>
              </CardContent>
            </Card>

            {/* Scope of Work */}
            <Card>
              <CardHeader>
                <CardTitle>Scope of Work</CardTitle>
                <CardDescription>Describe the scope of the work</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Describe the scope of the painting work required." rows={4} />
              </CardContent>
            </Card>

            {/* Photo Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">Upload Photos</CardTitle>
                <CardDescription>
                  Upload photos of your vehicle's current condition or reference images for desired look
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Button variant="outline">Upload Photos</Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>We'll use this information to send you a detailed quote</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name *</Label>
                    <Input placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <Label>Phone Number *</Label>
                    <Input placeholder="Enter your phone number" required />
                  </div>
                </div>
                <div>
                  <Label>Email Address *</Label>
                  <Input type="email" placeholder="Enter your email address" required />
                </div>
                <div>
                  <Label>Additional Notes</Label>
                  <Textarea
                    placeholder="Any specific requirements, timeline preferences, or additional details..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">What happens next?</h4>
                      <p className="text-sm text-blue-800 mt-1">
                        Our painting specialist will review your details and contact you with a customized quote and
                        timeline within 2-3 business days. The quote will include material costs, labor, and estimated
                        completion time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button size="lg" className="flex-1">
                    Request Quote
                  </Button>
                  <Button variant="outline" size="lg">
                    Clear Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
