"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function VehicleStorePage() {
  const services = [
    {
      title: "Car Detailing",
      description: "Professional car cleaning and detailing services",
      href: "/vehiclestore/car-detailing",
      dashboardHref: "/vehiclestore/car-detailing/dashboard",
      icon: "🚗",
    },
    {
      title: "Spare Parts",
      description: "Genuine and aftermarket auto parts catalog",
      href: "/vehiclestore/spare-parts",
      dashboardHref: "/vehiclestore/spare-parts/dashboard",
      icon: "⚙️",
    },
    {
      title: "Vehicle Painting",
      description: "Professional automotive painting services",
      href: "/vehiclestore/vehicle-painting",
      dashboardHref: "/vehiclestore/vehicle-painting/dashboard",
      icon: "🎨",
    },
    {
      title: "Repair & Maintenance",
      description: "Complete vehicle repair and maintenance services",
      href: "/vehiclestore/repair-maintenance",
      dashboardHref: "/vehiclestore/repair-maintenance/dashboard",
      icon: "🔧",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Excellent car detailing service! My car looks brand new again.",
      service: "Car Detailing",
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Found the exact part I needed at a great price. Fast shipping too!",
      service: "Spare Parts",
    },
    {
      name: "David Rodriguez",
      rating: 5,
      comment: "Professional paint job that exceeded my expectations.",
      service: "Vehicle Painting",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg"></div>
              <span className="font-bold text-xl">MultiPlatform</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/travel" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                Travel
              </Link>
              <Link href="/healthcare" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                Healthcare
              </Link>
              <Link href="/education" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                Education
              </Link>
              <Link href="/vehiclestore" className="text-sm font-medium text-blue-600">
                VehicleStore
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">VehicleStore Services</h1>
          <p className="text-gray-600 text-lg">Complete automotive solutions for customers and service providers</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={service.href} className="flex-1">
                    <Button className="w-full">Customer Service</Button>
                  </Link>
                  <Link href={service.dashboardHref} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Provider Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <section className="py-16 bg-blue-600 text-white rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-blue-200">Vehicles Serviced</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Expert Technicians</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Emergency Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
