"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import {
  CalendarIcon,
  Star,
  Video,
  Phone,
  MessageSquare,
  ArrowLeft,
  Award,
  GraduationCap,
  Languages,
} from "lucide-react"

interface DoctorProfilePageProps {
  doctorId: string
}

export default function DoctorProfilePage({ doctorId }: DoctorProfilePageProps) {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [appointmentType, setAppointmentType] = useState("video")

  // Mock doctor data (in a real app, you would fetch this based on the doctorId)
  const doctor = {
    id: Number.parseInt(doctorId),
    name: "Dr. Sarah Johnson",
    specialty: "General Practice",
    image: "/placeholder.jpg",
    rating: 4.9,
    reviewCount: 124,
    experience: "10+ years",
    fee: 75,
    bio: "Dr. Sarah Johnson is a board-certified general practitioner with over 10 years of experience in family medicine. She specializes in preventive care, chronic disease management, and women's health. Dr. Johnson takes a holistic approach to healthcare, focusing on the whole person rather than just treating symptoms.",
    education: [
      { degree: "Doctor of Medicine", institution: "Harvard Medical School", year: "2010" },
      { degree: "Bachelor of Science in Biology", institution: "Stanford University", year: "2006" },
    ],
    certifications: [
      "American Board of Family Medicine",
      "Advanced Cardiac Life Support (ACLS)",
      "Basic Life Support (BLS)",
    ],
    languages: ["English", "Spanish"],
    availableSlots: {
      today: ["10:00 AM", "11:30 AM", "2:15 PM", "4:00 PM"],
      tomorrow: ["9:15 AM", "12:00 PM", "3:30 PM", "5:45 PM"],
    },
    reviews: [
      {
        id: 1,
        name: "John D.",
        rating: 5,
        date: "May 15, 2025",
        comment:
          "Dr. Johnson was very thorough and took the time to listen to all my concerns. She explained everything clearly and made me feel at ease.",
      },
      {
        id: 2,
        name: "Maria S.",
        rating: 5,
        date: "May 10, 2025",
        comment:
          "Excellent doctor! Very knowledgeable and compassionate. The video consultation was smooth and convenient.",
      },
      {
        id: 3,
        name: "Robert T.",
        rating: 4,
        date: "May 3, 2025",
        comment: "Good experience overall. Dr. Johnson provided helpful advice and followed up after our consultation.",
      },
    ],
  }

  const handleBookAppointment = (timeSlot: string) => {
    router.push(`/healthcare/book-appointment?doctor=${doctorId}&time=${timeSlot}&type=${appointmentType}`)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Search Results
      </Button>

      <div className="bg-card rounded-lg shadow-sm overflow-hidden">
        {/* Doctor header */}
        <div className="p-6 border-b">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex flex-col items-center md:items-start mb-6 md:mb-0">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
              </div>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium mr-1">{doctor.rating}</span>
                <span className="text-sm text-muted-foreground">({doctor.reviewCount} reviews)</span>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{doctor.specialty}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 mr-1" />
                  {doctor.experience} experience
                </div>
                <div className="flex items-center text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  Board Certified
                </div>
                <div className="flex items-center text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <Languages className="h-4 w-4 mr-1" />
                  {doctor.languages.join(", ")}
                </div>
              </div>
              <p className="text-lg font-bold text-blue-600">${doctor.fee} per consultation</p>
            </div>
          </div>
        </div>

        {/* Doctor content */}
        <div className="p-6">
          <Tabs defaultValue="about">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="education">Education & Certifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-4">
              <h2 className="text-xl font-bold">About Dr. {doctor.name.split(" ")[1]}</h2>
              <p>{doctor.bio}</p>
            </TabsContent>
            <TabsContent value="education" className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <ul className="space-y-4">
                  {doctor.education.map((edu, index) => (
                    <li key={index} className="flex">
                      <GraduationCap className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-muted-foreground">
                          {edu.institution}, {edu.year}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Certifications</h2>
                <ul className="space-y-2">
                  {doctor.certifications.map((cert, index) => (
                    <li key={index} className="flex">
                      <Award className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">{doctor.rating}</span>
                </div>
                <div>
                  <div className="flex mb-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(doctor.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground">Based on {doctor.reviewCount} reviews</p>
                </div>
              </div>
              <div className="space-y-4">
                {doctor.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{review.name}</span>
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

        {/* Booking section */}
        <div className="p-6 bg-gray-50 border-t">
          <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-3">1. Select Consultation Type</h3>
              <div className="space-y-2">
                <Button
                  variant={appointmentType === "video" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setAppointmentType("video")}
                >
                  <Video className="h-4 w-4 mr-2" />
                  Video Consultation
                </Button>
                <Button
                  variant={appointmentType === "phone" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setAppointmentType("phone")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Consultation
                </Button>
                <Button
                  variant={appointmentType === "chat" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setAppointmentType("chat")}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat Consultation
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">2. Select Date</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <h3 className="font-medium mb-3">3. Select Time Slot</h3>
              <div className="grid grid-cols-2 gap-2">
                {(selectedDate
                  ? format(selectedDate, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")
                    ? doctor.availableSlots.today
                    : doctor.availableSlots.tomorrow
                  : doctor.availableSlots.today
                ).map((slot) => (
                  <Button key={slot} variant="outline" size="sm" onClick={() => handleBookAppointment(slot)}>
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button size="lg" onClick={() => handleBookAppointment(doctor.availableSlots.today[0])}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
