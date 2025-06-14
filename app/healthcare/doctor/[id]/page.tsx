import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import DoctorProfilePage from "@/components/healthcare/doctor-profile-page"

export default function DoctorProfile({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <DoctorProfilePage doctorId={params.id} />
      <Footer />
    </div>
  )
}
