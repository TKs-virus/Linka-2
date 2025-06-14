import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import ProfessionalProfilePage from "@/components/professional/professional-profile-page"

export default function ProfessionalProfile({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <ProfessionalProfilePage professionalId={params.id} />
      <Footer />
    </div>
  )
}
