import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import ConfirmationPage from "@/components/home-services/confirmation-page"

export default function ServiceConfirmation() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <ConfirmationPage />
      <Footer />
    </div>
  )
}
