"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, DollarSign, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export default function RepairMaintenanceServicePage() {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([])
  const [mobileService, setMobileService] = useState(false)

  const issueCategories = [
    {
      category: "Engine",
      icon: "🔧",
      issues: [
        { id: "engine-light", name: "Engine Light On", estimate: "$80 - $200", common: true },
        { id: "overheating", name: "Overheating", estimate: "$150 - $500", common: true },
        { id: "rough-idling", name: "Rough Idling", estimate: "$100 - $300", common: false },
        { id: "oil-leak", name: "Oil Leak", estimate: "$120 - $400", common: true },
      ],
    },
    {
      category: "Brakes",
      icon: "🛑",
      issues: [
        { id: "squealing-brakes", name: "Squealing/Grinding Brakes", estimate: "$180 - $450", common: true },
        { id: "spongy-pedal", name: "Spongy Brake Pedal", estimate: "$100 - $250", common: false },
        { id: "abs-light", name: "ABS Light On", estimate: "$150 - $400", common: false },
      ],
    },
    {
      category: "Suspension & Steering",
      icon: "🚗",
      issues: [
        { id: "bumpy-ride", name: "Bumpy Ride", estimate: "$200 - $600", common: true },
        { id: "steering-vibration", name: "Steering Wheel Vibration", estimate: "$100 - $300", common: true },
        { id: "car-pulls", name: "Car Pulls to Side", estimate: "$80 - $250", common: false },
      ],
    },
    {
      category: "Routine Maintenance",
      icon: "🔧",
      issues: [
        { id: "oil-change", name: "Oil Change", estimate: "$30 - $80", common: true },
        { id: "tire-rotation", name: "Tire Rotation", estimate: "$50 - $100", common: true },
        { id: "brake-fluid-flush", name: "Brake Fluid Flush", estimate: "$80 - $150", common: false },
      ],
    },
  ]

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const handleIssueChange = (issueId: string, checked: boolean) => {
    if (checked) {
      setSelectedIssues([...selectedIssues, issueId])
    } else {
      setSelectedIssues(selectedIssues.filter((id) => id !== issueId))
    }
  }

  const getSelectedIssueEstimates = () => {
    const estimates: string[] = []
    selectedIssues.forEach((issueId) => {
      issueCategories.forEach((category) => {
        const issue = category.issues.find((i) => i.id === issueId)
        if (issue) {
          estimates.push(issue.estimate)
        }
      })
    })
    return estimates
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/vehiclestore" className="hover:text-blue-600">
              VehicleStore
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Repair & Maintenance</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">Repair & Maintenance Services</h1>
              <p className="text-gray-600 text-lg">
                Describe your vehicle's issues and book an appointment with our certified technicians.
              </p>
            </div>

            {/* Vehicle Information */}
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
                <CardDescription>Help us prepare for your service appointment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <Label>Make</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select make" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                        <SelectItem value="chevrolet">Chevrolet</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                        <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Model</Label>
                    <Input placeholder="Enter model" />
                  </div>
                  <div>
                    <Label>Year</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 25 }, (_, i) => 2024 - i).map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>VIN (Optional)</Label>
                    <Input placeholder="Vehicle ID Number" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem Description */}
            <Card>
              <CardHeader>
                <CardTitle>What's the Problem?</CardTitle>
                <CardDescription>Describe your vehicle's symptoms in detail</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Please describe what you're experiencing with your vehicle. Include details like when the problem occurs, any sounds, smells, or unusual behavior..."
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* Issue Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Select Related Issues</CardTitle>
                <CardDescription>Choose all issues that match your vehicle's symptoms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {issueCategories.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <span className="text-2xl mr-2">{category.icon}</span>
                      {category.category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.issues.map((issue) => (
                        <div
                          key={issue.id}
                          className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50"
                        >
                          <Checkbox
                            id={issue.id}
                            checked={selectedIssues.includes(issue.id)}
                            onCheckedChange={(checked) => handleIssueChange(issue.id, checked as boolean)}
                          />
                          <div className="flex-1">
                            <Label htmlFor={issue.id} className="font-medium cursor-pointer flex items-center">
                              {issue.name}
                              {issue.common && (
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  Common
                                </Badge>
                              )}
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">Est. {issue.estimate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Appointment Scheduling */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Appointment
                </CardTitle>
                <CardDescription>Choose your preferred date and time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base font-medium">Select Date</Label>
                    <Input type="date" className="mt-2" />
                  </div>
                  <div>
                    <Label className="text-base font-medium">Select Time</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Checkbox id="mobile-service" checked={mobileService} onCheckedChange={setMobileService} />
                    <div>
                      <Label htmlFor="mobile-service" className="font-medium cursor-pointer">
                        Mobile Service
                      </Label>
                      <p className="text-sm text-gray-600">We come to your location (+$50 service fee)</p>
                    </div>
                  </div>

                  {mobileService && (
                    <div>
                      <Label>Service Address</Label>
                      <Input placeholder="Enter your address for mobile service" className="mt-1" />
                    </div>
                  )}

                  {!mobileService && (
                    <div>
                      <Label>Workshop Location</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select workshop location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="downtown">Downtown Workshop - 123 Main St</SelectItem>
                          <SelectItem value="northside">Northside Location - 456 Oak Ave</SelectItem>
                          <SelectItem value="southside">Southside Center - 789 Pine Rd</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>We'll use this to confirm your appointment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name *</Label>
                    <Input placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <Label>Phone Number *</Label>
                    <Input placeholder="Enter your phone number" required />
                  </div>
                </div>
                <div>
                  <Label>Email Address *</Label>
                  <Input type="email" placeholder="Enter your email address" required />
                </div>
                <div>
                  <Label>Special Instructions</Label>
                  <Textarea
                    placeholder="Any specific requests, preferred contact method, or additional details..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Appointment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mobileService ? (
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Mobile Service (+$50)</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Workshop Service</span>
                  </div>
                )}

                {selectedIssues.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Selected Issues:</h4>
                    <div className="space-y-1">
                      {selectedIssues.map((issueId) => {
                        const issue = issueCategories.flatMap((cat) => cat.issues).find((i) => i.id === issueId)
                        return issue ? (
                          <div key={issueId} className="text-sm text-gray-600">
                            • {issue.name}
                          </div>
                        ) : null
                      })}
                    </div>
                  </div>
                )}

                {getSelectedIssueEstimates().length > 0 && (
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Estimated Costs
                    </h4>
                    <div className="space-y-1">
                      {getSelectedIssueEstimates()
                        .slice(0, 3)
                        .map((estimate, idx) => (
                          <div key={idx} className="text-sm text-blue-800">
                            {estimate}
                          </div>
                        ))}
                    </div>
                    <p className="text-xs text-blue-700 mt-2">
                      *Estimates only. Final cost determined after diagnostic.
                    </p>
                  </div>
                )}

                <Button className="w-full" size="lg">
                  Request Appointment
                </Button>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">What's Next?</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Our service team will contact you to confirm appointment details.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
