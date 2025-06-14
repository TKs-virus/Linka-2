import Link from "next/link"

export function VehicleStoreDropdown() {
  return (
    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
      <div className="row-span-3">
        <Link
          href="/vehiclestore"
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
        >
          <div className="mb-2 mt-4 text-lg font-medium">VehicleStore</div>
          <p className="text-sm leading-tight text-muted-foreground">
            Complete automotive services including detailing, parts, painting, and repairs.
          </p>
        </Link>
      </div>
      <div className="grid gap-1">
        <Link
          href="/vehiclestore/car-detailing"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">Car Detailing</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Professional car detailing services</p>
        </Link>
        <Link
          href="/vehiclestore/spare-parts"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">Spare Parts</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Quality auto parts catalog</p>
        </Link>
        <Link
          href="/vehiclestore/vehicle-painting"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">Vehicle Painting</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Custom vehicle painting services</p>
        </Link>
        <Link
          href="/vehiclestore/repair-maintenance"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">Repair & Maintenance</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Expert vehicle repair services</p>
        </Link>
      </div>
    </div>
  )
}
