import MainNavigation from "@/components/main-navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Your All-in-One Service Platform
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Access multiple services across various industries - all in one place.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* Industry cards would go here */}
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">E-commerce</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Education</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Entertainment</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Financial</h3>
            </div>
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Food Delivery</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">HealthCare</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Home-Services</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Logistics</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Professional</h3>
            </div>
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Travel & Tourism</h3>
            </div>
            {/* Additional industry cards would continue */}
          </div>
        </div>
      </main>
    </div>
  )
}
