import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import ProjectSubmissionForm from "@/components/professional/project-submission-form"

export default function PostProject() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <ProjectSubmissionForm />
      <Footer />
    </div>
  )
}
