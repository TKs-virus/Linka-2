"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductComparisonTable from "./product-comparison-table"

export default function PersonalBankingPage() {
  const checkingAccounts = [
    {
      name: "Basic Checking",
      monthlyFee: "$0",
      minBalance: "$0",
      atmFee: "$0 in-network, $2.50 out-of-network",
      features: ["Free online & mobile banking", "Debit card included", "No minimum balance"],
      href: "/financial/personal-banking/checking/basic",
    },
    {
      name: "Premium Checking",
      monthlyFee: "$12 (waivable)",
      minBalance: "$1,500 to waive fee",
      atmFee: "$0 (all ATMs)",
      features: ["Free online & mobile banking", "Interest earning", "Free checks", "Preferred rates on loans"],
      href: "/financial/personal-banking/checking/premium",
    },
    {
      name: "Student Checking",
      monthlyFee: "$0",
      minBalance: "$0",
      atmFee: "$0 in-network, $1 out-of-network",
      features: ["Free online & mobile banking", "Debit card included", "No minimum balance", "Fee forgiveness"],
      href: "/financial/personal-banking/checking/student",
    },
  ]

  const savingsAccounts = [
    {
      name: "Standard Savings",
      interestRate: "0.50% APY",
      monthlyFee: "$5 (waivable)",
      minBalance: "$300 to waive fee",
      features: ["Free online & mobile banking", "Automatic savings options", "Quarterly statements"],
      href: "/financial/personal-banking/savings/standard",
    },
    {
      name: "High-Yield Savings",
      interestRate: "4.25% APY",
      monthlyFee: "$0",
      minBalance: "$1,000 minimum opening deposit",
      features: ["Free online & mobile banking", "Higher interest rate", "Monthly statements", "Limited withdrawals"],
      href: "/financial/personal-banking/savings/high-yield",
    },
    {
      name: "Money Market",
      interestRate: "3.75% APY",
      monthlyFee: "$10 (waivable)",
      minBalance: "$2,500 to waive fee",
      features: ["Free online & mobile banking", "Check writing privileges", "Tiered interest rates"],
      href: "/financial/personal-banking/savings/money-market",
    },
  ]

  const creditCards = [
    {
      name: "Cash Rewards Card",
      annualFee: "$0",
      rewardsRate: "1.5% cash back on all purchases",
      introAPR: "0% for 15 months",
      standardAPR: "14.99% - 24.99%",
      features: ["No annual fee", "Cash back rewards", "Intro APR offer", "No foreign transaction fees"],
      href: "/financial/personal-banking/credit-cards/cash-rewards",
    },
    {
      name: "Travel Rewards Card",
      annualFee: "$95",
      rewardsRate: "2x points on travel, 1x on everything else",
      introAPR: "None",
      standardAPR: "16.99% - 23.99%",
      features: ["Travel insurance", "No foreign transaction fees", "Airport lounge access", "Global entry credit"],
      href: "/financial/personal-banking/credit-cards/travel-rewards",
    },
    {
      name: "Secured Credit Card",
      annualFee: "$0",
      rewardsRate: "None",
      introAPR: "None",
      standardAPR: "22.99%",
      features: ["Build credit", "No annual fee", "Security deposit required", "Credit limit equals deposit"],
      href: "/financial/personal-banking/credit-cards/secured",
    },
  ]

  const loans = [
    {
      name: "Personal Loan",
      interestRate: "5.99% - 18.99% APR",
      loanAmount: "$1,000 - $50,000",
      term: "12 - 60 months",
      features: ["No collateral required", "Fixed monthly payments", "No prepayment penalties"],
      href: "/financial/personal-banking/loans/personal",
    },
    {
      name: "Auto Loan",
      interestRate: "3.49% - 11.99% APR",
      loanAmount: "Up to $100,000",
      term: "24 - 84 months",
      features: ["Competitive rates", "Flexible terms", "Quick approval process"],
      href: "/financial/personal-banking/loans/auto",
    },
    {
      name: "Home Equity Line of Credit",
      interestRate: "4.25% - 8.99% APR",
      loanAmount: "Up to $500,000",
      term: "10 - 30 years",
      features: ["Use home equity", "Interest may be tax-deductible", "Flexible access to funds"],
      href: "/financial/personal-banking/loans/heloc",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Personal Banking Solutions</h1>
              <p className="text-xl mb-8">
                Discover the right accounts and services to help you manage your money and achieve your financial goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                  <Link href="#products">Explore Products</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link href="/financial/login">Online Banking Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Personal Banking Products</h2>

            <Tabs defaultValue="checking" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="checking">Checking Accounts</TabsTrigger>
                <TabsTrigger value="savings">Savings Accounts</TabsTrigger>
                <TabsTrigger value="credit-cards">Credit Cards</TabsTrigger>
                <TabsTrigger value="loans">Loans</TabsTrigger>
              </TabsList>

              <TabsContent value="checking">
                <h3 className="text-2xl font-semibold mb-6">Checking Accounts</h3>
                <ProductComparisonTable
                  products={checkingAccounts}
                  columns={["name", "monthlyFee", "minBalance", "atmFee", "features"]}
                  columnLabels={{
                    name: "Account Type",
                    monthlyFee: "Monthly Fee",
                    minBalance: "Minimum Balance",
                    atmFee: "ATM Fee",
                    features: "Features",
                  }}
                />
              </TabsContent>

              <TabsContent value="savings">
                <h3 className="text-2xl font-semibold mb-6">Savings Accounts</h3>
                <ProductComparisonTable
                  products={savingsAccounts}
                  columns={["name", "interestRate", "monthlyFee", "minBalance", "features"]}
                  columnLabels={{
                    name: "Account Type",
                    interestRate: "Interest Rate",
                    monthlyFee: "Monthly Fee",
                    minBalance: "Minimum Balance",
                    features: "Features",
                  }}
                />
              </TabsContent>

              <TabsContent value="credit-cards">
                <h3 className="text-2xl font-semibold mb-6">Credit Cards</h3>
                <ProductComparisonTable
                  products={creditCards}
                  columns={["name", "annualFee", "rewardsRate", "introAPR", "standardAPR", "features"]}
                  columnLabels={{
                    name: "Card Type",
                    annualFee: "Annual Fee",
                    rewardsRate: "Rewards Rate",
                    introAPR: "Intro APR",
                    standardAPR: "Standard APR",
                    features: "Features",
                  }}
                />
              </TabsContent>

              <TabsContent value="loans">
                <h3 className="text-2xl font-semibold mb-6">Loans</h3>
                <ProductComparisonTable
                  products={loans}
                  columns={["name", "interestRate", "loanAmount", "term", "features"]}
                  columnLabels={{
                    name: "Loan Type",
                    interestRate: "Interest Rate",
                    loanAmount: "Loan Amount",
                    term: "Term",
                    features: "Features",
                  }}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Online Banking Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Online Banking</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Access your accounts anytime, anywhere with our secure online banking platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/financial/login">Login to Online Banking</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/financial/register">Register for Online Banking</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tools & Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Financial Calculators</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/financial/tools/savings-calculator" className="text-blue-600 hover:underline">
                      Savings Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/tools/loan-calculator" className="text-blue-600 hover:underline">
                      Loan Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/tools/mortgage-calculator" className="text-blue-600 hover:underline">
                      Mortgage Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/tools/budget-calculator" className="text-blue-600 hover:underline">
                      Budget Calculator
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Financial Education</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/financial/education/budgeting" className="text-blue-600 hover:underline">
                      Budgeting Basics
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/credit-scores" className="text-blue-600 hover:underline">
                      Understanding Credit Scores
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/saving-strategies" className="text-blue-600 hover:underline">
                      Saving Strategies
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/education/home-buying" className="text-blue-600 hover:underline">
                      Home Buying Guide
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Help & Support</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/financial/faq" className="text-blue-600 hover:underline">
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/contact" className="text-blue-600 hover:underline">
                      Contact Customer Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/locations" className="text-blue-600 hover:underline">
                      Find a Branch or ATM
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial/security" className="text-blue-600 hover:underline">
                      Security Center
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
