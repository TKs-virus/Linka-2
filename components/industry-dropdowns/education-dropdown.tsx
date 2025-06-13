import Link from "next/link"

export default function EducationDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Subjects</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/education/subjects/business" className="text-sm hover:underline">
              Business
            </Link>
          </li>
          <li>
            <Link href="/education/subjects/technology" className="text-sm hover:underline">
              Technology & IT
            </Link>
          </li>
          <li>
            <Link href="/education/subjects/arts" className="text-sm hover:underline">
              Arts & Humanities
            </Link>
          </li>
          <li>
            <Link href="/education/subjects/science" className="text-sm hover:underline">
              Science
            </Link>
          </li>
          <li>
            <Link href="/education/subjects/languages" className="text-sm hover:underline">
              Languages
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Course Levels</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/education/levels/beginner" className="text-sm hover:underline">
              Beginner
            </Link>
          </li>
          <li>
            <Link href="/education/levels/intermediate" className="text-sm hover:underline">
              Intermediate
            </Link>
          </li>
          <li>
            <Link href="/education/levels/advanced" className="text-sm hover:underline">
              Advanced
            </Link>
          </li>
          <li>
            <Link href="/education/levels/professional" className="text-sm hover:underline">
              Professional Certificate
            </Link>
          </li>
          <li>
            <Link href="/education/levels/degree" className="text-sm hover:underline">
              Degree Programs
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Learning Formats</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/education/formats/self-paced" className="text-sm hover:underline">
              Self-Paced
            </Link>
          </li>
          <li>
            <Link href="/education/formats/instructor-led" className="text-sm hover:underline">
              Instructor-Led
            </Link>
          </li>
          <li>
            <Link href="/education/formats/live-classes" className="text-sm hover:underline">
              Live Classes
            </Link>
          </li>
          <li>
            <Link href="/education/formats/recorded" className="text-sm hover:underline">
              Recorded Lectures
            </Link>
          </li>
          <li>
            <Link href="/education/formats/interactive" className="text-sm hover:underline">
              Interactive Workshops
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Filters</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/education/filters/price" className="text-sm hover:underline">
              Price Range
            </Link>
          </li>
          <li>
            <Link href="/education/filters/duration" className="text-sm hover:underline">
              Course Duration
            </Link>
          </li>
          <li>
            <Link href="/education/filters/language" className="text-sm hover:underline">
              Language
            </Link>
          </li>
          <li>
            <Link href="/education/filters/rating" className="text-sm hover:underline">
              Rating
            </Link>
          </li>
          <li>
            <Link href="/education/filters/free" className="text-sm hover:underline">
              Free Courses
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
