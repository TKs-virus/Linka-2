import type { Metadata } from "next"
import ProductDetailPage from "@/components/financial/product-detail-page"

export const metadata: Metadata = {
  title: "High-Yield Savings Account | Financial Services",
  description: "Earn more with our high-yield savings account",
}

export default function HighYieldSavingsPage() {
  const productData = {
    name: "High-Yield Savings Account",
    category: "Savings",
    interestRate: "4.25% APY",
    monthlyFee: "$0",
    minBalance: "$1,000 minimum opening deposit",
    features: [
      "Earn 4.25% APY on all balances",
      "No monthly maintenance fees",
      "Free online & mobile banking",
      "FDIC insured up to $250,000",
      "24/7 account access",
      "Automatic savings options",
      "Monthly statements",
      "Limited to 6 withdrawals per month",
    ],
    eligibility: [
      "Must be 18 years or older",
      "Valid Social Security Number or Tax ID",
      "U.S. citizen or permanent resident",
      "$1,000 minimum opening deposit",
    ],
    faqs: [
      {
        question: "How do I open a High-Yield Savings Account?",
        answer:
          "You can open an account online, by phone, or by visiting any of our branch locations. You'll need to provide identification, your Social Security Number, and make an initial deposit of at least $1,000.",
      },
      {
        question: "Is there a limit to how many withdrawals I can make?",
        answer:
          "Yes, federal regulations limit certain types of withdrawals and transfers from savings accounts to 6 per statement cycle. Exceeding this limit may result in fees or account conversion.",
      },
      {
        question: "How is interest calculated and paid?",
        answer:
          "Interest is calculated daily based on the collected balance in your account and credited to your account monthly.",
      },
      {
        question: "Is my money safe in this account?",
        answer:
          "Yes, deposits are FDIC insured up to $250,000 per depositor, per insured bank, for each account ownership category.",
      },
      {
        question: "Can I link this account to my checking account?",
        answer:
          "Yes, you can link your High-Yield Savings Account to any of our checking accounts for easy transfers and overdraft protection.",
      },
    ],
    documents: [
      {
        name: "Account Agreement",
        href: "/financial/documents/high-yield-savings-agreement.pdf",
      },
      {
        name: "Fee Schedule",
        href: "/financial/documents/high-yield-savings-fees.pdf",
      },
      {
        name: "Privacy Policy",
        href: "/financial/documents/privacy-policy.pdf",
      },
      {
        name: "Electronic Banking Terms",
        href: "/financial/documents/electronic-banking-terms.pdf",
      },
    ],
    calculators: [
      {
        name: "Savings Goal Calculator",
        href: "/financial/tools/savings-goal-calculator",
      },
      {
        name: "Compound Interest Calculator",
        href: "/financial/tools/compound-interest-calculator",
      },
    ],
  }

  return <ProductDetailPage product={productData} />
}
