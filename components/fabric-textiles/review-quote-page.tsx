"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Edit, Clock, Mail, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ReviewQuotePage() {
  const router = useRouter()
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = () => {
    // Submit quote request
    router.push("/fabric-textiles/quote-confirmation")
  }

  // Mock data - in real app this would come from previous form
  const orderSummary = {
    garmentType: "Custom Dress",
    measurements: {
      bust: "86",
      waist: "70",
      hips: "92",
      length: "120",
    },
    material: "Silk",
    colors: ["#FF69B4", "#FFFFFF"],
    occasions: ["Wedding", "Formal"],
    additionalNotes: "Please ensure the dress has a flowing silhouette with delicate beadwork around the neckline.",
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/fabric-textiles" className="hover:text-gray-900">
              Textile & Fabrics
            </Link>
            <span>/</span>
            <span className="text-gray-900">Review & Quote Request</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Your Custom Order</h1>
          <p className="text-gray-600">Please review your specifications and provide contact information</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Order Specifications</CardTitle>
                <Link href="/fabric-textiles/custom-order">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Garment Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{orderSummary.garmentType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Material:</span>
                        <span className="font-medium">{orderSummary.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Occasions:</span>
                        <div className="flex gap-1">
                          {orderSummary.occasions.map((occasion) => (
                            <Badge key={occasion} variant="secondary" className="text-xs">
                              {occasion}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Measurements (cm)</h3>
                    <div className="space-y-2">
                      {Object.entries(orderSummary.measurements).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">{key}:</span>
                          <span className="font-medium">{value} cm</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Selected Colors</h3>
                  <div className="flex gap-3">
                    {orderSummary.colors.map((color, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-sm font-medium">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {orderSummary.additionalNotes && (
                  <div>
                    <h3 className="font-semibold mb-3">Additional Notes</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm">{orderSummary.additionalNotes}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    placeholder="Enter your phone number"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms & Conditions */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <Link href="/terms" className="text-purple-600 hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    for custom orders. I understand that custom orders require a 50% deposit and have specific return
                    policies.
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Information Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  Quote Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">2-3</div>
                  <div className="text-sm text-purple-800">Business Days</div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  You will receive a detailed quote via email within 2-3 business days
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's Included in Your Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Detailed pricing breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Production timeline
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Material specifications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Delivery options
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Care instructions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span>support@servicehub.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <p className="text-xs text-gray-600">Our design team is available Monday-Friday, 9AM-6PM EST</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between mt-8">
          <Link href="/fabric-textiles/custom-order">
            <Button variant="outline">Back to Design</Button>
          </Link>

          <Button onClick={handleSubmit} disabled={!contactInfo.name || !contactInfo.email || !acceptTerms} size="lg">
            Submit Quote Request
          </Button>
        </div>
      </div>
    </div>
  )
}
