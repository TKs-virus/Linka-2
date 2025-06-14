"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Scissors, Info, Upload } from "lucide-react"

export default function LandscapingServicePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [propertyType, setPropertyType] = useState("residential")
  const [projectSize, setProjectSize] = useState("")
  const [timeline, setTimeline] = useState("")
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const landscapingServices = [
    {
      id: "garden-design",
      name: "Garden Design & Installation",
      description: "Professional design and installation of gardens and outdoor spaces",
    },
    {
      id: "lawn-care",
      name: "Lawn Care & Mowing (One-time / Recurring)",
      description: "Regular maintenance and care for your lawn",
    },
    {
      id: "tree-pruning",
      name: "Tree & Shrub Pruning / Removal",
      description: "Professional pruning, trimming, or removal of trees and shrubs",
    },
    {
      id: "irrigation",
      name: "Irrigation System Installation / Repair",
      description: "Setup or repair of efficient watering systems",
    },
    {
      id: "hardscaping",
      name: "Hardscaping (Patios, Walkways, Driveways)",
      description: "Installation of non-plant landscape features",
    },
    {
      id: "seasonal-cleanup",
      name: "Seasonal Clean-up (Spring/Autumn)",
      description: "Thorough cleaning and preparation of your garden for the season",
    },
    {
      id: "commercial",
      name: "Commercial Landscaping Maintenance",
      description: "Ongoing maintenance for business properties",
    },
    {
      id: "pest-control",
      name: "Pest & Disease Control (Garden)",
      description: "Treatment and prevention of garden pests and diseases",
    },
  ]

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      router.push("/home-services/landscaping/confirmation")
    }, 1500)
  }

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
        <span>Landscaping</span>
      </div>

      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="bg-emerald-100 text-emerald-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
          <Scissors className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-bold">Landscaping Services</h1>
      </div>

      {/* Hero Image */}
      <div className="relative h-[300px] w-full mb-8 rounded-lg overflow-hidden">
        <Image src="/placeholder.jpg" alt="Landscaping services" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Outdoor Space</h2>
          <p className="text-white text-lg max-w-md">
            Professional landscaping services for garden design, installation, and maintenance
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8 flex items-start">
        <Info className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
        <div>
          <p className="font-medium text-emerald-800 mb-1">Request a Customized Quote</p>
          <p className="text-emerald-700">
            Please fill out the form below with your landscaping needs. Our specialists will review your requirements
            and provide a tailored quote for your project.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Service Type Selection */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Select Landscaping Services</h2>
              <p className="text-muted-foreground mb-6">Choose one or more services that you're interested in:</p>
              <div className="space-y-4">
                {landscapingServices.map((service) => (
                  <div key={service.id} className="flex items-start space-x-3">
                    <Checkbox
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id)}
                    />
                    <div>
                      <Label htmlFor={service.id} className="font-medium">
                        {service.name}
                      </Label>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start space-x-3">
                  <Checkbox id="other" />
                  <div>
                    <Label htmlFor="other" className="font-medium">
                      Other (please specify)
                    </Label>
                    <Input className="mt-2" placeholder="Describe your specific landscaping need" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Property Details</h2>
              <div className="space-y-6">
                <div>
                  <Label className="mb-2 block">Property Type</Label>
                  <RadioGroup
                    value={propertyType}
                    onValueChange={setPropertyType}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="residential" id="residential" />
                      <Label htmlFor="residential">Residential Home</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="commercial" id="commercial" />
                      <Label htmlFor="commercial">Commercial Property</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="estate" id="estate" />
                      <Label htmlFor="estate">Estate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="apartment" id="apartment" />
                      <Label htmlFor="apartment">Apartment Complex</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="project-size" className="mb-2 block">
                    Project Size/Area
                  </Label>
                  <Select value={projectSize} onValueChange={setProjectSize}>
                    <SelectTrigger id="project-size">
                      <SelectValue placeholder="Select project size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small Garden (less than 100 sq m)</SelectItem>
                      <SelectItem value="medium">Medium Yard (100-500 sq m)</SelectItem>
                      <SelectItem value="large">Large Property (more than 500 sq m)</SelectItem>
                      <SelectItem value="custom">Custom Size (specify in description)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeline" className="mb-2 block">
                    Desired Timeline
                  </Label>
                  <Select value={timeline} onValueChange={setTimeline}>
                    <SelectTrigger id="timeline">
                      <SelectValue placeholder="Select desired timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately (Urgent)</SelectItem>
                      <SelectItem value="1-2-weeks">Within 1-2 Weeks</SelectItem>
                      <SelectItem value="flexible">Flexible (Next Month)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Description */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Project Description</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="description" className="mb-2 block">
                    Describe your vision, specific problems, or project goals
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide details about your landscaping project..."
                    className="min-h-[150px]"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Upload Photos (Optional)</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload images of your current outdoor space or inspirational designs
                    </p>
                    <Button variant="outline" size="sm">
                      Browse Files
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address" className="mb-2 block">
                    Service Address
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter your full address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Quote Request Summary</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-muted-foreground">Selected Services:</h3>
                    {selectedServices.length > 0 ? (
                      <ul className="list-disc list-inside mt-2">
                        {selectedServices.map((serviceId) => (
                          <li key={serviceId} className="font-medium">
                            {landscapingServices.find((s) => s.id === serviceId)?.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="italic">No services selected</p>
                    )}
                  </div>

                  {propertyType && (
                    <div>
                      <h3 className="font-medium text-muted-foreground">Property Type:</h3>
                      <p className="font-medium">
                        {propertyType === "residential"
                          ? "Residential Home"
                          : propertyType === "commercial"
                            ? "Commercial Property"
                            : propertyType === "estate"
                              ? "Estate"
                              : "Apartment Complex"}
                      </p>
                    </div>
                  )}

                  {projectSize && (
                    <div>
                      <h3 className="font-medium text-muted-foreground">Project Size:</h3>
                      <p className="font-medium">
                        {projectSize === "small"
                          ? "Small Garden (less than 100 sq m)"
                          : projectSize === "medium"
                            ? "Medium Yard (100-500 sq m)"
                            : projectSize === "large"
                              ? "Large Property (more than 500 sq m)"
                              : "Custom Size"}
                      </p>
                    </div>
                  )}

                  {timeline && (
                    <div>
                      <h3 className="font-medium text-muted-foreground">Timeline:</h3>
                      <p className="font-medium">
                        {timeline === "immediate"
                          ? "Immediately (Urgent)"
                          : timeline === "1-2-weeks"
                            ? "Within 1-2 Weeks"
                            : "Flexible (Next Month)"}
                      </p>
                    </div>
                  )}

                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      Our landscaping specialists will review your details and contact you with a customized quote and
                      potential site visit within 2-3 business days.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Button className="w-full" size="lg" onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Request Quote"}
                  </Button>
                  <Button variant="outline" className="w-full" type="button" disabled={isSubmitting}>
                    Clear Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
