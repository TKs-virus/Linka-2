import Link from "next/link"

export default function EcommerceDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Product Categories</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/ecommerce/electronics" className="text-sm hover:underline">
              Electronics
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/clothing" className="text-sm hover:underline">
              Clothing & Fashion
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/home" className="text-sm hover:underline">
              Home & Garden
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/beauty" className="text-sm hover:underline">
              Beauty & Personal Care
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/sports" className="text-sm hover:underline">
              Sports & Outdoors
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">My Account</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/ecommerce/account/orders" className="text-sm hover:underline">
              My Orders
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/account/wishlist" className="text-sm hover:underline">
              Wishlist
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/account/profile" className="text-sm hover:underline">
              Profile Settings
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/account/addresses" className="text-sm hover:underline">
              Addresses
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/account/payment-methods" className="text-sm hover:underline">
              Payment Methods
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Filters</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/ecommerce/filters/brand" className="text-sm hover:underline">
              By Brand
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/filters/price" className="text-sm hover:underline">
              By Price Range
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/filters/rating" className="text-sm hover:underline">
              By Rating
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/filters/discount" className="text-sm hover:underline">
              Discounted Items
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/filters/new-arrivals" className="text-sm hover:underline">
              New Arrivals
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Featured</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/ecommerce/deals" className="text-sm hover:underline">
              Today's Deals
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/bestsellers" className="text-sm hover:underline">
              Bestsellers
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/new-releases" className="text-sm hover:underline">
              New Releases
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/gift-ideas" className="text-sm hover:underline">
              Gift Ideas
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
