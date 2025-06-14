"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ChevronRight, Filter, ChevronDown, ChevronUp, Search } from "lucide-react"
import CourseCard from "./course-card"

export default function CourseCatalogPage() {
  const router = useRouter()
  const [filtersVisible, setFiltersVisible] = useState(true)
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("popularity")

  // Mock course data
  const courses = [
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
    {
      id: 9,
      title: "Spanish for Beginners",
      instructor: "Isabella Garcia",
      image: "/placeholder.jpg",
      rating: 4.6,
      reviewCount: 312,
      price: 29.99,
      category: "Languages",
      level: "Beginner",
    },
    {
      id: 10,
      title: "Introduction to Physics",
      instructor: "Dr. Richard Brown",
      image: "/placeholder.jpg",
      rating: 4.7,
      reviewCount: 245,
      price: 44.99,
      category: "Science",
      level: "Beginner",
    },
    {
      id: 11,
      title: "Leadership and Management",
      instructor: "Jennifer Adams",
      image: "/placeholder.jpg",
      rating: 4.8,
      reviewCount: 432,
      price: 54.99,
      category: "Business",
      level: "Intermediate",
    },
    {
      id: 12,
      title: "Mobile App Development with React Native",
      instructor: "Andrew Kim",
      image: "/placeholder.jpg",
      rating: 4.9,
      reviewCount: 187,
      price: 59.99,
      category: "Technology",
      level: "Intermediate",
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
        <span>Course Catalog</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">Course Catalog</h1>

      {/* Search bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search for courses, topics, or instructors..." className="pl-10 py-6 text-lg" />
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
                {/* Subjects/Disciplines filter */}
                <div>
                  <h3 className="font-medium mb-3">Subjects</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="technology" />
                      <Label htmlFor="technology">Technology</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="business" />
                      <Label htmlFor="business">Business</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="arts" />
                      <Label htmlFor="arts">Arts & Humanities</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="science" />
                      <Label htmlFor="science">Science</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="languages" />
                      <Label htmlFor="languages">Languages</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="personal" />
                      <Label htmlFor="personal">Personal Development</Label>
                    </div>
                  </div>
                </div>

                {/* Course Level filter */}
                <div>
                  <h3 className="font-medium mb-3">Course Level</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="beginner" />
                      <Label htmlFor="beginner">Beginner</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="intermediate" />
                      <Label htmlFor="intermediate">Intermediate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="advanced" />
                      <Label htmlFor="advanced">Advanced</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="all-levels" />
                      <Label htmlFor="all-levels">All Levels</Label>
                    </div>
                  </div>
                </div>

                {/* Learning Format filter */}
                <div>
                  <h3 className="font-medium mb-3">Learning Format</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="self-paced" />
                      <Label htmlFor="self-paced">Self-Paced</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="instructor-led" />
                      <Label htmlFor="instructor-led">Instructor-Led</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="bootcamp" />
                      <Label htmlFor="bootcamp">Bootcamp</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certification" />
                      <Label htmlFor="certification">Certification</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="live-classes" />
                      <Label htmlFor="live-classes">Live Classes</Label>
                    </div>
                  </div>
                </div>

                {/* Price filter */}
                <div>
                  <h3 className="font-medium mb-3">Price</h3>
                  <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all">All Prices</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="free" id="free" />
                      <Label htmlFor="free">Free</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paid" id="paid" />
                      <Label htmlFor="paid">Paid</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="subscription" id="subscription" />
                      <Label htmlFor="subscription">Subscription Required</Label>
                    </div>
                  </RadioGroup>
                  <div className="mt-4">
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={100}
                      step={5}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Language filter */}
                <div>
                  <h3 className="font-medium mb-3">Language</h3>
                  <Select defaultValue="english">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                      <SelectItem value="japanese">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Instructor filter */}
                <div>
                  <h3 className="font-medium mb-3">Instructor</h3>
                  <Input placeholder="Search instructors..." />
                </div>

                {/* Duration filter */}
                <div>
                  <h3 className="font-medium mb-3">Duration</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="under-10" />
                      <Label htmlFor="under-10">Under 10 hours</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="10-50" />
                      <Label htmlFor="10-50">10-50 hours</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="over-50" />
                      <Label htmlFor="over-50">Over 50 hours</Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            )}
          </div>
        </div>

        {/* Course listing */}
        <div className="lg:w-3/4">
          <div className="mb-4 flex justify-between items-center">
            <div className="text-sm">
              <span className="font-medium">{courses.length} courses</span> available
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button className="mx-1">2</Button>
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
