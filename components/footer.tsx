import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded"></div>
              <span className="font-bold">ServiceHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your all-in-one platform for accessing services across multiple industries.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ecommerce" className="text-muted-foreground hover:text-foreground">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/food-delivery" className="text-muted-foreground hover:text-foreground">
                  Food Delivery
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="text-muted-foreground hover:text-foreground">
                  Wholesale/Grocery
                </Link>
              </li>
              <li>
                <Link href="/fabric-textiles" className="text-muted-foreground hover:text-foreground">
                  Fabric & Textiles
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/healthcare" className="text-muted-foreground hover:text-foreground">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-foreground">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/professional" className="text-muted-foreground hover:text-foreground">
                  Professional
                </Link>
              </li>
              <li>
                <Link href="/travel" className="text-muted-foreground hover:text-foreground">
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ServiceHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
