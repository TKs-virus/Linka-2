"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ChevronRight } from "lucide-react"

export default function LandscapingConfirmationPage() {
  // Generate a unique request ID
  const requestId = `LS${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}${String(
    new Date().getDate(),
  ).padStart(2, "0")}-${Math.floor(10000 + Math.random() * 90000)}`

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/home-services" className="text-muted-foreground hover:text-foreground">
          Home Services
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/home-services/landscaping" className="text-muted-foreground hover:text-foreground">
          Landscaping
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span>Confirmation</span>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 rounded-full p-3 mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Your Landscaping Quote Request has been received!</h1>
            <p className="text-lg mb-6">Thank you for choosing our services.</p>

            <div className="bg-gray-50 w-full p-4 rounded-lg mb-6">
              <p className="text-sm text-muted-foreground mb-2">Request ID:</p>
              <p className="text-xl font-mono font-bold">{requestId}</p>
            </div>

            <div className="space-y-4 text-left w-full mb-8">
              <h2 className="font-bold text-lg">Next Steps:</h2>
              <p>
                Our landscaping specialists will review your details and contact you with a customized quote and
                potential site visit within 2-3 business days.
              </p>
              <p className="font-medium">Important Note: Quotes are valid for 30 days.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button className="flex-1" asChild>
                <Link href="/home-services/bookings">View My Service Requests</Link>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/home-services">Back to General Services</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
