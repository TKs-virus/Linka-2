"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Star,
  MapPin,
  Calendar,
  MessageSquare,
  Briefcase,
  Award,
  Clock,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ProfessionalProfilePageProps {
  professionalId: string
}

export default function ProfessionalProfilePage({ professionalId }: ProfessionalProfilePageProps) {
  const router = useRouter()
  const [messageOpen, setMessageOpen] = useState(false)

  // Mock professional data (in a real app, you would fetch this based on the professionalId)
  const professional = {
    id: Number.parseInt(professionalId),
    name: "Sarah Johnson",
    title: "Corporate Lawyer",
    image: "/placeholder.jpg",
    rating: 4.9,
    reviewCount: 124,
    hourlyRate: 150,
    category: "Legal Services",
    location: "New York, NY",
    tags: ["Contract Law", "Corporate Law", "Intellectual Property"],
    bio: "I'm a corporate lawyer with over 10 years of experience helping businesses navigate legal complexities. I specialize in contract law, corporate governance, and intellectual property protection. My approach combines thorough legal analysis with practical business insights to deliver solutions that protect my clients while enabling their growth.",
    experience: [
      {
        title: "Senior Corporate Lawyer",
        company: "Johnson & Associates",
        period: "2018 - Present",
        description:
          "Lead a team of lawyers handling corporate transactions, contract negotiations, and intellectual property matters for clients ranging from startups to Fortune 500 companies.",
      },
      {
        title: "Corporate Attorney",
        company: "Smith & Partners Law Firm",
        period: "2013 - 2018",
        description:
          "Specialized in mergers and acquisitions, venture capital financing, and corporate governance for technology and healthcare companies.",
      },
      {
        title: "Associate Lawyer",
        company: "Global Legal Group",
        period: "2010 - 2013",
        description:
          "Assisted senior attorneys with contract drafting, legal research, and due diligence for corporate transactions.",
      },
    ],
    education: [
      {
        degree: "Juris Doctor (J.D.)",
        institution: "Harvard Law School",
        year: "2010",
      },
      {
        degree: "Bachelor of Arts in Political Science",
        institution: "Yale University",
        year: "2007",
      },
    ],
    certifications: ["New York State Bar Association", "American Bar Association", "Certified Contract Specialist"],
    services: [
      {
        title: "Contract Review & Drafting",
        description:
          "Comprehensive review and drafting of business contracts including employment agreements, vendor contracts, and licensing agreements.",
        price: "$150/hour",
        estimatedTime: "3-5 hours per contract",
      },
      {
        title: "Corporate Formation & Governance",
        description:
          "Assistance with business entity formation, corporate bylaws, operating agreements, and ongoing governance matters.",
        price: "$1,500 (fixed price)",
        estimatedTime: "1-2 weeks",
      },
      {
        title: "Intellectual Property Protection",
        description:
          "Trademark registration, copyright protection, and development of IP strategies to safeguard your business assets.",
        price: "$2,000 (fixed price)",
        estimatedTime: "2-3 weeks",
      },
      {
        title: "Legal Consultation",
        description: "One-on-one consultation to discuss your specific legal needs and develop a tailored strategy.",
        price: "$200/hour",
        estimatedTime: "1-2 hours",
      },
    ],
    portfolio: [
      {
        title: "Tech Startup Acquisition",
        description:
          "Led legal team for $50M acquisition of a tech startup, handling due diligence, transaction documents, and regulatory compliance.",
        image: "/placeholder.jpg",
      },
      {
        title: "SaaS Company Contract Overhaul",
        description:
          "Redesigned entire contract system for a growing SaaS company, reducing legal risks and streamlining customer onboarding.",
        image: "/placeholder.jpg",
      },
      {
        title: "IP Protection Strategy",
        description:
          "Developed comprehensive IP protection strategy for a consumer products company, securing trademarks in multiple countries.",
        image: "/placeholder.jpg",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "John D.",
        company: "Tech Startup CEO",
        rating: 5,
        date: "May 15, 2025",
        comment:
          "Sarah was instrumental in helping us navigate our Series A funding. Her attention to detail and expertise in startup law saved us from several potential pitfalls. Highly recommended!",
      },
      {
        id: 2,
        name: "Maria S.",
        company: "Marketing Agency Owner",
        rating: 5,
        date: "April 10, 2025",
        comment:
          "We hired Sarah to overhaul our client contracts and she delivered exceptional results. Our new contracts are more comprehensive yet easier to understand. Sarah is responsive, thorough, and a pleasure to work with.",
      },
      {
        id: 3,
        name: "Robert T.",
        company: "Healthcare Company CFO",
        rating: 4,
        date: "March 22, 2025",
        comment:
          "Sarah helped us with a complex merger and provided solid guidance throughout the process. While some aspects took longer than expected, her expertise was invaluable in closing the deal successfully.",
      },
    ],
    availability: {
      nextAvailable: "Tomorrow",
      typicalResponseTime: "Within 4 hours",
      schedule: ["Monday-Friday: 9am-6pm ET", "Weekends: By appointment"],
    },
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/professional" className="text-muted-foreground hover:text-foreground">
          Professional Services
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/professional/search" className="text-muted-foreground hover:text-foreground">
          Browse Professionals
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="truncate max-w-[200px]">{professional.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Professional Content - Left Column */}
        <div className="lg:col-span-2">
          {/* Professional Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mr-6 mb-4 md:mb-0">
              <Image
                src={professional.image || "/placeholder.svg"}
                alt={professional.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">{professional.name}</h1>
              <p className="text-xl text-muted-foreground mb-2">{professional.title}</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium mr-1">{professional.rating}</span>
                  <span className="text-sm text-muted-foreground">({professional.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {professional.location}
                </div>
                <div className="text-sm text-blue-600">{professional.category}</div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {professional.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="about" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="mb-6">{professional.bio}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Experience</h2>
                <div className="space-y-6">
                  {professional.experience.map((exp, index) => (
                    <div key={index} className="flex">
                      <Briefcase className="h-5 w-5 mr-3 text-blue-600 mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold">{exp.title}</h3>
                        <p className="text-muted-foreground mb-1">
                          {exp.company} • {exp.period}
                        </p>
                        <p>{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <div className="space-y-4">
                  {professional.education.map((edu, index) => (
                    <div key={index} className="flex">
                      <Award className="h-5 w-5 mr-3 text-blue-600 mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold">{edu.degree}</h3>
                        <p className="text-muted-foreground">
                          {edu.institution}, {edu.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Certifications</h2>
                <div className="space-y-2">
                  {professional.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-600 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="services" className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Services Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {professional.services.map((service, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 border">
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">Price:</div>
                      <div>{service.price}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Estimated Time:</div>
                      <div>{service.estimatedTime}</div>
                    </div>
                    <Button className="w-full mt-4" onClick={() => setMessageOpen(true)}>
                      Request a Quote
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="portfolio" className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Portfolio & Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {professional.portfolio.map((item, index) => (
                  <div key={index} className="bg-card rounded-lg overflow-hidden border">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                      <Button variant="link" className="p-0 h-auto mt-2">
                        View Details <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">{professional.rating}</span>
                </div>
                <div>
                  <div className="flex mb-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(professional.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground">Based on {professional.reviewCount} reviews</p>
                </div>
              </div>
              <div className="space-y-6">
                {professional.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="font-medium">{review.name}</span>
                        {review.company && <span className="text-muted-foreground"> • {review.company}</span>}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Professional Sidebar - Right Column */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden sticky top-24">
            <div className="p-6">
              <div className="text-2xl font-bold mb-4">${professional.hourlyRate}/hr</div>
              <Button className="w-full mb-3" size="lg" onClick={() => setMessageOpen(true)}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact {professional.name.split(" ")[0]}
              </Button>
              <Button
                variant="outline"
                className="w-full mb-6"
                onClick={() => router.push("/professional/book-consultation")}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book a Consultation
              </Button>
              <div className="space-y-4">
                <h3 className="font-bold">Availability</h3>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Next available: {professional.availability.nextAvailable}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Typically responds {professional.availability.typicalResponseTime}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Working hours:</h4>
                  {professional.availability.schedule.map((schedule, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      {schedule}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={messageOpen} onOpenChange={setMessageOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Contact {professional.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter subject" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Describe your project or request..." className="min-h-[120px]" />
            </div>
            <div className="pt-4">
              <Button className="w-full" onClick={() => setMessageOpen(false)}>
                Send Message
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
