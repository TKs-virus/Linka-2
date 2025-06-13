import Link from "next/link"

export default function HealthcareDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Specialties</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/healthcare/specialties/primary-care" className="text-sm hover:underline">
              Primary Care
            </Link>
          </li>
          <li>
            <Link href="/healthcare/specialties/cardiology" className="text-sm hover:underline">
              Cardiology
            </Link>
          </li>
          <li>
            <Link href="/healthcare/specialties/dermatology" className="text-sm hover:underline">
              Dermatology
            </Link>
          </li>
          <li>
            <Link href="/healthcare/specialties/mental-health" className="text-sm hover:underline">
              Mental Health
            </Link>
          </li>
          <li>
            <Link href="/healthcare/specialties/pediatrics" className="text-sm hover:underline">
              Pediatrics
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Doctor Search</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/healthcare/doctors/by-name" className="text-sm hover:underline">
              Search by Name
            </Link>
          </li>
          <li>
            <Link href="/healthcare/doctors/by-gender" className="text-sm hover:underline">
              Filter by Gender
            </Link>
          </li>
          <li>
            <Link href="/healthcare/doctors/by-language" className="text-sm hover:underline">
              Filter by Language
            </Link>
          </li>
          <li>
            <Link href="/healthcare/doctors/by-location" className="text-sm hover:underline">
              Search by Location
            </Link>
          </li>
          <li>
            <Link href="/healthcare/doctors/by-rating" className="text-sm hover:underline">
              Sort by Rating
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Appointment Types</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/healthcare/appointments/video" className="text-sm hover:underline">
              Video Consultation
            </Link>
          </li>
          <li>
            <Link href="/healthcare/appointments/in-person" className="text-sm hover:underline">
              In-Person Visit
            </Link>
          </li>
          <li>
            <Link href="/healthcare/appointments/urgent" className="text-sm hover:underline">
              Urgent Care
            </Link>
          </li>
          <li>
            <Link href="/healthcare/appointments/follow-up" className="text-sm hover:underline">
              Follow-up Visit
            </Link>
          </li>
          <li>
            <Link href="/healthcare/appointments/annual" className="text-sm hover:underline">
              Annual Check-up
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Pharmacy Services</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/healthcare/pharmacy/prescription" className="text-sm hover:underline">
              Prescription Refills
            </Link>
          </li>
          <li>
            <Link href="/healthcare/pharmacy/otc" className="text-sm hover:underline">
              Over-the-Counter
            </Link>
          </li>
          <li>
            <Link href="/healthcare/pharmacy/delivery" className="text-sm hover:underline">
              Medication Delivery
            </Link>
          </li>
          <li>
            <Link href="/healthcare/pharmacy/consultation" className="text-sm hover:underline">
              Pharmacist Consultation
            </Link>
          </li>
          <li>
            <Link href="/healthcare/pharmacy/insurance" className="text-sm hover:underline">
              Insurance Coverage
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
