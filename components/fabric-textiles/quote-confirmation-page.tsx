"use client"

import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Clock, User, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export default function QuoteConfirmationPage() {
  // Mock reference number - in real app this would be generated
  const referenceNumber = "FT-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Custom Order Request Has Been Submitted!</h1>
          <p className="text-xl text-gray-600">Thank you for choosing our custom tailoring service</p>
        </div>

        {/* Reference Number */}
        <Card className="mb-8">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <Label className="text-sm font-medium text-gray-600">Reference Number</Label>
              <div className="text-2xl font-bold text-purple-600 mt-1">{referenceNumber}</div>
            </div>
            <Badge variant="secondary" className="text-sm">
              Keep this number for your records
            </Badge>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" />
              What Happens Next
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-purple-600">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Design Team Review</h3>
                  <p className="text-gray-600 text-sm">
                    Our expert designers will carefully review your specifications and requirements.
                  </p>
                  <Badge variant="outline" className="mt-2">
                    Within 24 hours
                  </Badge>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-purple-600">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Custom Quote Preparation</h3>
                  <p className="text-gray-600 text-sm">
                    We'll prepare a detailed quote including pricing, timeline, and material specifications.
                  </p>
                  <Badge variant="outline" className="mt-2">
                    1-2 business days
                  </Badge>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-purple-600">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quote Delivery</h3>
                  <p className="text-gray-600 text-sm">
                    You'll receive your custom quote via email and in your account dashboard.
                  </p>
                  <Badge variant="outline" className="mt-2">
                    2-3 business days
                  </Badge>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900">Email Notification</h4>
                  <p className="text-blue-800 text-sm">
                    You will receive a detailed quote via email within <strong>2-3 business days</strong>. The quote
                    will include itemized pricing, production timeline, and next steps.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-purple-600" />
              Need Immediate Assistance?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Design Team</h4>
                <p className="text-sm text-gray-600">For questions about your specifications</p>
                <p className="text-sm">
                  <strong>Email:</strong> design@servicehub.com
                  <br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Customer Support</h4>
                <p className="text-sm text-gray-600">For general inquiries and order status</p>
                <p className="text-sm">
                  <strong>Email:</strong> support@servicehub.com
                  <br />
                  <strong>Hours:</strong> Mon-Fri, 9AM-6PM EST
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Reference your order:</strong> Please include reference number{" "}
                <strong>{referenceNumber}</strong> in all communications.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/account/custom-orders">
            <Button size="lg" className="w-full sm:w-auto">
              Go to My Custom Orders
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/fabric-textiles">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Browse Other Fabrics
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </Link>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Why Choose Our Custom Service?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-purple-800">
              <div>
                <strong>Expert Craftsmanship</strong>
                <br />
                15+ years of experience
              </div>
              <div>
                <strong>Premium Materials</strong>
                <br />
                Sourced from trusted suppliers
              </div>
              <div>
                <strong>Perfect Fit Guarantee</strong>
                <br />
                Free alterations if needed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
