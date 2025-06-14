"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ChevronRight, Filter, ChevronDown, ChevronUp, Search, Star } from "lucide-react"
import ProfessionalCard from "./professional-card"

export default function ProfessionalSearchPage() {
  const router = useRouter()
  const [filtersVisible, setFiltersVisible] = useState(true)
  const [rateRange, setRateRange] = useState([50, 300])
  const [sortBy, setSortBy] = useState("relevance")

  // Mock professionals data
  const professionals = [
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
    {
      id: 5,
      name: "Olivia Martinez",
      title: "Content Writer",
      image: "/placeholder.jpg",
      rating: 4.8,
      reviewCount: 112,
      hourlyRate: 75,
      category: "Writing & Translation",
      location: "Denver, CO",
      tags: ["Blog Writing", "Copywriting", "Technical Writing"],
    },
    {
      id: 6,
      name: "David Thompson",
      title: "Tax Consultant",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 78,
      hourlyRate: 180,
      category: "Legal Services",
      location: "Boston, MA",
      tags: ["Tax Planning", "Financial Advisory", "Compliance"],
    },
    {
      id: 7,
      name: "Jennifer Lee",
      title: "Social Media Manager",
      image: "/placeholder.jpg",
      rating: 4.6,
      reviewCount: 93,
      hourlyRate: 85,
      category: "Digital Marketing",
      location: "Los Angeles, CA",
      tags: ["Social Media Strategy", "Content Creation", "Community Management"],
    },
    {
      id: 8,
      name: "Robert Garcia",
      title: "Management Consultant",
      image: "/placeholder.jpg",
      rating: 4.8,
      reviewCount: 67,
      hourlyRate: 220,
      category: "Business Consulting",
      location: "Seattle, WA",
      tags: ["Process Optimization", "Change Management", "Leadership Development"],
    },
    {
      id: 9,
      name: "Sophia Kim",
      title: "Graphic Designer",
      image: "/placeholder.jpg",
      rating: 4.7,
      reviewCount: 104,
      hourlyRate: 90,
      category: "Design & Creative",
      location: "Portland, OR",
      tags: ["Brand Identity", "Print Design", "Digital Graphics"],
    },
    {
      id: 10,
      name: "Daniel Brown",
      title: "Patent Attorney",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 56,
      hourlyRate: 250,
      category: "Legal Services",
      location: "Washington, DC",
      tags: ["Patent Law", "Intellectual Property", "Technology"],
    },
    {
      id: 11,
      name: "Amanda Wilson",
      title: "SEO Specialist",
      image: "/placeholder.jpg",
      rating: 4.8,
      reviewCount: 89,
      hourlyRate: 110,
      category: "Digital Marketing",
      location: "Miami, FL",
      tags: ["Keyword Research", "On-Page SEO", "Link Building"],
    },
    {
      id: 12,
      name: "Thomas Clark",
      title: "Financial Advisor",
      image: "/placeholder.jpg",
      rating: 4.7,
      reviewCount: 72,
      hourlyRate: 175,
      category: "Business Consulting",
      location: "Chicago, IL",
      tags: ["Investment Strategy", "Financial Planning", "Wealth Management"],
    },
  ]

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
        <span>Browse Professionals</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">Browse Professionals</h1>

      {/* Search bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search for keywords, names, or skills..." className="pl-10 py-6 text-lg" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              <div className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                <h2 className="font-semibold">Filters</h2>
              </div>
              {filtersVisible ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </div>

            {filtersVisible && (
              <div className="p-4 border-t space-y-6">
                {/* Service Category filter */}
                <div>
                  <h3 className="font-medium mb-3">Service Category</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="legal" />
                      <Label htmlFor="legal">Legal Services</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="business" />
                      <Label htmlFor="business">Business Consulting</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing">Digital Marketing</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="writing" />
                      <Label htmlFor="writing">Writing & Translation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="design" />
                      <Label htmlFor="design">Design & Creative</Label>
                    </div>
                  </div>
                </div>

                {/* Specific Service filter */}
                <div>
                  <h3 className="font-medium mb-3">Specific Service</h3>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seo">SEO</SelectItem>
                      <SelectItem value="social">Social Media Management</SelectItem>
                      <SelectItem value="content">Content Marketing</SelectItem>
                      <SelectItem value="ppc">PPC</SelectItem>
                      <SelectItem value="email">Email Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Industry Expertise filter */}
                <div>
                  <h3 className="font-medium mb-3">Industry Expertise</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="healthcare" />
                      <Label htmlFor="healthcare">Healthcare</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tech" />
                      <Label htmlFor="tech">Technology</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="finance" />
                      <Label htmlFor="finance">Finance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="retail" />
                      <Label htmlFor="retail">Retail</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="realestate" />
                      <Label htmlFor="realestate">Real Estate</Label>
                    </div>
                  </div>
                </div>

                {/* Pricing Models filter */}
                <div>
                  <h3 className="font-medium mb-3">Pricing Models</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hourly" />
                      <Label htmlFor="hourly">Hourly Rate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fixed" />
                      <Label htmlFor="fixed">Fixed Price</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="project" />
                      <Label htmlFor="project">Project-Based</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="retainer" />
                      <Label htmlFor="retainer">Retainer</Label>
                    </div>
                  </div>
                </div>

                {/* Hourly Rate filter */}
                <div>
                  <h3 className="font-medium mb-3">Hourly Rate</h3>
                  <Slider
                    defaultValue={rateRange}
                    min={25}
                    max={500}
                    step={5}
                    onValueChange={setRateRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${rateRange[0]}</span>
                    <span>${rateRange[1]}</span>
                  </div>
                </div>

                {/* Location filter */}
                <div>
                  <h3 className="font-medium mb-3">Location</h3>
                  <Input placeholder="City, state, or country" />
                </div>

                {/* Rating filter */}
                <div>
                  <h3 className="font-medium mb-3">Rating</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rating5" />
                      <Label htmlFor="rating5" className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        <span className="ml-2">& up</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rating4" />
                      <Label htmlFor="rating4" className="flex">
                        {Array(4)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        <span className="ml-2">& up</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rating3" />
                      <Label htmlFor="rating3" className="flex">
                        {Array(3)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        <span className="ml-2">& up</span>
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Availability filter */}
                <div>
                  <h3 className="font-medium mb-3">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fulltime" />
                      <Label htmlFor="fulltime">Full-Time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="parttime" />
                      <Label htmlFor="parttime">Part-Time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="immediate" />
                      <Label htmlFor="immediate">Immediate Availability</Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            )}
          </div>
        </div>

        {/* Professionals listing */}
        <div className="lg:w-3/4">
          <div className="mb-4 flex justify-between items-center">
            <div className="text-sm">
              <span className="font-medium">{professionals.length} professionals</span> found
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button className="mx-1">1</Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="ml-2">
              Next
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
