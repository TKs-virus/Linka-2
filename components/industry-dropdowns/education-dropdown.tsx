import Link from "next/link"

export default function EducationDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Course Categories</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/education/courses?category=programming" className="text-sm hover:underline">
              Programming & Development
            </Link>
          </li>
          <li>
            <Link href="/education/courses?category=design" className="text-sm hover:underline">
              Design & Creative
            </Link>
          </li>
          <li>
            <Link href="/education/courses?category=business" className="text-sm hover:underline">
              Business & Marketing
            </Link>
          </li>
          <li>
            <Link href="/education/courses?category=language" className="text-sm hover:underline">
              Language Learning
            </Link>
          </li>
          <li>
            <Link href="/education/courses?category=science" className="text-sm hover:underline">
              Science & Technology
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Learning Paths</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/education/paths/web-development" className="text-sm hover:underline">
              Web Development
            </Link>
          </li>
          <li>
            <Link href="/education/paths/data-science" className="text-sm hover:underline">
              Data Science
            </Link>
          </li>
          <li>
            <Link href="/education/paths/digital-marketing" className="text-sm hover:underline">
              Digital Marketing
            </Link>
          </li>
          <li>
            <Link href="/education/paths/ui-ux-design" className="text-sm hover:underline">
              UI/UX Design
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">My Learning</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/education/my-courses" className="text-sm hover:underline">
              My Courses
            </Link>
          </li>
          <li>
            <Link href="/education/certificates" className="text-sm hover:underline">
              Certificates
            </Link>
          </li>
          <li>
            <Link href="/education/progress" className="text-sm hover:underline">
              Learning Progress
            </Link>
          </li>
          <li>
            <Link href="/education/wishlist" className="text-sm hover:underline">
              Course Wishlist
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Resources</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/education/instructors" className="text-sm hover:underline">
              Find Instructors
            </Link>
          </li>
          <li>
            <Link href="/education/free-courses" className="text-sm hover:underline">
              Free Courses
            </Link>
          </li>
          <li>
            <Link href="/education/blog" className="text-sm hover:underline">
              Learning Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
