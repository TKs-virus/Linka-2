"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const industries = [
    { name: "Travel", href: "/travel" },
    { name: "Healthcare", href: "/healthcare" },
    { name: "Education", href: "/education" },
    { name: "Professional", href: "/professional" },
    { name: "Financial", href: "/financial" },
    { name: "Entertainment", href: "/entertainment" },
    { name: "Home Services", href: "/home-services" },
    { name: "Logistics", href: "/logistics" },
    { name: "E-commerce", href: "/ecommerce" },
    { name: "Food Delivery", href: "/food-delivery" },
    { name: "Wholesale", href: "/wholesale" },
    { name: "Fabric & Textiles", href: "/fabric-textiles" },
    { name: "VehicleStore", href: "/vehiclestore" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg"></div>
            <span className="font-bold text-xl">MultiPlatform</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {industries.slice(0, 6).map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {industry.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">More</button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-2">
                  {industries.slice(6).map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost">Vendor Login</Button>
              <Button>Join as Provider</Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="py-4 space-y-2">
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  href={industry.href}
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {industry.name}
                </Link>
              ))}
              <div className="border-t pt-4 px-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Vendor Login
                </Button>
                <Button className="w-full">Join as Provider</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
