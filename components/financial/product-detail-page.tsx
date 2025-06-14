"use client"

import Link from "next/link"
import { FileText, CalculatorIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQ {
  question: string
  answer: string
}

interface Document {
  name: string
  href: string
}

interface ProductDetailProps {
  product: {
    name: string
    category: string
    interestRate?: string
    monthlyFee?: string
    minBalance?: string
    features: string[]
    eligibility: string[]
    faqs: FAQ[]
    documents: Document[]
    calculators: { name: string; href: string }[]
  }
}

export default function ProductDetailPage({ product }: ProductDetailProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl mb-8">
                {product.category === "Savings" && "Grow your savings with competitive interest rates"}
                {product.category === "Checking" && "Manage your everyday finances with ease"}
                {product.category === "Credit Card" && "Earn rewards on everyday purchases"}
                {product.category === "Loan" && "Finance your goals with competitive rates"}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                  <Link href={`${product.category.toLowerCase()}/apply`}>Apply Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Key Details */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Key Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {product.interestRate && (
                      <div className="p-4 bg-gray-50 rounded-md">
                        <h3 className="text-sm font-medium text-gray-500">Interest Rate</h3>
                        <p className="text-2xl font-bold text-blue-600">{product.interestRate}</p>
                      </div>
                    )}
                    {product.monthlyFee && (
                      <div className="p-4 bg-gray-50 rounded-md">
                        <h3 className="text-sm font-medium text-gray-500">Monthly Fee</h3>
                        <p className="text-2xl font-bold">{product.monthlyFee}</p>
                      </div>
                    )}
                    {product.minBalance && (
                      <div className="p-4 bg-gray-50 rounded-md">
                        <h3 className="text-sm font-medium text-gray-500">Minimum Balance</h3>
                        <p className="text-2xl font-bold">{product.minBalance}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div id="features" className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Features & Benefits</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Eligibility Requirements</h2>
                  <ul className="space-y-2">
                    {product.eligibility.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQs */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {product.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Apply Now */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Ready to Get Started?</h2>
                  <p className="mb-4">Apply online in just a few minutes.</p>
                  <Button asChild className="w-full">
                    <Link href={`${product.category.toLowerCase()}/apply`}>Apply Now</Link>
                  </Button>
                </div>

                {/* Documents */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Documents</h2>
                  <ul className="space-y-2">
                    {product.documents.map((doc, index) => (
                      <li key={index}>
                        <Link href={doc.href} className="flex items-center text-blue-600 hover:underline">
                          <FileText className="h-4 w-4 mr-2" />
                          {doc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Calculators */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Helpful Calculators</h2>
                  <ul className="space-y-2">
                    {product.calculators.map((calc, index) => (
                      <li key={index}>
                        <Link href={calc.href} className="flex items-center text-blue-600 hover:underline">
                          <CalculatorIcon className="h-4 w-4 mr-2" />
                          {calc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
                  <p className="mb-4">Our financial experts are ready to assist you.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/financial/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
