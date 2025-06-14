import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import EducationHomePage from "@/components/education/education-home-page"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <EducationHomePage />
      <Footer />
    </div>
  )
}
