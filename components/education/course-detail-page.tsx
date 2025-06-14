"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Star,
  Clock,
  Award,
  FileText,
  Globe,
  Users,
  Heart,
  ShoppingCart,
  Play,
  CheckCircle,
} from "lucide-react"

interface CourseDetailPageProps {
  courseId: string
}

export default function CourseDetailPage({ courseId }: CourseDetailPageProps) {
  const router = useRouter()
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Mock course data (in a real app, you would fetch this based on the courseId)
  const course = {
    id: Number.parseInt(courseId),
    title: "Introduction to Machine Learning",
    instructor: "Dr. Sarah Johnson",
    instructorTitle: "PhD in Computer Science, Senior Data Scientist",
    instructorImage: "/placeholder.jpg",
    instructorBio:
      "Dr. Sarah Johnson is a Senior Data Scientist with over 10 years of experience in machine learning and artificial intelligence. She holds a PhD in Computer Science from MIT and has worked at leading tech companies including Google and Microsoft. Dr. Johnson has published numerous research papers on machine learning algorithms and is passionate about making complex technical concepts accessible to beginners.",
    image: "/placeholder.jpg",
    rating: 4.8,
    reviewCount: 1245,
    price: 49.99,
    category: "Technology",
    level: "Beginner",
    description:
      "This comprehensive course introduces you to the exciting world of machine learning. You'll learn fundamental concepts, algorithms, and practical applications that will help you build a strong foundation in this rapidly growing field. Whether you're a complete beginner or have some programming experience, this course will equip you with the skills needed to start implementing machine learning solutions.",
    learningOutcomes: [
      "Understand the core concepts and terminology of machine learning",
      "Implement common machine learning algorithms from scratch",
      "Use Python libraries like NumPy, Pandas, and Scikit-learn for data analysis and modeling",
      "Apply machine learning techniques to solve real-world problems",
      "Evaluate and improve model performance using appropriate metrics",
      "Build a portfolio of machine learning projects",
    ],
    prerequisites: [
      "Basic programming knowledge (preferably Python)",
      "Fundamental understanding of mathematics (algebra and statistics)",
      "No prior machine learning experience required",
    ],
    duration: "30 hours",
    lectures: 42,
    students: 12500,
    lastUpdated: "May 2025",
    language: "English",
    curriculum: [
      {
        title: "Introduction to Machine Learning",
        lectures: [
          { title: "What is Machine Learning?", duration: "15:30" },
          { title: "Types of Machine Learning", duration: "20:45" },
          { title: "Machine Learning Applications", duration: "18:20" },
          { title: "Setting Up Your Development Environment", duration: "25:10" },
        ],
      },
      {
        title: "Data Preprocessing",
        lectures: [
          { title: "Data Collection and Cleaning", duration: "22:15" },
          { title: "Feature Scaling and Normalization", duration: "19:40" },
          { title: "Handling Missing Data", duration: "17:30" },
          { title: "Feature Engineering", duration: "28:55" },
        ],
      },
      {
        title: "Supervised Learning: Regression",
        lectures: [
          { title: "Linear Regression", duration: "35:20" },
          { title: "Polynomial Regression", duration: "27:45" },
          { title: "Regularization Techniques", duration: "24:10" },
          { title: "Regression Metrics and Evaluation", duration: "22:30" },
        ],
      },
      {
        title: "Supervised Learning: Classification",
        lectures: [
          { title: "Logistic Regression", duration: "30:15" },
          { title: "Decision Trees", duration: "32:40" },
          { title: "Support Vector Machines", duration: "38:20" },
          { title: "K-Nearest Neighbors", duration: "25:55" },
        ],
      },
      {
        title: "Unsupervised Learning",
        lectures: [
          { title: "K-Means Clustering", duration: "28:30" },
          { title: "Hierarchical Clustering", duration: "26:15" },
          { title: "Principal Component Analysis", duration: "34:20" },
          { title: "Dimensionality Reduction", duration: "29:45" },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        name: "John D.",
        rating: 5,
        date: "May 15, 2025",
        comment:
          "Excellent course! Dr. Johnson explains complex concepts in a way that's easy to understand. The hands-on projects really helped solidify my understanding.",
      },
      {
        id: 2,
        name: "Maria S.",
        rating: 5,
        date: "May 10, 2025",
        comment:
          "I've tried several machine learning courses, and this is by far the best. The curriculum is well-structured, and the instructor is incredibly knowledgeable.",
      },
      {
        id: 3,
        name: "Robert T.",
        rating: 4,
        date: "May 3, 2025",
        comment:
          "Great introduction to machine learning. I would have liked more advanced topics, but for beginners, this course is perfect.",
      },
    ],
  }

  const handleEnrollNow = () => {
    // In a real app, you would handle enrollment logic
    router.push(`/education/checkout?course=${courseId}`)
  }

  const handleAddToCart = () => {
    // In a real app, you would add the course to the cart
    alert("Course added to cart!")
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // In a real app, you would update the wishlist in the backend
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/education/courses" className="text-muted-foreground hover:text-foreground">
          Course Catalog
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="truncate max-w-[200px]">{course.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Content - Left Column */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg mb-4">{course.description}</p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-blue-600">{course.category}</Badge>
            <Badge variant="outline">{course.level}</Badge>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium mr-1">{course.rating}</span>
              <span className="text-sm text-muted-foreground">({course.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <FileText className="h-4 w-4 mr-1" />
              {course.lectures} lectures
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Globe className="h-4 w-4 mr-1" />
              {course.language}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              {course.students.toLocaleString()} students
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
              <Image
                src={course.instructorImage || "/placeholder.svg"}
                alt={course.instructor}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium">Created by {course.instructor}</div>
              <div className="text-sm text-muted-foreground">Last updated: {course.lastUpdated}</div>
            </div>
          </div>

          {/* Video Preview */}
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button size="lg" className="rounded-full w-16 h-16 flex items-center justify-center">
                <Play className="h-8 w-8" />
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
                <ul className="space-y-2">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-blue-600 shrink-0" />
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Course Content</h2>
              <div className="text-sm text-muted-foreground mb-4">
                {course.lectures} lectures • {course.duration} total length
              </div>
              <Accordion type="single" collapsible className="w-full">
                {course.curriculum.map((section, index) => (
                  <AccordionItem key={index} value={`section-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex justify-between w-full pr-4">
                        <span className="font-medium">{section.title}</span>
                        <span className="text-sm text-muted-foreground">{section.lectures.length} lectures</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {section.lectures.map((lecture, lectureIndex) => (
                          <li key={lectureIndex} className="flex justify-between py-2 px-1 hover:bg-gray-50 rounded">
                            <div className="flex items-center">
                              <Play className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{lecture.title}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{lecture.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="instructor">
              <div className="flex items-center mb-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mr-4">
                  <Image
                    src={course.instructorImage || "/placeholder.svg"}
                    alt={course.instructor}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{course.instructor}</h2>
                  <p className="text-muted-foreground">{course.instructorTitle}</p>
                </div>
              </div>
              <p className="mb-4">{course.instructorBio}</p>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">{course.rating}</span>
                </div>
                <div>
                  <div className="flex mb-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground">Based on {course.reviewCount} reviews</p>
                </div>
              </div>
              <div className="space-y-6">
                {course.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
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

        {/* Course Sidebar - Right Column */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden sticky top-24">
            <div className="relative h-48">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-12 h-12 flex items-center justify-center">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-4">${course.price}</div>
              <Button className="w-full mb-3" size="lg" onClick={handleEnrollNow}>
                Enroll Now
              </Button>
              <Button variant="outline" className="w-full mb-6" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="ghost" className="w-full mb-6" onClick={handleToggleWishlist}>
                <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
              </Button>
              <div className="space-y-4">
                <h3 className="font-bold">This course includes:</h3>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{course.duration} of on-demand video</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{course.lectures} lectures</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{course.language}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
