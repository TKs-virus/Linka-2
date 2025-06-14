import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import ScheduleServicePage from "@/components/home-services/schedule-service-page"

export default function ScheduleService() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <ScheduleServicePage />
      <Footer />
    </div>
  )
}
