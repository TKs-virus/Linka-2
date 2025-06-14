"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Star,
  AlertCircle,
  CheckCircle,
  ClockIcon,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function BookingsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("upcoming")
  const [ratingDialogOpen, setRatingDialogOpen] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<any>(null)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

  // Mock bookings data
  const upcomingBookings = [
    {
      id: "HS-1234",
      service: "Plumbing",
      task: "Leak Repair",
      date: "June 15, 2025",
      time: "10:00 AM - 12:00 PM",
      address: "123 Main St, Denver, CO 80202",
      status: "confirmed",
      provider: {
        name: "John Smith",
        rating: 4.8,
        image: "/placeholder.jpg",
      },
    },
    {
      id: "HS-5678",
      service: "Cleaning",
      task: "Deep Cleaning",
      date: "June 20, 2025",
      time: "1:00 PM - 4:00 PM",
      address: "456 Oak Ave, Denver, CO 80203",
      status: "pending",
      provider: null,
    },
  ]

  const pastBookings = [
    {
      id: "HS-9012",
      service: "Electrical",
      task: "Light Fixture Installation",
      date: "May 28, 2025",
      time: "2:00 PM - 4:00 PM",
      address: "789 Pine St, Denver, CO 80204",
      status: "completed",
      provider: {
        name: "Sarah Johnson",
        rating: 4.9,
        image: "/placeholder.jpg",
      },
      userRating: 5,
    },
    {
      id: "HS-3456",
      service: "Plumbing",
      task: "Drain Cleaning",
      date: "May 15, 2025",
      time: "9:00 AM - 11:00 AM",
      address: "123 Main St, Denver, CO 80202",
      status: "completed",
      provider: {
        name: "Mike Wilson",
        rating: 4.7,
        image: "/placeholder.jpg",
      },
      userRating: null,
    },
    {
      id: "HS-7890",
      service: "Handyman",
      task: "Furniture Assembly",
      date: "May 10, 2025",
      time: "3:00 PM - 5:00 PM",
      address: "456 Oak Ave, Denver, CO 80203",
      status: "cancelled",
      provider: null,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return (
          <div className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            <CheckCircle className="h-3 w-3 mr-1" />
            Confirmed
          </div>
        )
      case "pending":
        return (
          <div className="flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
            <ClockIcon className="h-3 w-3 mr-1" />
            Pending
          </div>
        )
      case "completed":
        return (
          <div className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            <CheckCircle className="h-3 w-3 mr-1" />
            Completed
          </div>
        )
      case "cancelled":
        return (
          <div className="flex items-center bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
            <AlertCircle className="h-3 w-3 mr-1" />
            Cancelled
          </div>
        )
      default:
        return null
    }
  }

  const handleRateService = (booking: any) => {
    setSelectedBooking(booking)
    setRatingDialogOpen(true)
  }

  const handleSubmitRating = () => {
    // In a real app, you would submit the rating to your backend
    setRatingDialogOpen(false)
    // Show success message or update the UI
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
        <span>My Bookings</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">My Service Bookings</h1>

      <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({upcomingBookings.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({pastBookings.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="mt-6">
          {upcomingBookings.length > 0 ? (
            <div className="space-y-6">
              {upcomingBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <h2 className="text-xl font-bold mr-3">
                              {booking.service} - {booking.task}
                            </h2>
                            {getStatusBadge(booking.status)}
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-5 w-5" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => router.push(`/home-services/bookings/${booking.id}`)}>
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>Reschedule</DropdownMenuItem>
                              <DropdownMenuItem>Cancel Booking</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-start">
                            <Calendar className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">Date</p>
                              <p className="font-medium">{booking.date}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">Time</p>
                              <p className="font-medium">{booking.time}</p>
                            </div>
                          </div>
                          <div className="flex items-start md:col-span-2">
                            <MapPin className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">Location</p>
                              <p className="font-medium">{booking.address}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center"
                            onClick={() => router.push(`/home-services/bookings/${booking.id}`)}
                          >
                            View Details
                          </Button>
                          {booking.provider && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center"
                              onClick={() => alert("Message feature would open here")}
                            >
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message Provider
                            </Button>
                          )}
                        </div>
                      </div>

                      {booking.provider && (
                        <div className="md:ml-6 mt-4 md:mt-0 flex flex-row md:flex-col items-center md:items-end">
                          <div className="text-center mr-4 md:mr-0 md:mb-2">
                            <p className="text-sm text-muted-foreground mb-1">Service Provider</p>
                            <p className="font-medium">{booking.provider.name}</p>
                            <div className="flex items-center justify-center mt-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                              <span>{booking.provider.rating}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">You don't have any upcoming bookings</p>
              <Button onClick={() => router.push("/home-services")}>Book a Service</Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="past" className="mt-6">
          {pastBookings.length > 0 ? (
            <div className="space-y-6">
              {pastBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <h2 className="text-xl font-bold mr-3">
                              {booking.service} - {booking.task}
                            </h2>
                            {getStatusBadge(booking.status)}
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-5 w-5" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => router.push(`/home-services/bookings/${booking.id}`)}>
                                View Details
                              </DropdownMenuItem>
                              {booking.status === "completed" && !booking.userRating && (
                                <Dropdown\
