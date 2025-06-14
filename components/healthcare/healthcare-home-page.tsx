"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Pill, Clock, Shield, CreditCard, Star } from "lucide-react"
import FeaturedDoctorCard from "./featured-doctor-card"
import PopularCategoryCard from "./popular-category-card"

export default function HealthcareHomePage() {
  const router = useRouter()

  const featuredDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Practice",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 124,
      availableToday: true,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      image: "/placeholder.jpg",
      rating: 4.8,
      reviewCount: 98,
      availableToday: true,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 156,
      availableToday: false,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Mental Health",
      image: "/placeholder.jpg",
      rating: 4.7,
      reviewCount: 87,
      availableToday: true,
    },
  ]

  const popularCategories = [
    {
      id: 1,
      name: "Prescription Medications",
      image: "/placeholder.jpg",
      itemCount: 1200,
    },
    {
      id: 2,
      name: "Over-the-Counter",
      image: "/placeholder.jpg",
      itemCount: 850,
    },
    {
      id: 3,
      name: "Vitamins & Supplements",
      image: "/placeholder.jpg",
      itemCount: 620,
    },
    {
      id: 4,
      name: "Personal Care",
      image: "/placeholder.jpg",
      itemCount: 740,
    },
  ]

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image src="/placeholder.jpg" alt="Healthcare services" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">Healthcare at Your Fingertips</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Connect with doctors online and get medications delivered to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => router.push("/healthcare/find-doctor")}
            >
              <Video className="mr-2 h-5 w-5" />
              Book a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 border-white"
              onClick={() => router.push("/healthcare/pharmacy")}
            >
              <Pill className="mr-2 h-5 w-5" />
              Order Medication
            </Button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="mt-4">Book Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Choose a doctor and book a video consultation at a time that works for you
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="mt-4">Consult Online</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with your doctor via secure video call for diagnosis and treatment
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Pill className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="mt-4">Get Prescription</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receive digital prescriptions directly to your account after consultation
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="mt-4">Delivery or Pickup</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get medications delivered to your door or pick up from a nearby pharmacy
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Featured Doctors Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Doctors</h2>
            <Button variant="outline" onClick={() => router.push("/healthcare/find-doctor")}>
              View All Doctors
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDoctors.map((doctor) => (
              <FeaturedDoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>

      {/* Online Pharmacy Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Online Pharmacy</h2>
          <Button variant="outline" onClick={() => router.push("/healthcare/pharmacy")}>
            Browse All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCategories.map((category) => (
            <PopularCategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Have a Prescription?</h3>
              <p className="text-lg opacity-90 mb-4">Upload your prescription and get medications delivered</p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => router.push("/healthcare/pharmacy/upload-prescription")}
            >
              Upload Prescription
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Healthcare Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Access healthcare services anytime, day or night, from the comfort of your home
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualified Professionals</h3>
              <p className="text-muted-foreground">
                All our doctors are board-certified with years of experience in their specialties
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Insurance Accepted</h3>
              <p className="text-muted-foreground">
                We work with most major insurance providers to make healthcare affordable
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
