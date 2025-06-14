import Link from "next/link"

export default function FoodDeliveryDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Cuisines</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/food-delivery/cuisines/italian" className="text-sm hover:underline">
              Italian
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/cuisines/chinese" className="text-sm hover:underline">
              Chinese
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/cuisines/indian" className="text-sm hover:underline">
              Indian
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/cuisines/mexican" className="text-sm hover:underline">
              Mexican
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/cuisines/japanese" className="text-sm hover:underline">
              Japanese
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/cuisines/american" className="text-sm hover:underline">
              American
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Quick Orders</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/food-delivery/categories/pizza" className="text-sm hover:underline">
              Pizza
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/categories/burgers" className="text-sm hover:underline">
              Burgers
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/categories/sushi" className="text-sm hover:underline">
              Sushi
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/categories/desserts" className="text-sm hover:underline">
              Desserts
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/categories/healthy" className="text-sm hover:underline">
              Healthy Options
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">My Account</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/food-delivery/orders" className="text-sm hover:underline">
              My Orders
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/favorites" className="text-sm hover:underline">
              Favorite Restaurants
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/addresses" className="text-sm hover:underline">
              Delivery Addresses
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/payment" className="text-sm hover:underline">
              Payment Methods
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Special Offers</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/food-delivery/deals" className="text-sm hover:underline">
              Today's Deals
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/promotions" className="text-sm hover:underline">
              Promotions
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/free-delivery" className="text-sm hover:underline">
              Free Delivery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
