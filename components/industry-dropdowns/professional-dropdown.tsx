import Link from "next/link"

export default function ProfessionalDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Service Categories</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/professional/categories/legal" className="text-sm hover:underline">
              Legal Services
            </Link>
          </li>
          <li>
            <Link href="/professional/categories/accounting" className="text-sm hover:underline">
              Accounting & Tax
            </Link>
          </li>
          <li>
            <Link href="/professional/categories/consulting" className="text-sm hover:underline">
              Business Consulting
            </Link>
          </li>
          <li>
            <Link href="/professional/categories/marketing" className="text-sm hover:underline">
              Marketing & PR
            </Link>
          </li>
          <li>
            <Link href="/professional/categories/it" className="text-sm hover:underline">
              IT Services
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Specific Services</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/professional/services/contract-review" className="text-sm hover:underline">
              Contract Review
            </Link>
          </li>
          <li>
            <Link href="/professional/services/tax-preparation" className="text-sm hover:underline">
              Tax Preparation
            </Link>
          </li>
          <li>
            <Link href="/professional/services/business-strategy" className="text-sm hover:underline">
              Business Strategy
            </Link>
          </li>
          <li>
            <Link href="/professional/services/digital-marketing" className="text-sm hover:underline">
              Digital Marketing
            </Link>
          </li>
          <li>
            <Link href="/professional/services/web-development" className="text-sm hover:underline">
              Web Development
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Industry Expertise</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/professional/industries/healthcare" className="text-sm hover:underline">
              Healthcare
            </Link>
          </li>
          <li>
            <Link href="/professional/industries/finance" className="text-sm hover:underline">
              Finance
            </Link>
          </li>
          <li>
            <Link href="/professional/industries/technology" className="text-sm hover:underline">
              Technology
            </Link>
          </li>
          <li>
            <Link href="/professional/industries/retail" className="text-sm hover:underline">
              Retail
            </Link>
          </li>
          <li>
            <Link href="/professional/industries/manufacturing" className="text-sm hover:underline">
              Manufacturing
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Pricing Models</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/professional/pricing/hourly" className="text-sm hover:underline">
              Hourly Rate
            </Link>
          </li>
          <li>
            <Link href="/professional/pricing/fixed" className="text-sm hover:underline">
              Fixed Price
            </Link>
          </li>
          <li>
            <Link href="/professional/pricing/retainer" className="text-sm hover:underline">
              Retainer
            </Link>
          </li>
          <li>
            <Link href="/professional/pricing/subscription" className="text-sm hover:underline">
              Subscription
            </Link>
          </li>
          <li>
            <Link href="/professional/pricing/performance" className="text-sm hover:underline">
              Performance-Based
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
