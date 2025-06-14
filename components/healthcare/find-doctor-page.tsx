"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Search, CalendarIcon, Star, Video, Phone, MessageSquare, Filter, ChevronDown, ChevronUp } from "lucide-react"

export default function FindDoctorPage() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [filtersVisible, setFiltersVisible] = useState(true)
  const [appointmentType, setAppointmentType] = useState("video")

  // Mock doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Practice",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 124,
      experience: "10+ years",
      fee: 75,
      availableSlots: ["10:00 AM", "11:30 AM", "2:15 PM", "4:00 PM"],
      languages: ["English", "Spanish"],
      gender: "Female",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      image: "/placeholder.jpg",
      rating: 4.8,
      reviewCount: 98,
      experience: "8+ years",
      fee: 90,
      availableSlots: ["9:30 AM", "1:00 PM", "3:45 PM"],
      languages: ["English", "Mandarin"],
      gender: "Male",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 156,
      experience: "12+ years",
      fee: 85,
      availableSlots: ["11:00 AM", "2:30 PM", "5:15 PM"],
      languages: ["English", "Spanish"],
      gender: "Female",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Mental Health",
      image: "/placeholder.jpg",
      rating: 4.7,
      reviewCount: 87,
      experience: "15+ years",
      fee: 100,
      availableSlots: ["9:00 AM", "12:45 PM", "4:30 PM"],
      languages: ["English"],
      gender: "Male",
    },
    {
      id: 5,
      name: "Dr. Aisha Patel",
      specialty: "Cardiology",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 132,
      experience: "14+ years",
      fee: 120,
      availableSlots: ["10:30 AM", "1:15 PM", "3:00 PM"],
      languages: ["English", "Hindi", "Gujarati"],
      gender: "Female",
    },
  ]

  const handleViewProfile = (doctorId: number) => {
    router.push(`/healthcare/doctor/${doctorId}`)
  }

  const handleBookAppointment = (doctorId: number, timeSlot: string) => {
    router.push(`/healthcare/book-appointment?doctor=${doctorId}&time=${timeSlot}`)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find a Doctor</h1>

      {/* Search bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search by doctor name, specialty, or condition..." className="pl-10 py-6 text-lg" />
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
                {/* Specialty filter */}
                <div>
                  <Label htmlFor="specialty" className="font-medium mb-2 block">
                    Specialty
                  </Label>
                  <Select>
                    <SelectTrigger id="specialty">
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Practice</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="mental-health">Mental Health</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="diabetes">Diabetes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Gender filter */}
                <div>
                  <Label htmlFor="gender" className="font-medium mb-2 block">
                    Gender
                  </Label>
                  <Select>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Any gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any gender</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Language filter */}
                <div>
                  <Label htmlFor="language" className="font-medium mb-2 block">
                    Language
                  </Label>
                  <Select>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="mandarin">Mandarin</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Appointment type filter */}
                <div>
                  <Label className="font-medium mb-2 block">Appointment Type</Label>
                  <RadioGroup
                    value={appointmentType}
                    onValueChange={setAppointmentType}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="video" id="video" />
                      <Label htmlFor="video" className="flex items-center">
                        <Video className="h-4 w-4 mr-2" />
                        Video Consultation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone" />
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Phone Consultation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="chat" id="chat" />
                      <Label htmlFor="chat" className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Chat Consultation
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Availability filter */}
                <div>
                  <Label className="font-medium mb-2 block">Availability</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Insurance filter */}
                <div>
                  <Label htmlFor="insurance" className="font-medium mb-2 block">
                    Insurance Provider
                  </Label>
                  <Select>
                    <SelectTrigger id="insurance">
                      <SelectValue placeholder="Select provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aetna">Aetna</SelectItem>
                      <SelectItem value="bluecross">Blue Cross Blue Shield</SelectItem>
                      <SelectItem value="cigna">Cigna</SelectItem>
                      <SelectItem value="humana">Humana</SelectItem>
                      <SelectItem value="medicare">Medicare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            )}
          </div>
        </div>

        {/* Doctor listing */}
        <div className="lg:w-3/4">
          <div className="mb-4 flex justify-between items-center">
            <div className="text-sm">
              <span className="font-medium">{doctors.length} doctors</span> available
            </div>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    {/* Doctor image and basic info */}
                    <div className="md:w-1/4 flex flex-col items-center md:items-start mb-4 md:mb-0">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3">
                        <Image
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
                      <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium mr-1">{doctor.rating}</span>
                        <span className="text-sm text-muted-foreground">({doctor.reviewCount} reviews)</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                    </div>

                    {/* Doctor details and available slots */}
                    <div className="md:w-3/4 md:pl-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          ${doctor.fee} per consultation
                        </div>
                        <div className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                          Languages: {doctor.languages.join(", ")}
                        </div>
                        <div className="text-sm bg-gray-100 px-2 py-1 rounded-full">{doctor.gender}</div>
                      </div>

                      <h4 className="font-medium mb-3">Available Slots Today</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {doctor.availableSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant="outline"
                            size="sm"
                            onClick={() => handleBookAppointment(doctor.id, slot)}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 mt-4">
                        <Button variant="outline" onClick={() => handleViewProfile(doctor.id)}>
                          View Profile
                        </Button>
                        <Button onClick={() => handleBookAppointment(doctor.id, doctor.availableSlots[0])}>
                          <Video className="h-4 w-4 mr-2" />
                          Book Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
