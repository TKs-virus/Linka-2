import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PromotionalBannerProps {
  title: string
  description: string
  cta: string
  href: string
  image: string
}

export default function PromotionalBanner({ title, description, cta, href, image }: PromotionalBannerProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button asChild className="w-full">
          <Link href={href}>{cta}</Link>
        </Button>
      </div>
    </div>
  )
}
