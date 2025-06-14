"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Briefcase, FileText, Users, CheckCircle, Clock, Award } from "lucide-react"
import ServiceCategoryCard from "./service-category-card"
import ProfessionalCard from "./professional-card"
import TestimonialCard from "./testimonial-card"

export default function ProfessionalHomePage() {
  const router = useRouter()

  const serviceCategories = [
    {
      id: 1,
      name: "Legal Services",
      icon: <FileText className="h-8 w-8" />,
      description: "Contract review, legal advice, intellectual property",
      professionalCount: 1250,
    },
    {
      id: 2,
      name: "Business Consulting",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Strategy, operations, financial advisory",
      professionalCount: 980,
    },
    {
      id: 3,
      name: "Digital Marketing",
      icon: <Users className="h-8 w-8" />,
      description: "SEO, social media, content marketing",
      professionalCount: 1450,
    },
    {
      id: 4,
      name: "Writing & Translation",
      icon: <FileText className="h-8 w-8" />,
      description: "Content writing, technical writing, translation",
      professionalCount: 1120,
    },
    {
      id: 5,
      name: "Design & Creative",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Graphic design, UX/UI, branding",
      professionalCount: 1380,
    },
  ]

  const featuredProfessionals = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Corporate Lawyer",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 124,
      hourlyRate: 150,
      category: "Legal Services",
      location: "New York, NY",
      tags: ["Contract Law", "Corporate Law", "Intellectual Property"],
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Business Strategy Consultant",
      image: "/placeholder.jpg",
      rating: 4.8,
      reviewCount: 98,
      hourlyRate: 200,
      category: "Business Consulting",
      location: "San Francisco, CA",
      tags: ["Strategic Planning", "Market Analysis", "Growth Strategy"],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Digital Marketing Specialist",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 156,
      hourlyRate: 120,
      category: "Digital Marketing",
      location: "Chicago, IL",
      tags: ["SEO", "Social Media Marketing", "Content Strategy"],
    },
    {
      id: 4,
      name: "James Wilson",
      title: "UX/UI Designer",
      image: "/placeholder.jpg",
      rating: 4.7,
      reviewCount: 87,
      hourlyRate: 95,
      category: "Design & Creative",
      location: "Austin, TX",
      tags: ["User Experience", "Interface Design", "Prototyping"],
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "John D.",
      company: "Tech Startup CEO",
      image: "/placeholder.jpg",
      text: "Working with the legal professionals on this platform saved us thousands in legal fees and helped us navigate complex regulatory issues during our launch phase.",
      professional: "Sarah Johnson, Corporate Lawyer",
    },
    {
      id: 2,
      name: "Maria S.",
      company: "Marketing Director",
      image: "/placeholder.jpg",
      text: "The digital marketing specialists we found here transformed our online presence. Our organic traffic increased by 200% within just three months of implementing their strategy.",
      professional: "Emily Rodriguez, Digital Marketing Specialist",
    },
    {
      id: 3,
      name: "Alex T.",
      company: "Retail Business Owner",
      image: "/placeholder.jpg",
      text: "The business consultant we hired through this platform helped us streamline operations and increase profit margins by 15%. Their industry expertise was invaluable.",
      professional: "Michael Chen, Business Strategy Consultant",
    },
  ]

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/placeholder.jpg"
          alt="Professional services"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            Connect with Top Professionals
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">Find expert services for your business needs</p>
          <div className="w-full max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for professionals or services..."
              className="pl-10 py-6 text-lg bg-white/90 text-black"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => router.push("/professional/search")}
            >
              Find a Professional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 border-white"
              onClick={() => router.push("/professional/post-project")}
            >
              Post a Project
            </Button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* For Clients */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-6">For Clients</h3>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Post Your Project</h4>
                <p className="text-muted-foreground">
                  Describe your project needs, budget, and timeline to receive proposals from qualified professionals.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                <span className="font-bold text-blue-600">2</span>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Review Proposals</h4>
                <p className="text-muted-foreground">
                  Compare proposals, portfolios, and reviews to find the perfect professional for your project.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                <span className="font-bold text-blue-600">3</span>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Collaborate & Pay</h4>
                <p className="text-muted-foreground">
                  Work with your chosen professional and pay securely through our platform when the job is done.
                </p>
              </div>
            </div>
            <div className="text-center mt-6">
              <Button onClick={() => router.push("/professional/post-project")}>Post a Project</Button>
            </div>
          </div>

          {/* For Professionals */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-6">For Professionals</h3>
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                <span className="font-bold text-green-600">1</span>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Create Your Profile</h4>
                <p className="text-muted-foreground">
                  Showcase your expertise, portfolio, and services to attract potential clients.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                <span className="font-bold text-green-600">2</span>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Browse Projects</h4>
                <p className="text-muted-foreground">
                  Find relevant projects that match your skills and submit compelling proposals.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                <span className="font-bold text-green-600">3</span>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Get Hired & Grow</h4>
                <p className="text-muted-foreground">
                  Deliver exceptional work, build your reputation, and expand your client base.
                </p>
              </div>
            </div>
            <div className="text-center mt-6">
              <Button onClick={() => router.push("/professional/become-professional")}>Become a Professional</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Browse Service Categories</h2>
            <Button variant="outline" onClick={() => router.push("/professional/search")}>
              View All Categories
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceCategories.map((category) => (
              <ServiceCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Professionals Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Professionals</h2>
          <Button variant="outline" onClick={() => router.push("/professional/search")}>
            View All Professionals
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProfessionals.map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Verified Professionals</h3>
                  <p className="text-muted-foreground">
                    All professionals undergo thorough vetting and credential verification before joining our platform.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
                  <p className="text-muted-foreground">
                    Find the right professional quickly with our advanced matching algorithm and filtering options.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                  <p className="text-muted-foreground">
                    Our satisfaction guarantee and secure payment system ensure you only pay for quality work.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Get Started?</h2>
              <p className="text-lg opacity-90 mb-4 md:mb-0">
                Find the perfect professional for your business needs today
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => router.push("/professional/search")}
              >
                Find a Professional
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700"
                onClick={() => router.push("/professional/post-project")}
              >
                Post a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
