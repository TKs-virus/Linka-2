import Link from "next/link"

export default function LogisticsDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Service Type</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/logistics/services/parcel" className="text-sm hover:underline">
              Parcel Delivery
            </Link>
          </li>
          <li>
            <Link href="/logistics/services/freight" className="text-sm hover:underline">
              Freight Shipping
            </Link>
          </li>
          <li>
            <Link href="/logistics/services/international" className="text-sm hover:underline">
              International Shipping
            </Link>
          </li>
          <li>
            <Link href="/logistics/services/warehousing" className="text-sm hover:underline">
              Warehousing
            </Link>
          </li>
          <li>
            <Link href="/logistics/services/fulfillment" className="text-sm hover:underline">
              Fulfillment Services
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Origin & Destination</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/logistics/locations/domestic" className="text-sm hover:underline">
              Domestic Shipping
            </Link>
          </li>
          <li>
            <Link href="/logistics/locations/international" className="text-sm hover:underline">
              International Shipping
            </Link>
          </li>
          <li>
            <Link href="/logistics/locations/remote" className="text-sm hover:underline">
              Remote Areas
            </Link>
          </li>
          <li>
            <Link href="/logistics/locations/business" className="text-sm hover:underline">
              Business Addresses
            </Link>
          </li>
          <li>
            <Link href="/logistics/locations/residential" className="text-sm hover:underline">
              Residential Addresses
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Package Details</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/logistics/package/size" className="text-sm hover:underline">
              Package Size
            </Link>
          </li>
          <li>
            <Link href="/logistics/package/weight" className="text-sm hover:underline">
              Package Weight
            </Link>
          </li>
          <li>
            <Link href="/logistics/package/fragile" className="text-sm hover:underline">
              Fragile Items
            </Link>
          </li>
          <li>
            <Link href="/logistics/package/hazardous" className="text-sm hover:underline">
              Hazardous Materials
            </Link>
          </li>
          <li>
            <Link href="/logistics/package/custom" className="text-sm hover:underline">
              Custom Packaging
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Speed & Tracking</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/logistics/speed/express" className="text-sm hover:underline">
              Express Delivery
            </Link>
          </li>
          <li>
            <Link href="/logistics/speed/standard" className="text-sm hover:underline">
              Standard Delivery
            </Link>
          </li>
          <li>
            <Link href="/logistics/speed/economy" className="text-sm hover:underline">
              Economy Shipping
            </Link>
          </li>
          <li>
            <Link href="/logistics/tracking" className="text-sm hover:underline">
              Package Tracking
            </Link>
          </li>
          <li>
            <Link href="/logistics/notifications" className="text-sm hover:underline">
              Delivery Notifications
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
