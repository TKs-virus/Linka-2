import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import FlightSearchResults from "@/components/travel/flight-search-results"

export default function FlightSearchResultsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <FlightSearchResults />
      <Footer />
    </div>
  )
}
