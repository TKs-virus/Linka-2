import Link from "next/link"

export default function HomeServicesDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Service Types</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/home-services/types/cleaning" className="text-sm hover:underline">
              Cleaning Services
            </Link>
          </li>
          <li>
            <Link href="/home-services/types/repairs" className="text-sm hover:underline">
              Home Repairs
            </Link>
          </li>
          <li>
            <Link href="/home-services/types/renovation" className="text-sm hover:underline">
              Renovation
            </Link>
          </li>
          <li>
            <Link href="/home-services/types/landscaping" className="text-sm hover:underline">
              Landscaping
            </Link>
          </li>
          <li>
            <Link href="/home-services/types/pest-control" className="text-sm hover:underline">
              Pest Control
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Specific Tasks</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/home-services/tasks/plumbing" className="text-sm hover:underline">
              Plumbing
            </Link>
          </li>
          <li>
            <Link href="/home-services/tasks/electrical" className="text-sm hover:underline">
              Electrical Work
            </Link>
          </li>
          <li>
            <Link href="/home-services/tasks/painting" className="text-sm hover:underline">
              Painting
            </Link>
          </li>
          <li>
            <Link href="/home-services/tasks/furniture-assembly" className="text-sm hover:underline">
              Furniture Assembly
            </Link>
          </li>
          <li>
            <Link href="/home-services/tasks/appliance-repair" className="text-sm hover:underline">
              Appliance Repair
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Property Type</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/home-services/property/apartment" className="text-sm hover:underline">
              Apartment
            </Link>
          </li>
          <li>
            <Link href="/home-services/property/house" className="text-sm hover:underline">
              House
            </Link>
          </li>
          <li>
            <Link href="/home-services/property/condo" className="text-sm hover:underline">
              Condo
            </Link>
          </li>
          <li>
            <Link href="/home-services/property/office" className="text-sm hover:underline">
              Office Space
            </Link>
          </li>
          <li>
            <Link href="/home-services/property/commercial" className="text-sm hover:underline">
              Commercial Property
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Scheduling & Location</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/home-services/scheduling/same-day" className="text-sm hover:underline">
              Same-Day Service
            </Link>
          </li>
          <li>
            <Link href="/home-services/scheduling/next-day" className="text-sm hover:underline">
              Next-Day Service
            </Link>
          </li>
          <li>
            <Link href="/home-services/scheduling/weekend" className="text-sm hover:underline">
              Weekend Availability
            </Link>
          </li>
          <li>
            <Link href="/home-services/scheduling/recurring" className="text-sm hover:underline">
              Recurring Service
            </Link>
          </li>
          <li>
            <Link href="/home-services/location" className="text-sm hover:underline">
              Service Area Search
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
