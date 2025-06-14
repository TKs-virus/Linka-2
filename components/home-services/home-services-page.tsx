"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Wrench,
  Droplet,
  Paintbrush,
  Zap,
  Scissors,
  BrushIcon as Broom,
  Hammer,
  Thermometer,
  MapPin,
  CheckCircle,
  Clock,
  Star,
  Tv,
} from "lucide-react"
import ServiceCard from "./service-card"
import TestimonialCard from "./testimonial-card"

export default function HomeServicesPage() {
  const router = useRouter()
  const [location, setLocation] = useState("")

  const serviceTypes = [
    {
      id: "plumbing",
      name: "Plumbing",
      icon: <Droplet className="h-8 w-8" />,
      description: "Reliable solutions for all plumbing issues, from leaks to installations",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "electrical",
      name: "Electricians",
      icon: <Zap className="h-8 w-8" />,
      description: "Safe, certified electrical repairs, installations, and expert consultancy",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "cleaning",
      name: "Cleaning",
      icon: <Broom className="h-8 w-8" />,
      description: "Home, office, deep cleaning services",
      color: "bg-green-100 text-green-700",
    },
    {
      id: "landscaping",
      name: "Landscaping",
      icon: <Scissors className="h-8 w-8" />,
      description: "Transform your outdoor space with design, installation, and maintenance",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "painting",
      name: "Paint Services",
      icon: <Paintbrush className="h-8 w-8" />,
      description: "Professional painting for construction, renovations, and artistic projects",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "dstv-wifi",
      name: "DStv/WiFi",
      icon: <Tv className="h-8 w-8" />,
      description: "Seamless setup and troubleshooting for your entertainment and internet",
      color: "bg-red-100 text-red-700",
    },
    {
      id: "handyman",
      name: "Handyman",
      icon: <Wrench className="h-8 w-8" />,
      description: "General repairs and maintenance",
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: "hvac",
      name: "HVAC",
      icon: <Thermometer className="h-8 w-8" />,
      description: "Heating, cooling, ventilation",
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      id: "renovation",
      name: "Renovation",
      icon: <Hammer className="h-8 w-8" />,
      description: "Remodeling, upgrades, additions",
      color: "bg-teal-100 text-teal-700",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Lusaka, Zambia",
      image: "/placeholder.jpg",
      text: "The plumber arrived on time and fixed our leaking sink in less than an hour. Very professional and reasonably priced!",
      service: "Plumbing",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Lusaka, Zambia",
      image: "/placeholder.jpg",
      text: "I've been using their landscaping service for 6 months now. My garden is always beautiful and they're very thorough with every detail.",
      service: "Landscaping",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Lusaka, Zambia",
      image: "/placeholder.jpg",
      text: "The DStv installation team was professional and efficient. They set up everything perfectly and even showed me how to use all the features.",
      service: "DStv/WiFi Installation",
      rating: 4,
    },
  ]

  const handleServiceSelect = (serviceId: string) => {
    router.push(`/home-services/${serviceId}`)
  }

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image src="/placeholder.jpg" alt="Home services" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            Your Trusted Partner for Home & Property Expertise in Lusaka
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Book trusted professionals for your home maintenance and repair needs
          </p>
          <div className="w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Enter your location in Lusaka"
                  className="pl-10 py-6 text-lg bg-white/90 text-black"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 py-6">
                Find Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Types Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What service do you need?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {serviceTypes.map((service) => (
            <ServiceCard key={service.id} service={service} onSelect={handleServiceSelect} />
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Select Service</h3>
              <p className="text-muted-foreground">
                Choose from our wide range of home services and tell us what you need help with.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Describe Your Need</h3>
              <p className="text-muted-foreground">
                Provide details about your service requirements so we can match you with the right professional.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get a Quote/Book</h3>
              <p className="text-muted-foreground">
                Receive a customized quote or book your service directly with our verified professionals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Service Delivered</h3>
              <p className="text-muted-foreground">
                Our vetted professionals will arrive on time and complete the job to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Vetted Professionals</h3>
                <p className="text-muted-foreground">
                  All service providers undergo thorough background checks and skill verification.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">On-Time Service</h3>
                <p className="text-muted-foreground">
                  We value your time and guarantee that our professionals will arrive within the scheduled window.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Star className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground">
                  If you're not completely satisfied with the service, we'll make it right or refund your money.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to get started?</h2>
              <p className="text-lg opacity-90 mb-4 md:mb-0">
                Book a service today and experience hassle-free home maintenance
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => router.push("/home-services/plumbing")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
