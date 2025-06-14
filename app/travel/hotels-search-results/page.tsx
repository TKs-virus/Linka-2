import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import HotelSearchResults from "@/components/travel/hotel-search-results"

export default function HotelSearchResultsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <HotelSearchResults />
      <Footer />
    </div>
  )
}
