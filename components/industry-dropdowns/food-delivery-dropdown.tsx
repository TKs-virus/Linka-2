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
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Restaurant Types</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/food-delivery/types/fast-food" className="text-sm hover:underline">
              Fast Food
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/types/fine-dining" className="text-sm hover:underline">
              Fine Dining
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/types/cafe" className="text-sm hover:underline">
              Cafés
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/types/food-trucks" className="text-sm hover:underline">
              Food Trucks
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/types/bakeries" className="text-sm hover:underline">
              Bakeries
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Dietary Restrictions</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/food-delivery/dietary/vegetarian" className="text-sm hover:underline">
              Vegetarian
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/dietary/vegan" className="text-sm hover:underline">
              Vegan
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/dietary/gluten-free" className="text-sm hover:underline">
              Gluten-Free
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/dietary/keto" className="text-sm hover:underline">
              Keto
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/dietary/halal" className="text-sm hover:underline">
              Halal
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Sort & Filter</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/food-delivery/sort/rating" className="text-sm hover:underline">
              By Rating
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/sort/delivery-time" className="text-sm hover:underline">
              By Delivery Time
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/sort/distance" className="text-sm hover:underline">
              By Distance
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/filter/price-range" className="text-sm hover:underline">
              Price Range
            </Link>
          </li>
          <li>
            <Link href="/food-delivery/filter/offers" className="text-sm hover:underline">
              Special Offers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
