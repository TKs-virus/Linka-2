import TravelHomePage from "@/components/travel/travel-home-page"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <TravelHomePage />
      <Footer />
    </div>
  )
}
