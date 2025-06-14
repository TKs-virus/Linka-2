import Link from "next/link"

export default function WholesaleDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Browse Products</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/wholesale" className="text-sm hover:underline">
              All Wholesale Products
            </Link>
          </li>
          <li>
            <Link href="/wholesale/electronics" className="text-sm hover:underline">
              Electronics & Tech
            </Link>
          </li>
          <li>
            <Link href="/wholesale/food-beverage" className="text-sm hover:underline">
              Food & Beverage
            </Link>
          </li>
          <li>
            <Link href="/wholesale/apparel" className="text-sm hover:underline">
              Apparel & Textiles
            </Link>
          </li>
          <li>
            <Link href="/wholesale/industrial" className="text-sm hover:underline">
              Industrial Supplies
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Account Services</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/wholesale/account/apply" className="text-sm hover:underline">
              Apply for Wholesale Account
            </Link>
          </li>
          <li>
            <Link href="/wholesale/account/dashboard" className="text-sm hover:underline">
              My Dashboard
            </Link>
          </li>
          <li>
            <Link href="/wholesale/account/orders" className="text-sm hover:underline">
              My Orders
            </Link>
          </li>
          <li>
            <Link href="/wholesale/account/quotes" className="text-sm hover:underline">
              My Quotes
            </Link>
          </li>
          <li>
            <Link href="/wholesale/cart" className="text-sm hover:underline">
              Quote Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
