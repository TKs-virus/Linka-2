import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import HomeServicesPage from "@/components/home-services/home-services-page"

export default function HomeServices() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <HomeServicesPage />
      <Footer />
    </div>
  )
}
