import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import BookingsPage from "@/components/home-services/bookings-page"

export default function MyBookings() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <BookingsPage />
      <Footer />
    </div>
  )
}
