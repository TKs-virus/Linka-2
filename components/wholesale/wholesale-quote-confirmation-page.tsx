"use client"

import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Mail, Phone, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WholesaleQuoteConfirmationPage() {
  const quoteReference = "WQ-2024-001234"
  const submissionDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Quote Request Submitted Successfully!</h1>
            <p className="text-lg text-gray-600">
              Thank you for your wholesale quote request. We'll get back to you soon.
            </p>
          </div>

          {/* Quote Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Quote Request Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Reference Number</Label>
                  <p className="text-lg font-semibold text-blue-600">{quoteReference}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Submitted On</Label>
                  <p className="text-lg font-semibold">{submissionDate}</p>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Status</Label>
                <div className="mt-1">
                  <Badge className="bg-yellow-100 text-yellow-800">
                    <Clock className="h-3 w-3 mr-1" />
                    Pending Review
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
              <CardDescription>Here's what you can expect from our wholesale team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Review & Analysis</h3>
                    <p className="text-gray-600 text-sm">
                      Our sales team will review your request and analyze current market pricing for the requested
                      products.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Expected: Within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Customized Quote Preparation</h3>
                    <p className="text-gray-600 text-sm">
                      We'll prepare a detailed quote with final pricing, shipping costs, and delivery timelines.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Expected: Within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quote Delivery & Discussion</h3>
                    <p className="text-gray-600 text-sm">
                      You'll receive your detailed quote via email, and our sales representative will contact you to
                      discuss terms.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Expected: Within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Need Immediate Assistance?</CardTitle>
              <CardDescription>Our wholesale team is here to help with any questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm text-gray-600">1-800-WHOLESALE</p>
                    <p className="text-xs text-gray-500">Mon-Fri, 8AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-gray-600">wholesale@servicehub.com</p>
                    <p className="text-xs text-gray-500">Response within 2 hours</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wholesale/account/quotes">
              <Button className="w-full sm:w-auto">
                <FileText className="h-4 w-4 mr-2" />
                View My Quotes
              </Button>
            </Link>
            <Link href="/wholesale/products">
              <Button variant="outline" className="w-full sm:w-auto">
                Continue Shopping
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Important Notes */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>
                • Please save your reference number: <strong>{quoteReference}</strong>
              </li>
              <li>• Check your email (including spam folder) for quote updates</li>
              <li>• Quotes are valid for 30 days from the date of issue</li>
              <li>• Pricing may vary based on current market conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
