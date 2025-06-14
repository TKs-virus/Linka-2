"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import CourseCard from "./course-card"
import TestimonialCard from "./testimonial-card"

export default function EducationHomePage() {
  const router = useRouter()

  const trendingCourses = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      instructor: "Dr. Sarah Johnson",
      image: "/placeholder.jpg",
      rating: 4.8,
      reviewCount: 1245,
      price: 49.99,
      category: "Technology",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      instructor: "Michael Chen",
      image: "/placeholder.jpg",
      rating: 4.7,
      reviewCount: 982,
      price: 39.99,
      category: "Business",
      level: "Beginner",
    },
    {
      id: 3,
      title: "Advanced Web Development",
      instructor: "Emily Rodriguez",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 756,
      price: 59.99,
      category: "Technology",
      level: "Advanced",
    },
    {
      id: 4,
      title: "Financial Planning and Analysis",
      instructor: "James Wilson",
      image: "/placeholder.jpg",
      rating: 4.6,
      reviewCount: 543,
      price: 44.99,
      category: "Business",
      level: "Intermediate",
    },
  ]

  const newReleases = [
    {
      id: 5,
      title: "UX/UI Design Principles",
      instructor: "Sophia Lee",
      image: "/placeholder.jpg",
      rating: 4.5,
      reviewCount: 128,
      price: 54.99,
      category: "Design",
      level: "Intermediate",
    },
    {
      id: 6,
      title: "Python for Data Science",
      instructor: "David Thompson",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 215,
      price: 64.99,
      category: "Technology",
      level: "Intermediate",
    },
    {
      id: 7,
      title: "Creative Writing Workshop",
      instructor: "Olivia Martinez",
      image: "/placeholder.jpg",
      rating: 4.7,
      reviewCount: 176,
      price: 34.99,
      category: "Arts & Humanities",
      level: "All Levels",
    },
    {
      id: 8,
      title: "Public Speaking Mastery",
      instructor: "Robert Johnson",
      image: "/placeholder.jpg",
      rating: 4.8,
      reviewCount: 198,
      price: 49.99,
      category: "Personal Development",
      level: "All Levels",
    },
  ]

  const popularSubjects = [
    {
      id: 1,
      name: "Technology",
      image: "/placeholder.jpg",
      courseCount: 1250,
    },
    {
      id: 2,
      name: "Business",
      image: "/placeholder.jpg",
      courseCount: 980,
    },
    {
      id: 3,
      name: "Arts & Humanities",
      image: "/placeholder.jpg",
      courseCount: 750,
    },
    {
      id: 4,
      name: "Science",
      image: "/placeholder.jpg",
      courseCount: 620,
    },
    {
      id: 5,
      name: "Languages",
      image: "/placeholder.jpg",
      courseCount: 480,
    },
    {
      id: 6,
      name: "Personal Development",
      image: "/placeholder.jpg",
      courseCount: 390,
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "John D.",
      role: "Software Developer",
      image: "/placeholder.jpg",
      text: "The courses on this platform completely transformed my career. I went from knowing nothing about programming to landing a job as a software developer in just 6 months.",
      course: "Web Development Bootcamp",
    },
    {
      id: 2,
      name: "Maria S.",
      role: "Marketing Manager",
      image: "/placeholder.jpg",
      text: "The digital marketing courses helped me stay ahead of industry trends and implement effective strategies that increased our company's online presence by 200%.",
      course: "Digital Marketing Fundamentals",
    },
    {
      id: 3,
      name: "Alex T.",
      role: "Data Scientist",
      image: "/placeholder.jpg",
      text: "The machine learning course was incredibly comprehensive and practical. The projects helped me build a strong portfolio that impressed my current employer.",
      course: "Introduction to Machine Learning",
    },
  ]

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image src="/placeholder.jpg" alt="Education platform" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">Expand Your Knowledge</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Discover thousands of courses taught by expert instructors
          </p>
          <div className="w-full max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for courses, topics, or instructors..."
              className="pl-10 py-6 text-lg bg-white/90 text-black"
            />
          </div>
          <Button
            size="lg"
            className="mt-6 bg-blue-600 hover:bg-blue-700"
            onClick={() => router.push("/education/courses")}
          >
            Browse All Courses
          </Button>
        </div>
      </div>

      {/* Trending Courses Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Trending Courses</h2>
          <Button variant="outline" onClick={() => router.push("/education/courses?sort=trending")}>
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Subjects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularSubjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => router.push(`/education/courses?subject=${subject.id}`)}
              >
                <div className="relative h-32">
                  <Image src={subject.image || "/placeholder.svg"} alt={subject.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{subject.name}</h3>
                  <p className="text-sm text-muted-foreground">{subject.courseCount} courses</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Releases Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">New Releases</h2>
          <Button variant="outline" onClick={() => router.push("/education/courses?sort=newest")}>
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newReleases.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Start Learning Today</h2>
              <p className="text-lg opacity-90 mb-4 md:mb-0">
                Join thousands of students and expand your knowledge with our expert-led courses
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => router.push("/education/courses")}
            >
              Browse All Courses
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
