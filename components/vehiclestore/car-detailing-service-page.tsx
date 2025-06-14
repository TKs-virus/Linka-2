"use client"

import { CardDescription } from "@/components/ui/card"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Car } from "lucide-react"
import Link from "next/link"
import SimpleHeader from "@/components/simple-header"

export default function CarDetailingServicePage() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [mobileDetailing, setMobileDetailing] = useState(false)
  const [expressService, setExpressService] = useState(false)
  const [ecoFriendly, setEcoFriendly] = useState(false)

  const packages = [
    {
      id: "basic",
      name: "Basic Shine",
      price: 89,
      description: "Essential cleaning and protection",
      includes: ["Exterior wash & dry", "Interior vacuum", "Dashboard cleaning", "Window cleaning", "Tire shine"],
    },
    {
      id: "premium",
      name: "Premium Rejuvenation",
      price: 149,
      description: "Comprehensive detailing service",
      includes: [
        "Everything in Basic",
        "Clay bar treatment",
        "Wax application",
        "Interior deep clean",
        "Leather conditioning",
        "Engine bay cleaning",
      ],
    },
    {
      id: "showroom",
      name: "Showroom Finish",
      price: 249,
      description: "Ultimate detailing experience",
      includes: [
        "Everything in Premium",
        "Paint correction",
        "Ceramic coating prep",
        "Premium interior protection",
        "Headlight restoration",
        "Undercarriage wash",
      ],
    },
  ]

  const exteriorExtras = [
    { id: "paint-correction-light", name: "Light Swirl Removal", price: 75 },
    { id: "paint-correction-scratch", name: "Scratch Removal", price: 125 },
    { id: "ceramic-1year", name: "Ceramic Coating (1-Year Protection)", price: 299 },
    { id: "headlight-restoration", name: "Headlight Restoration", price: 89 },
  ]

  const interiorExtras = [
    { id: "carpet-shampoo", name: "Deep Carpet & Upholstery Shampoo", price: 89 },
    { id: "leather-conditioning", name: "Leather Cleaning & Conditioning", price: 69 },
    { id: "odor-removal", name: "Odor Removal Treatment", price: 99 },
    { id: "pet-hair", name: "Pet Hair Removal", price: 59 },
  ]

  const calculateTotal = () => {
    let total = 0
    const pkg = packages.find((p) => p.id === selectedPackage)
    if (pkg) total += pkg.price

    selectedExtras.forEach((extraId) => {
      const extra = [...exteriorExtras, ...interiorExtras].find((e) => e.id === extraId)
      if (extra) total += extra.price
    })

    if (mobileDetailing) total += 25
    if (expressService) total += 50
    if (ecoFriendly) total += 15

    return total
  }

  const handleExtraChange = (extraId: string, checked: boolean) => {
    if (checked) {
      setSelectedExtras([...selectedExtras, extraId])
    } else {
      setSelectedExtras(selectedExtras.filter((id) => id !== extraId))
    }
  }

  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-gray-900">Car Detailing</span>
          </nav>
        </div>
      </div>

      <SimpleHeader title="Car Detailing Service" />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Choose Your Detailing Package</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-3xl font-bold mb-4">Car Detailing Services</h1>
                <p className="text-gray-600 text-lg">
                  Professional car detailing to restore your vehicle's shine and protect its value.
                </p>
              </div>

              {/* Package Selection */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {packages.map((pkg, index) => (
                  <Card key={index} className="border-2 hover:border-blue-500 cursor-pointer">
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                      <div className="text-3xl font-bold text-blue-600">${pkg.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pkg.includes.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4" onClick={() => setSelectedPackage(pkg.id)}>
                        Select Package
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Exterior Extras */}
              <Card>
                <CardHeader>
                  <CardTitle>Exterior Add-Ons</CardTitle>
                  <CardDescription>Enhance your exterior detailing service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exteriorExtras.map((extra) => (
                      <div key={extra.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={extra.id}
                            checked={selectedExtras.includes(extra.id)}
                            onCheckedChange={(checked) => handleExtraChange(extra.id, checked as boolean)}
                          />
                          <Label htmlFor={extra.id} className="text-sm font-medium cursor-pointer">
                            {extra.name}
                          </Label>
                        </div>
                        <span className="text-sm font-semibold">+${extra.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interior Extras */}
              <Card>
                <CardHeader>
                  <CardTitle>Interior Add-Ons</CardTitle>
                  <CardDescription>Complete your interior detailing experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {interiorExtras.map((extra) => (
                      <div key={extra.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={extra.id}
                            checked={selectedExtras.includes(extra.id)}
                            onCheckedChange={(checked) => handleExtraChange(extra.id, checked as boolean)}
                          />
                          <Label htmlFor={extra.id} className="text-sm font-medium cursor-pointer">
                            {extra.name}
                          </Label>
                        </div>
                        <span className="text-sm font-semibold">+${extra.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Service Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Options</CardTitle>
                  <CardDescription>Customize your service experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="mobile" checked={mobileDetailing} onCheckedChange={setMobileDetailing} />
                      <div>
                        <Label htmlFor="mobile" className="font-medium cursor-pointer">
                          Mobile Detailing
                        </Label>
                        <p className="text-sm text-gray-600">We come to your location</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">+$25</span>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="express" checked={expressService} onCheckedChange={setExpressService} />
                      <div>
                        <Label htmlFor="express" className="font-medium cursor-pointer">
                          Express Service
                        </Label>
                        <p className="text-sm text-gray-600">Faster turnaround time</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">+$50</span>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="eco" checked={ecoFriendly} onCheckedChange={setEcoFriendly} />
                      <div>
                        <Label htmlFor="eco" className="font-medium cursor-pointer">
                          Eco-Friendly Products
                        </Label>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">+$15</span>
                  </div>
                </CardContent>
              </Card>

              {/* Vehicle Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Information</CardTitle>
                  <CardDescription>Help us provide the best service for your vehicle</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="make">Make</Label>
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
                    <Label htmlFor="model">Model</Label>
                    <Input placeholder="Enter model" />
                  </div>
                  <div>
                    <Label htmlFor="year">Year</Label>
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
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedPackage && (
                    <div className="flex justify-between">
                      <span>{packages.find((p) => p.id === selectedPackage)?.name}</span>
                      <span>${packages.find((p) => p.id === selectedPackage)?.price}</span>
                    </div>
                  )}

                  {selectedExtras.length > 0 && (
                    <>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-medium">Add-ons:</h4>
                        {selectedExtras.map((extraId) => {
                          const extra = [...exteriorExtras, ...interiorExtras].find((e) => e.id === extraId)
                          return extra ? (
                            <div key={extraId} className="flex justify-between text-sm">
                              <span>{extra.name}</span>
                              <span>+${extra.price}</span>
                            </div>
                          ) : null
                        })}
                      </div>
                    </>
                  )}

                  {(mobileDetailing || expressService || ecoFriendly) && (
                    <>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-medium">Options:</h4>
                        {mobileDetailing && (
                          <div className="flex justify-between text-sm">
                            <span>Mobile Detailing</span>
                            <span>+$25</span>
                          </div>
                        )}
                        {expressService && (
                          <div className="flex justify-between text-sm">
                            <span>Express Service</span>
                            <span>+$50</span>
                          </div>
                        )}
                        {ecoFriendly && (
                          <div className="flex justify-between text-sm">
                            <span>Eco-Friendly Products</span>
                            <span>+$15</span>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>

                  <Button className="w-full" size="lg" disabled={!selectedPackage}>
                    Proceed to Booking
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Before & After Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                        <Car className="h-8 w-8 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">See the amazing transformations we achieve</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
