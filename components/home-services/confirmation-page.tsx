"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Clock, MapPin, ChevronRight } from "lucide-react"

export default function ConfirmationPage() {
  const router = useRouter()

  // Generate a random booking reference
  const bookingReference = `HS-${Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")}`

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
        <span>Booking Confirmation</span>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-xl text-muted-foreground">Your service has been scheduled successfully.</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold mb-2">Booking Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">June 15, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">10:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">123 Main St, Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h2 className="text-lg font-bold mb-2">Service Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Service Type</p>
                    <p className="font-medium">Plumbing Services</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Specific Task</p>
                    <p className="font-medium">Leak Repair</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Booking Reference</p>
                    <p className="font-medium">{bookingReference}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Price</p>
                    <p className="font-medium">$80 - $150</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h2 className="text-lg font-bold mb-2">What's Next?</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>You'll receive a confirmation email with all the details.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Our service provider will contact you before the appointment to confirm details.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>You can view, reschedule, or cancel this booking from your account dashboard.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => router.push("/home-services/bookings")}>View My Bookings</Button>
          <Button variant="outline" onClick={() => router.push("/home-services")}>
            Return to Home Services
          </Button>
        </div>
      </div>
    </main>
  )
}
