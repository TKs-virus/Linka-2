"use client"

import Link from "next/link"
import { ArrowRight, MapPin, Phone, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PromotionalBanner from "./promotional-banner"

export default function FinancialHomePage() {
  const serviceCategories = [
    {
      title: "Personal Banking",
      description: "Checking, savings, credit cards and personal loans",
      icon: "💳",
      href: "/financial/personal-banking",
    },
    {
      title: "Business Banking",
      description: "Business accounts, loans, and merchant services",
      icon: "🏢",
      href: "/financial/business-banking",
    },
    {
      title: "Investments",
      description: "Stocks, bonds, mutual funds, ETFs and retirement accounts",
      icon: "📈",
      href: "/financial/investments",
    },
    {
      title: "Insurance",
      description: "Auto, home, life and health insurance policies",
      icon: "🛡️",
      href: "/financial/insurance",
    },
    {
      title: "Loans",
      description: "Mortgages, auto loans, and personal loans",
      icon: "🏠",
      href: "/financial/loans",
    },
  ]

  const promotions = [
    {
      title: "Premium Credit Card",
      description: "Earn 5% cashback on all purchases for the first 3 months",
      cta: "Apply Now",
      href: "/financial/personal-banking/credit-cards/premium",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "High-Yield Savings",
      description: "Earn 4.25% APY with our new high-yield savings account",
      cta: "Learn More",
      href: "/financial/personal-banking/savings/high-yield",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Mortgage Refinancing",
      description: "Rates as low as 3.5% APR for qualified applicants",
      cta: "Check Rates",
      href: "/financial/loans/mortgage/refinance",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Your Financial Journey Starts Here</h1>
              <p className="text-xl mb-8">
                Discover personalized solutions for banking, investing, and protecting what matters most.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                  <Link href="/financial/personal-banking">Explore Personal Banking</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link href="/financial/investments">Discover Investment Options</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Financial Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Offers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {promotions.map((promo) => (
                <PromotionalBanner key={promo.title} {...promo} />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Link
                href="/financial/locations"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <MapPin className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Find a Branch</h3>
                <p className="text-gray-600">Locate our nearest branch or ATM</p>
              </Link>
              <Link
                href="/financial/contact"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <Phone className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-600">Get in touch with our support team</p>
              </Link>
              <Link
                href="/financial/faq"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <HelpCircle className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">FAQs</h3>
                <p className="text-gray-600">Find answers to common questions</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Online Banking Login */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Access Your Accounts</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Securely manage your accounts, transfer funds, pay bills, and more with our online banking platform.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/financial/login">Online Banking Login</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-blue-800">
                <Link href="/financial/register">Register for Online Banking</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
