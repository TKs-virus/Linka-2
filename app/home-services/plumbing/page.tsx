import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import PlumbingTasksPage from "@/components/home-services/plumbing-tasks-page"

export default function PlumbingTasks() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <PlumbingTasksPage />
      <Footer />
    </div>
  )
}
