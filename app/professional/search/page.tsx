import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import ProfessionalSearchPage from "@/components/professional/professional-search-page"

export default function ProfessionalSearch() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <ProfessionalSearchPage />
      <Footer />
    </div>
  )
}
