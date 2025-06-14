"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Scissors, Palette, Ruler, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const showcaseItems = [
  {
    id: 1,
    title: "Custom Wedding Dress",
    image: "/placeholder.svg?height=300&width=300",
    description: "Elegant silk wedding gown with intricate beadwork",
    category: "Formal Wear",
  },
  {
    id: 2,
    title: "Business Suit Collection",
    image: "/placeholder.svg?height=300&width=300",
    description: "Professional tailored suits for corporate clients",
    category: "Business Wear",
  },
  {
    id: 3,
    title: "Custom Fabric Pattern",
    image: "/placeholder.svg?height=300&width=300",
    description: "Unique floral pattern designed for home decor",
    category: "Fabric Design",
  },
  {
    id: 4,
    title: "Traditional Garments",
    image: "/placeholder.svg?height=300&width=300",
    description: "Cultural attire with authentic craftsmanship",
    category: "Traditional",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "The custom wedding dress exceeded all my expectations. The attention to detail and perfect fit made my special day even more memorable.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    name: "Michael Chen",
    role: "Business Executive",
    content:
      "Professional service and exceptional quality. My custom suits fit perfectly and the fabric choices were outstanding.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Interior Designer",
    content:
      "The custom fabric designs brought my client's vision to life. Excellent communication throughout the entire process.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Choose Your Style & Measurements",
    description: "Select garment type and provide detailed measurements using our interactive guide",
    icon: <Ruler className="h-8 w-8" />,
  },
  {
    step: 2,
    title: "Select Materials & Colors",
    description: "Browse our premium fabric collection and choose colors that match your vision",
    icon: <Palette className="h-8 w-8" />,
  },
  {
    step: 3,
    title: "Get a Custom Quote",
    description: "Receive a detailed quote with timeline and pricing for your custom creation",
    icon: <Clock className="h-8 w-8" />,
  },
  {
    step: 4,
    title: "Receive Your Custom Creation",
    description: "Get your perfectly tailored garment or custom fabric delivered to your door",
    icon: <CheckCircle className="h-8 w-8" />,
  },
]

export default function FabricTextileLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Custom Tailoring & Design
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  Your Vision, <span className="text-purple-600">Tailored to Perfection</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your ideas into stunning custom garments and fabrics. From wedding dresses to business
                  suits, we bring your unique style to life with expert craftsmanship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/fabric-textiles/custom-order">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Custom Order
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Gallery
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Custom Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Custom tailoring"
                  width={250}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Fabric swatches"
                  width={250}
                  height={300}
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Scissors className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold">Expert Craftsmanship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process ensures you get exactly what you envision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <Card key={step.step} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto text-purple-600">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Custom Creations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of custom garments and fabric designs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseItems.map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{item.category}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-purple-100">
              Start your custom order today and experience the difference of personalized craftsmanship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fabric-textiles/custom-order">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Design Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-600"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
