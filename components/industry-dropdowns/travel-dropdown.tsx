import Link from "next/link"

export default function TravelDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Book Travel</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/flights" className="text-sm hover:underline">
              Flights
            </Link>
          </li>
          <li>
            <Link href="/travel/hotels" className="text-sm hover:underline">
              Hotels
            </Link>
          </li>
          <li>
            <Link href="/travel/cars" className="text-sm hover:underline">
              Car Rentals
            </Link>
          </li>
          <li>
            <Link href="/travel/packages" className="text-sm hover:underline">
              Vacation Packages
            </Link>
          </li>
          <li>
            <Link href="/travel/activities" className="text-sm hover:underline">
              Activities & Tours
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Destinations</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/destinations/europe" className="text-sm hover:underline">
              Europe
            </Link>
          </li>
          <li>
            <Link href="/travel/destinations/asia" className="text-sm hover:underline">
              Asia
            </Link>
          </li>
          <li>
            <Link href="/travel/destinations/americas" className="text-sm hover:underline">
              Americas
            </Link>
          </li>
          <li>
            <Link href="/travel/destinations/africa" className="text-sm hover:underline">
              Africa
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">My Trips</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/bookings" className="text-sm hover:underline">
              My Bookings
            </Link>
          </li>
          <li>
            <Link href="/travel/wishlist" className="text-sm hover:underline">
              Travel Wishlist
            </Link>
          </li>
          <li>
            <Link href="/travel/rewards" className="text-sm hover:underline">
              Rewards Program
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Travel Tools</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/deals" className="text-sm hover:underline">
              Travel Deals
            </Link>
          </li>
          <li>
            <Link href="/travel/guides" className="text-sm hover:underline">
              Travel Guides
            </Link>
          </li>
          <li>
            <Link href="/travel/weather" className="text-sm hover:underline">
              Weather Forecast
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
