"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Package, Clock } from "lucide-react"
import Link from "next/link"

export function ParcelBookingPage() {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    size: "",
    weight: "",
    contents: "",
    declaredValue: "",
    speedOption: "",
    insurance: false,
    signatureConfirmation: false,
  })

  const [quote, setQuote] = useState<{
    cost: number
    deliveryTime: string
  } | null>(null)

  const handleGetQuote = () => {
    // Simulate quote calculation
    const baseCost = 25
    const weightCost = Number.parseFloat(formData.weight) * 2
    const speedMultiplier = formData.speedOption === "express" ? 2 : formData.speedOption === "same-day" ? 4 : 1
    const insuranceCost = formData.insurance ? 5 : 0
    const signatureCost = formData.signatureConfirmation ? 3 : 0

    const totalCost = (baseCost + weightCost) * speedMultiplier + insuranceCost + signatureCost
    const deliveryTime =
      formData.speedOption === "same-day"
        ? "Same Day"
        : formData.speedOption === "express"
          ? "1-2 Business Days"
          : "3-5 Business Days"

    setQuote({
      cost: totalCost,
      deliveryTime,
    })
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
              <h1 className="text-2xl font-bold text-gray-900">Send a Parcel</h1>
              <p className="text-gray-600">Book your parcel delivery</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Parcel Details
                  </CardTitle>
                  <CardDescription>Enter your parcel information to get an instant quote</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Origin & Destination */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="origin">From (Origin)</Label>
                      <Input
                        id="origin"
                        placeholder="Enter city or postal code"
                        value={formData.origin}
                        onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">To (Destination)</Label>
                      <Input
                        id="destination"
                        placeholder="Enter city or postal code"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Package Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Package Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="size">Package Size</Label>
                        <Select
                          value={formData.size}
                          onValueChange={(value) => setFormData({ ...formData, size: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (up to 30cm)</SelectItem>
                            <SelectItem value="medium">Medium (30-60cm)</SelectItem>
                            <SelectItem value="large">Large (60-120cm)</SelectItem>
                            <SelectItem value="custom">Custom Dimensions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          type="number"
                          placeholder="0.0"
                          value={formData.weight}
                          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contents">Contents</Label>
                        <Select
                          value={formData.contents}
                          onValueChange={(value) => setFormData({ ...formData, contents: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select contents type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="documents">Documents</SelectItem>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="books">Books</SelectItem>
                            <SelectItem value="gifts">Gifts</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="declaredValue">Declared Value ($)</Label>
                        <Input
                          id="declaredValue"
                          type="number"
                          placeholder="0.00"
                          value={formData.declaredValue}
                          onChange={(e) => setFormData({ ...formData, declaredValue: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Delivery Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Delivery Options</h3>

                    <div className="space-y-2">
                      <Label>Speed Option</Label>
                      <Select
                        value={formData.speedOption}
                        onValueChange={(value) => setFormData({ ...formData, speedOption: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select delivery speed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Delivery (3-5 days)</SelectItem>
                          <SelectItem value="express">Express Delivery (1-2 days)</SelectItem>
                          <SelectItem value="same-day">Same-Day Delivery</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="insurance"
                          checked={formData.insurance}
                          onCheckedChange={(checked) => setFormData({ ...formData, insurance: checked as boolean })}
                        />
                        <Label htmlFor="insurance">Add Insurance (+$5)</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="signature"
                          checked={formData.signatureConfirmation}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, signatureConfirmation: checked as boolean })
                          }
                        />
                        <Label htmlFor="signature">Signature Confirmation (+$3)</Label>
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleGetQuote} className="w-full" size="lg">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quote Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Quote Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {quote ? (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-700">${quote.cost.toFixed(2)}</div>
                          <div className="text-sm text-green-600">Estimated Cost</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Time:</span>
                          <span className="font-medium">{quote.deliveryTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Route:</span>
                          <span className="font-medium text-sm">
                            {formData.origin || "Origin"} → {formData.destination || "Destination"}
                          </span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Button className="w-full" size="lg">
                          Proceed to Booking
                        </Button>
                        <Button variant="outline" className="w-full">
                          Save Quote
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Fill in the parcel details to get an instant quote</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
