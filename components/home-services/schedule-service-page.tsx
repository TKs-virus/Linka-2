"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, CalendarIcon, MapPin, Upload, CheckCircle } from "lucide-react"
import { format } from "date-fns"

export default function ScheduleServicePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const service = searchParams.get("service") || ""
  const task = searchParams.get("task") || ""
  const propertyType = searchParams.get("property") || "residential"

  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState("")
  const [frequency, setFrequency] = useState("one-time")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Format service and task names for display
  const getServiceName = () => {
    return service.charAt(0).toUpperCase() + service.slice(1)
  }

  const getTaskName = () => {
    switch (task) {
      case "leak-repair":
        return "Leak Repair"
      case "drain-cleaning":
        return "Drain Cleaning"
      case "water-heater":
        return "Water Heater Installation/Repair"
      case "toilet-repair":
        return "Toilet Repair"
      case "pipe-replacement":
        return "Pipe Replacement"
      case "fixture-installation":
        return "Fixture Installation"
      case "custom":
        return "Custom Request"
      default:
        return "Not specified"
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      router.push("/home-services/confirmation")
    }, 1500)
  }

  // Generate time slots
  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
  ]

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
        <Link href={`/home-services/${service}`} className="text-muted-foreground hover:text-foreground">
          {getServiceName()} Services
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span>Schedule Service</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">Schedule Your Service</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Service Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Service Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-muted-foreground">Service Type</Label>
                    <p className="font-medium">{getServiceName()} Services</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Specific Task</Label>
                    <p className="font-medium">{getTaskName()}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Property Type</Label>
                    <p className="font-medium">{propertyType === "residential" ? "Residential" : "Commercial"}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Date and Time Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Date and Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label className="mb-2 block">Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="mb-2 block">Preferred Time</Label>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Frequency Selection (for recurring services) */}
                {service === "cleaning" && (
                  <div>
                    <Label className="mb-2 block">Service Frequency</Label>
                    <RadioGroup value={frequency} onValueChange={setFrequency} className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time">One-time Service</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekly" id="weekly" />
                        <Label htmlFor="weekly">Weekly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bi-weekly" id="bi-weekly" />
                        <Label htmlFor="bi-weekly">Bi-weekly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Location and Details */}
          <Card>
            <CardHeader>
              <CardTitle>Service Location & Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="address" className="mb-2 block">
                    Service Address
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="address"
                      placeholder="Enter your full address"
                      className="pl-10"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="mb-2 block">
                    Describe your issue or service needs
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide details about your service needs..."
                    className="min-h-[120px]"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Upload Photos (Optional)</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
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
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
              <CardHeader>
                <CardTitle>Service Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="font-medium">{getServiceName()} Services</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Task:</span>
                    <span className="font-medium">{getTaskName()}</span>
                  </div>
                  {date && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">{format(date, "PPP")}</span>
                    </div>
                  )}
                  {timeSlot && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{timeSlot}</span>
                    </div>
                  )}
                  {service === "cleaning" && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frequency:</span>
                      <span className="font-medium">
                        {frequency === "one-time"
                          ? "One-time Service"
                          : frequency === "weekly"
                            ? "Weekly"
                            : frequency === "bi-weekly"
                              ? "Bi-weekly"
                              : "Monthly"}
                      </span>
                    </div>
                  )}
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Estimated Price:</span>
                      <span className="text-xl font-bold">
                        {task === "leak-repair"
                          ? "$80 - $150"
                          : task === "drain-cleaning"
                            ? "$100 - $200"
                            : task === "water-heater"
                              ? "$150 - $500"
                              : task === "toilet-repair"
                                ? "$90 - $180"
                                : task === "pipe-replacement"
                                  ? "$200 - $600"
                                  : task === "fixture-installation"
                                    ? "$120 - $300"
                                    : "To be determined"}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Final price may vary based on the complexity of the job and additional materials required.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Button className="w-full" size="lg" onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Book Now"}
                  </Button>
                  <Button variant="outline" className="w-full" disabled={isSubmitting}>
                    Request Quote Instead
                  </Button>
                </div>

                <div className="mt-6 flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    By booking, you agree to our Terms of Service and Privacy Policy. You can cancel or reschedule up to
                    24 hours before your appointment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
