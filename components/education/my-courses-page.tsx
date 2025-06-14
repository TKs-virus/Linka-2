"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Bell, BookOpen, Award, FileText, Clock, Play } from "lucide-react"

export default function MyCoursesPage() {
  const router = useRouter()

  // Mock enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      instructor: "Dr. Sarah Johnson",
      image: "/placeholder.jpg",
      progress: 65,
      lastAccessed: "2 days ago",
      totalLectures: 42,
      completedLectures: 27,
      nextLecture: "Support Vector Machines",
      estimatedTimeLeft: "5 hours",
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      instructor: "Michael Chen",
      image: "/placeholder.jpg",
      progress: 30,
      lastAccessed: "1 week ago",
      totalLectures: 38,
      completedLectures: 11,
      nextLecture: "Social Media Marketing Strategies",
      estimatedTimeLeft: "12 hours",
    },
    {
      id: 6,
      title: "Python for Data Science",
      instructor: "David Thompson",
      image: "/placeholder.jpg",
      progress: 10,
      lastAccessed: "3 days ago",
      totalLectures: 45,
      completedLectures: 4,
      nextLecture: "NumPy Fundamentals",
      estimatedTimeLeft: "18 hours",
    },
  ]

  // Mock notifications
  const notifications = [
    {
      id: 1,
      title: "New lecture added",
      course: "Introduction to Machine Learning",
      message: "A new lecture on 'Advanced Neural Networks' has been added to the course.",
      date: "Today",
      read: false,
    },
    {
      id: 2,
      title: "Assignment due soon",
      course: "Digital Marketing Fundamentals",
      message: "Your assignment 'Market Analysis Report' is due in 2 days.",
      date: "Yesterday",
      read: true,
    },
    {
      id: 3,
      title: "Instructor announcement",
      course: "Python for Data Science",
      message: "Live Q&A session scheduled for next Friday at 3 PM EST.",
      date: "3 days ago",
      read: true,
    },
  ]

  // Mock certificates
  const certificates = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      issueDate: "April 15, 2025",
      image: "/placeholder.jpg",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      issueDate: "March 10, 2025",
      image: "/placeholder.jpg",
    },
  ]

  const handleContinueLearning = (courseId: number) => {
    router.push(`/education/course/${courseId}/learn`)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Learning Dashboard</h1>

      <Tabs defaultValue="courses" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 relative h-48 md:h-auto">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h2 className="text-xl font-bold mb-1">{course.title}</h2>
                    <p className="text-muted-foreground mb-4">{course.instructor}</p>
                    <div className="flex items-center mb-2">
                      <Progress value={course.progress} className="h-2 flex-1 mr-4" />
                      <span className="text-sm font-medium">{course.progress}% complete</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Last accessed {course.lastAccessed}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">
                          {course.completedLectures}/{course.totalLectures} lectures
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{course.estimatedTimeLeft} left</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <p className="font-medium">Next up: {course.nextLecture}</p>
                      </div>
                      <Button className="mt-4 md:mt-0" onClick={() => handleContinueLearning(course.id)}>
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border rounded-lg ${notification.read ? "bg-card" : "bg-blue-50 border-blue-200"}`}
            >
              <div className="flex items-start">
                <Bell
                  className={`h-5 w-5 mr-3 mt-1 ${notification.read ? "text-muted-foreground" : "text-blue-600"}`}
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-sm text-muted-foreground">{notification.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{notification.course}</p>
                  <p className="text-sm">{notification.message}</p>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="certificates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-bold text-lg">{certificate.title}</h3>
                    <p className="text-sm">Issued on {certificate.issueDate}</p>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-medium">Certificate of Completion</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {certificates.length === 0 && (
            <div className="text-center py-12">
              <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Certificates Yet</h3>
              <p className="text-muted-foreground mb-6">Complete a course to earn your first certificate</p>
              <Button onClick={() => router.push("/education/courses")}>Browse Courses</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </main>
  )
}
