import Link from "next/link"

export default function TravelDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[600px] lg:w-[700px] lg:grid-cols-3">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Flights</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/flights/one-way" className="text-sm hover:underline">
              One-Way
            </Link>
          </li>
          <li>
            <Link href="/travel/flights/round-trip" className="text-sm hover:underline">
              Round-Trip
            </Link>
          </li>
          <li>
            <Link href="/travel/flights/multi-city" className="text-sm hover:underline">
              Multi-City
            </Link>
          </li>
          <li>
            <Link href="/travel/flights/dates" className="text-sm hover:underline">
              Flexible Dates
            </Link>
          </li>
          <li>
            <Link href="/travel/flights/passengers" className="text-sm hover:underline">
              Passengers
            </Link>
          </li>
          <li>
            <Link href="/travel/flights/class" className="text-sm hover:underline">
              Class Selection
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Hotels</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/hotels/destination" className="text-sm hover:underline">
              Destination
            </Link>
          </li>
          <li>
            <Link href="/travel/hotels/dates" className="text-sm hover:underline">
              Check-in/Check-out
            </Link>
          </li>
          <li>
            <Link href="/travel/hotels/guests" className="text-sm hover:underline">
              Guests & Rooms
            </Link>
          </li>
          <li>
            <Link href="/travel/hotels/star-rating" className="text-sm hover:underline">
              Star Rating
            </Link>
          </li>
          <li>
            <Link href="/travel/hotels/amenities" className="text-sm hover:underline">
              Amenities
            </Link>
          </li>
          <li>
            <Link href="/travel/hotels/property-type" className="text-sm hover:underline">
              Property Type
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Car Rentals</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/cars/location" className="text-sm hover:underline">
              Pick-up/Drop-off
            </Link>
          </li>
          <li>
            <Link href="/travel/cars/dates" className="text-sm hover:underline">
              Rental Dates
            </Link>
          </li>
          <li>
            <Link href="/travel/cars/vehicle-type" className="text-sm hover:underline">
              Vehicle Type
            </Link>
          </li>
          <li>
            <Link href="/travel/cars/suppliers" className="text-sm hover:underline">
              Suppliers
            </Link>
          </li>
          <li>
            <Link href="/travel/cars/special-offers" className="text-sm hover:underline">
              Special Offers
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Packages</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/packages/flight-hotel" className="text-sm hover:underline">
              Flight + Hotel
            </Link>
          </li>
          <li>
            <Link href="/travel/packages/flight-hotel-car" className="text-sm hover:underline">
              Flight + Hotel + Car
            </Link>
          </li>
          <li>
            <Link href="/travel/packages/hotel-car" className="text-sm hover:underline">
              Hotel + Car
            </Link>
          </li>
          <li>
            <Link href="/travel/packages/all-inclusive" className="text-sm hover:underline">
              All-Inclusive
            </Link>
          </li>
          <li>
            <Link href="/travel/packages/last-minute" className="text-sm hover:underline">
              Last-Minute Deals
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Activities</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/activities/tours" className="text-sm hover:underline">
              Tours
            </Link>
          </li>
          <li>
            <Link href="/travel/activities/attractions" className="text-sm hover:underline">
              Attractions
            </Link>
          </li>
          <li>
            <Link href="/travel/activities/day-trips" className="text-sm hover:underline">
              Day Trips
            </Link>
          </li>
          <li>
            <Link href="/travel/activities/outdoor" className="text-sm hover:underline">
              Outdoor Activities
            </Link>
          </li>
          <li>
            <Link href="/travel/activities/tickets" className="text-sm hover:underline">
              Tickets & Passes
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Travel Tools</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/travel/tools/trip-planner" className="text-sm hover:underline">
              Trip Planner
            </Link>
          </li>
          <li>
            <Link href="/travel/tools/travel-insurance" className="text-sm hover:underline">
              Travel Insurance
            </Link>
          </li>
          <li>
            <Link href="/travel/tools/currency-converter" className="text-sm hover:underline">
              Currency Converter
            </Link>
          </li>
          <li>
            <Link href="/travel/tools/travel-guides" className="text-sm hover:underline">
              Travel Guides
            </Link>
          </li>
          <li>
            <Link href="/travel/tools/covid-info" className="text-sm hover:underline">
              COVID-19 Information
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
