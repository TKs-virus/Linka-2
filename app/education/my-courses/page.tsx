import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import MyCoursesPage from "@/components/education/my-courses-page"

export default function MyCourses() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <MyCoursesPage />
      <Footer />
    </div>
  )
}
