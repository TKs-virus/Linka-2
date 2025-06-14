import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import CourseCatalogPage from "@/components/education/course-catalog-page"

export default function CourseCatalog() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <CourseCatalogPage />
      <Footer />
    </div>
  )
}
