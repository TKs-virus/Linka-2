import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import HealthcareHomePage from "@/components/healthcare/healthcare-home-page"

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <HealthcareHomePage />
      <Footer />
    </div>
  )
}
