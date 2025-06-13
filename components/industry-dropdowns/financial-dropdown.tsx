import Link from "next/link"

export default function FinancialDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Account Types</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/financial/accounts/checking" className="text-sm hover:underline">
              Checking Accounts
            </Link>
          </li>
          <li>
            <Link href="/financial/accounts/savings" className="text-sm hover:underline">
              Savings Accounts
            </Link>
          </li>
          <li>
            <Link href="/financial/accounts/credit-cards" className="text-sm hover:underline">
              Credit Cards
            </Link>
          </li>
          <li>
            <Link href="/financial/accounts/loans" className="text-sm hover:underline">
              Loans
            </Link>
          </li>
          <li>
            <Link href="/financial/accounts/mortgages" className="text-sm hover:underline">
              Mortgages
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Investment Options</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/financial/investments/stocks" className="text-sm hover:underline">
              Stocks
            </Link>
          </li>
          <li>
            <Link href="/financial/investments/bonds" className="text-sm hover:underline">
              Bonds
            </Link>
          </li>
          <li>
            <Link href="/financial/investments/mutual-funds" className="text-sm hover:underline">
              Mutual Funds
            </Link>
          </li>
          <li>
            <Link href="/financial/investments/etfs" className="text-sm hover:underline">
              ETFs
            </Link>
          </li>
          <li>
            <Link href="/financial/investments/retirement" className="text-sm hover:underline">
              Retirement Accounts
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Insurance Types</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/financial/insurance/life" className="text-sm hover:underline">
              Life Insurance
            </Link>
          </li>
          <li>
            <Link href="/financial/insurance/health" className="text-sm hover:underline">
              Health Insurance
            </Link>
          </li>
          <li>
            <Link href="/financial/insurance/auto" className="text-sm hover:underline">
              Auto Insurance
            </Link>
          </li>
          <li>
            <Link href="/financial/insurance/home" className="text-sm hover:underline">
              Home Insurance
            </Link>
          </li>
          <li>
            <Link href="/financial/insurance/business" className="text-sm hover:underline">
              Business Insurance
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Tools & Calculators</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/financial/tools/loan-calculator" className="text-sm hover:underline">
              Loan Calculator
            </Link>
          </li>
          <li>
            <Link href="/financial/tools/mortgage-calculator" className="text-sm hover:underline">
              Mortgage Calculator
            </Link>
          </li>
          <li>
            <Link href="/financial/tools/retirement-planner" className="text-sm hover:underline">
              Retirement Planner
            </Link>
          </li>
          <li>
            <Link href="/financial/tools/budget-planner" className="text-sm hover:underline">
              Budget Planner
            </Link>
          </li>
          <li>
            <Link href="/financial/tools/credit-score" className="text-sm hover:underline">
              Credit Score Checker
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
