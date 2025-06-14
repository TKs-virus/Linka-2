import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import LandscapingServicePage from "@/components/home-services/landscaping-service-page"

export default function LandscapingService() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <LandscapingServicePage />
      <Footer />
    </div>
  )
}
