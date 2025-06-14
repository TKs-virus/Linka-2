"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Truck, AlertTriangle } from "lucide-react"
import Link from "next/link"

export function FreightQuotePage() {
  const [formData, setFormData] = useState({
    originAddress: "",
    destinationAddress: "",
    originPort: "",
    destinationPort: "",
    goodsType: "",
    weight: "",
    dimensions: "",
    pieces: "",
    hazardous: false,
    serviceType: "",
    pickupDate: "",
    deliveryDate: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    company: "",
    additionalInfo: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-xl text-green-700">Request Submitted!</CardTitle>
            <CardDescription>
              Your freight quote request has been received. Our team will contact you within 24 hours with a detailed
              quote.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Reference Number:</p>
              <p className="font-mono font-bold">FQ-{Date.now().toString().slice(-8)}</p>
            </div>
            <Link href="/logistics">
              <Button className="w-full">Back to Logistics</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
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
              <h1 className="text-2xl font-bold text-gray-900">Freight Quote Request</h1>
              <p className="text-gray-600">Get a customized quote for your commercial shipment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Origin & Destination */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Route</CardTitle>
                  <CardDescription>Specify pickup and delivery locations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="originAddress">Origin Address</Label>
                      <Textarea
                        id="originAddress"
                        placeholder="Complete pickup address..."
                        value={formData.originAddress}
                        onChange={(e) => setFormData({ ...formData, originAddress: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destinationAddress">Destination Address</Label>
                      <Textarea
                        id="destinationAddress"
                        placeholder="Complete delivery address..."
                        value={formData.destinationAddress}
                        onChange={(e) => setFormData({ ...formData, destinationAddress: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="originPort">Origin Port/Airport (if applicable)</Label>
                      <Input
                        id="originPort"
                        placeholder="e.g., LAX, JFK, Port of Los Angeles"
                        value={formData.originPort}
                        onChange={(e) => setFormData({ ...formData, originPort: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destinationPort">Destination Port/Airport (if applicable)</Label>
                      <Input
                        id="destinationPort"
                        placeholder="e.g., LHR, Port of Hamburg"
                        value={formData.destinationPort}
                        onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cargo Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Cargo Information</CardTitle>
                  <CardDescription>Provide detailed information about your shipment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="goodsType">Type of Goods</Label>
                      <Select
                        value={formData.goodsType}
                        onValueChange={(value) => setFormData({ ...formData, goodsType: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select goods type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Cargo</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="machinery">Machinery</SelectItem>
                          <SelectItem value="textiles">Textiles</SelectItem>
                          <SelectItem value="food">Food Products</SelectItem>
                          <SelectItem value="chemicals">Chemicals</SelectItem>
                          <SelectItem value="automotive">Automotive Parts</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight">Total Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="0.0"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dimensions">Dimensions (L x W x H in cm)</Label>
                      <Input
                        id="dimensions"
                        placeholder="e.g., 120 x 80 x 100"
                        value={formData.dimensions}
                        onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pieces">Number of Pieces/Pallets</Label>
                      <Input
                        id="pieces"
                        type="number"
                        placeholder="1"
                        value={formData.pieces}
                        onChange={(e) => setFormData({ ...formData, pieces: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hazardous"
                      checked={formData.hazardous}
                      onCheckedChange={(checked) => setFormData({ ...formData, hazardous: checked as boolean })}
                    />
                    <Label htmlFor="hazardous" className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      Contains hazardous materials
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Service & Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Requirements</CardTitle>
                  <CardDescription>Select service type and preferred timeline</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="air">Air Freight</SelectItem>
                        <SelectItem value="sea">Sea Freight</SelectItem>
                        <SelectItem value="road">Road Freight</SelectItem>
                        <SelectItem value="rail">Rail Freight</SelectItem>
                        <SelectItem value="multimodal">Multimodal Transport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickupDate">Preferred Pickup Date</Label>
                      <Input
                        id="pickupDate"
                        type="date"
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deliveryDate">Required Delivery Date</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>We'll use this information to send your quote</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Full Name</Label>
                      <Input
                        id="contactName"
                        placeholder="Your full name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email Address</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Phone Number</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Any special requirements, handling instructions, or additional details..."
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit */}
              <Card>
                <CardContent className="pt-6">
                  <Button type="submit" className="w-full" size="lg">
                    Submit Quote Request
                  </Button>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    Our freight specialists will review your request and contact you within 24 hours with a detailed
                    quote.
                  </p>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
