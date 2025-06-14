import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import PharmacyPage from "@/components/healthcare/pharmacy-page"

export default function OnlinePharmacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <PharmacyPage />
      <Footer />
    </div>
  )
}
