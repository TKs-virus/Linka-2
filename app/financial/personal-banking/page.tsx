import type { Metadata } from "next"
import PersonalBankingPage from "@/components/financial/personal-banking-page"

export const metadata: Metadata = {
  title: "Personal Banking | Financial Services",
  description: "Explore our personal banking products and services",
}

export default function PersonalBankingHub() {
  return <PersonalBankingPage />
}
