import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MainNavigation from "@/components/main-navigation"

export default function HomePage() {
  const industries = [
    { name: "Travel & Tourism", href: "/travel", icon: "✈️" },
    { name: "Healthcare", href: "/healthcare", icon: "🏥" },
    { name: "Education", href: "/education", icon: "🎓" },
    { name: "Professional Services", href: "/professional", icon: "💼" },
    { name: "Financial Services", href: "/financial", icon: "💰" },
    { name: "Entertainment", href: "/entertainment", icon: "🎬" },
    { name: "Home Services", href: "/home-services", icon: "🏠" },
    { name: "Logistics", href: "/logistics", icon: "📦" },
    { name: "E-commerce", href: "/ecommerce", icon: "🛒" },
    { name: "Food Delivery", href: "/food-delivery", icon: "🍕" },
    { name: "Wholesale", href: "/wholesale", icon: "📊" },
    { name: "Fabric & Textiles", href: "/fabric-textiles", icon: "🧵" },
    { name: "VehicleStore", href: "/vehiclestore", icon: "🚗" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      {/* Simple Header */}
      <header className="border-b bg-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Multi-Industry Platform</h1>
        </div>
      </header>

      {/* Industries Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Select an Industry</h2>
          <p className="text-gray-600">Choose from our available industry services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href={industry.href}>
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-2">{industry.icon}</div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button variant="outline" className="w-full">
                    Enter Service
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
