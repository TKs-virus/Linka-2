import type { Metadata } from "next"
import InsurancePage from "@/components/financial/insurance-page"

export const metadata: Metadata = {
  title: "Insurance Products | Financial Services",
  description: "Explore our insurance products and services",
}

export default function InsuranceHub() {
  return <InsurancePage />
}
