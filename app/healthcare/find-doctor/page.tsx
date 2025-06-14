import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import DoctorFinder from "@/components/healthcare/find-doctor-page"

export default function FindDoctor() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <DoctorFinder />
      <Footer />
    </div>
  )
}
