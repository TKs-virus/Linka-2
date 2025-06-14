"use client"

import Link from "next/link"
import { Shield, Home, Car, Heart, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InsurancePage() {
  const insuranceTypes = [
    {
      title: "Auto Insurance",
      description: "Protect your vehicle and yourself on the road",
      icon: Car,
      href: "/financial/insurance/auto",
      features: [
        "Liability coverage",
        "Collision coverage",
        "Comprehensive coverage",
        "Uninsured motorist protection",
        "Roadside assistance"
      ]
    },
    {
      title: "Home Insurance",
      description: "Safeguard your home and personal belongings",
      icon: Home,
      href: "/financial/insurance/home",
      features: [
        "Dwelling coverage",
        "Personal property protection",
        "Liability protection",
        "Additional living expenses",
        "Natural disaster coverage"
      ]
    },
    {
      title: "Life Insurance",
      description: "Provide financial security for your loved ones",
      icon: Heart,
      href: "/financial/insurance/life",
      features: [
        "Term life insurance",
        "Whole life insurance",
        "Universal life insurance",
        "Variable life insurance",
        "Final expense insurance"
      ]
    },
    {
      title: "Health Insurance",
      description: "Get coverage for medical expenses and healthcare",
      icon: Shield,
      href: "/financial/insurance/health",
      features: [
        "Preventive care",
        "Prescription drug coverage",
        "Hospital and emergency services",
        "Mental health services",
        "Telehealth options"
      ]
    },
    {
      title: "Business Insurance",
      description: "Protect your business from various risks",
      icon: Building,
      href: "/financial/insurance/business",
      features: [
        "General liability",
        "Property insurance",
        "Workers' compensation",
        "Professional liability",
        "Business interruption"
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Insurance Solutions</h1>
              <p className="text-xl mb-8">
                Protect what matters most with our comprehensive insurance options.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                  <Link href="#insurance-types">Explore Insurance Options</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link href="/financial/insurance/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Types */}
        <section id="insurance-types" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Insurance Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insuranceTypes.map((type) => (
                <div key={type.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <type.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{type.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{type.description}</p>
                  <ul className="mb-6 space-y-1">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col space-y-2">
                    <Button asChild>
                      <Link href={`${type.href}/quote`}>Get a Quote</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={type.href}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Insurance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-600">
                  Our policies provide extensive protection to ensure you're covered when it matters most.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
                <p className="text-gray-600">
                  We offer affordable premiums without compromising on the quality of coverage.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliable Claims Process</h3>
                <p className="text-gray-600">
                  Our streamlined claims process ensures you receive prompt assistance when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a personalized quote in minutes and find the right coverage for your needs.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/financial/insurance/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-blue-800">
                <Link href="/financial/contact">Speak with an Agent</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Insurance Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Insurance Guides</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/financial/education/insurance-basics" className="text-blue-600 hover:underline">
                      Insurance 101: Understanding the Basics
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/choosing-coverage" className="text-blue-600 hover:underline">
                      How to Choose the Right Coverage
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/claims-process" className="text-blue-600 hover:underline">
                      Navigating the Claims Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/insurance-terms" className="text-blue-600 hover:underline">
                      Common Insurance Terms Explained
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Tools & Calculators</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/financial/tools/coverage-calculator" className="text-blue-600 hover:underline">
                      Coverage Needs Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/tools/premium-estimator" className="text-blue-600 hover:underline">
                      Premium Estimator
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/tools/life-insurance-calculator" className="text-blue-600 hover:underline">
                      Life Insurance Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/tools/home-value-estimator" className="text-blue-600 hover:underline">
                      Home Value Estimator\
