import type { Metadata } from "next"
import InvestmentsPage from "@/components/financial/investments-page"

export const metadata: Metadata = {
  title: "Investment Options | Financial Services",
  description: "Explore our investment products and services",
}

export default function InvestmentsHub() {
  return <InvestmentsPage />
}
