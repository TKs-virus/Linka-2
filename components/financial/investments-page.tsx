"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvestmentsPage() {
  const investmentTypes = [
    {
      title: "Stocks",
      description: "Buy and sell shares of publicly traded companies",
      icon: "📈",
      href: "/financial/investments/stocks",
      features: [
        "Trade individual stocks",
        "Commission-free trading",
        "Real-time market data",
        "Research and analysis tools",
      ],
    },
    {
      title: "Bonds",
      description: "Fixed-income securities with regular interest payments",
      icon: "🔒",
      href: "/financial/investments/bonds",
      features: ["Government and corporate bonds", "Treasury securities", "Municipal bonds", "Fixed income strategies"],
    },
    {
      title: "Mutual Funds",
      description: "Professionally managed investment portfolios",
      icon: "🧩",
      href: "/financial/investments/mutual-funds",
      features: [
        "Diversified portfolios",
        "Professional management",
        "Wide range of fund options",
        "Automatic reinvestment",
      ],
    },
    {
      title: "ETFs",
      description: "Exchange-traded funds that track indexes, sectors, or assets",
      icon: "📊",
      href: "/financial/investments/etfs",
      features: ["Trade like stocks", "Lower expense ratios", "Tax efficiency", "Diversification"],
    },
    {
      title: "Retirement Accounts",
      description: "Tax-advantaged accounts for retirement savings",
      icon: "🏖️",
      href: "/financial/investments/retirement",
      features: ["Traditional and Roth IRAs", "401(k) rollovers", "SEP and SIMPLE IRAs", "Tax-advantaged growth"],
    },
    {
      title: "Managed Portfolios",
      description: "Professionally managed investment strategies",
      icon: "👨‍💼",
      href: "/financial/investments/managed-portfolios",
      features: [
        "Personalized investment strategies",
        "Professional portfolio management",
        "Regular rebalancing",
        "Goal-based investing",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Investment Solutions</h1>
              <p className="text-xl mb-8">
                Build wealth and secure your financial future with our diverse investment options.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                  <Link href="/financial/investments/open-account">Open an Investment Account</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link href="#investment-types">Explore Investment Options</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Types */}
        <section id="investment-types" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Investment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentTypes.map((type) => (
                <div key={type.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="mb-4 space-y-1">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={type.href} className="flex items-center text-blue-600 font-medium">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Assessment */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Understand Your Investment Style</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="mb-6">
                  Understanding your risk tolerance and investment goals is crucial to building the right portfolio.
                  Take our risk assessment questionnaire to help determine your investment style.
                </p>
                <div className="flex justify-center">
                  <Button asChild>
                    <Link href="/financial/investments/risk-assessment">Take Risk Assessment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Investment Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Investment Basics</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/financial/education/investment-basics" className="text-blue-600 hover:underline">
                      Understanding Investment Types
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/risk-and-return" className="text-blue-600 hover:underline">
                      Risk and Return Relationship
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/diversification" className="text-blue-600 hover:underline">
                      The Power of Diversification
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/compound-interest" className="text-blue-600 hover:underline">
                      Compound Interest Explained
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Retirement Planning</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/financial/education/retirement-basics" className="text-blue-600 hover:underline">
                      Retirement Account Types
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/retirement-strategies" className="text-blue-600 hover:underline">
                      Retirement Saving Strategies
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/social-security" className="text-blue-600 hover:underline">
                      Social Security Benefits
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/retirement-income" className="text-blue-600 hover:underline">
                      Creating Retirement Income
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Market Insights</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/financial/education/market-analysis" className="text-blue-600 hover:underline">
                      Market Analysis Techniques
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/economic-indicators" className="text-blue-600 hover:underline">
                      Understanding Economic Indicators
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/investment-strategies" className="text-blue-600 hover:underline">
                      Investment Strategies
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/market-trends" className="text-blue-600 hover:underline">
                      Current Market Trends
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Open an investment account today and take the first step toward achieving your financial goals.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/financial/investments/open-account">Open an Account</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-blue-800">
                <Link href="/financial/contact">Speak with an Advisor</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
