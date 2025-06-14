import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import DstvWifiServicePage from "@/components/home-services/dstv-wifi-service-page"

export default function DstvWifiService() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <DstvWifiServicePage />
      <Footer />
    </div>
  )
}
