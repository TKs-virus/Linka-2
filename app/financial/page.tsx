import type { Metadata } from "next"
import FinancialHomePage from "@/components/financial/financial-home-page"

export const metadata: Metadata = {
  title: "Financial Services | Multi-Industry Platform",
  description: "Banking, Investments, Insurance and more financial services",
}

export default function FinancialPage() {
  return <FinancialHomePage />
}
