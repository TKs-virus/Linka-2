import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import CourseDetailPage from "@/components/education/course-detail-page"

export default function CourseDetail({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <CourseDetailPage courseId={params.id} />
      <Footer />
    </div>
  )
}
