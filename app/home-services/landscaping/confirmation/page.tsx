import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import LandscapingConfirmationPage from "@/components/home-services/landscaping-confirmation-page"

export default function LandscapingConfirmation() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <LandscapingConfirmationPage />
      <Footer />
    </div>
  )
}
