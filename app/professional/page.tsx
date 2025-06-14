import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import ProfessionalHomePage from "@/components/professional/professional-home-page"

export default function ProfessionalPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <ProfessionalHomePage />
      <Footer />
    </div>
  )
}
