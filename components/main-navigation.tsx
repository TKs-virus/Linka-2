"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ShoppingCart,
  Utensils,
  Plane,
  Stethoscope,
  GraduationCap,
  DollarSign,
  Briefcase,
  Film,
  HomeIcon,
  Truck,
  Package,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

import EcommerceDropdown from "./industry-dropdowns/ecommerce-dropdown"
import FoodDeliveryDropdown from "./industry-dropdowns/food-delivery-dropdown"
import TravelDropdown from "./industry-dropdowns/travel-dropdown"
import HealthcareDropdown from "./industry-dropdowns/healthcare-dropdown"
import EducationDropdown from "./industry-dropdowns/education-dropdown"
import FinancialDropdown from "./industry-dropdowns/financial-dropdown"
import ProfessionalDropdown from "./industry-dropdowns/professional-dropdown"
import EntertainmentDropdown from "./industry-dropdowns/entertainment-dropdown"
import HomeServicesDropdown from "./industry-dropdowns/home-services-dropdown"
import LogisticsDropdown from "./industry-dropdowns/logistics-dropdown"

export default function MainNavigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const industryItems = [
    {
      name: "E-commerce",
      href: "/ecommerce",
      icon: <ShoppingCart className="h-4 w-4 mr-2" />,
      component: <EcommerceDropdown />,
    },
    {
      name: "Food Delivery",
      href: "/food-delivery",
      icon: <Utensils className="h-4 w-4 mr-2" />,
      component: <FoodDeliveryDropdown />,
    },
    {
      name: "Travel & Tourism",
      href: "/travel",
      icon: <Plane className="h-4 w-4 mr-2" />,
      component: <TravelDropdown />,
    },
    {
      name: "Healthcare",
      href: "/healthcare",
      icon: <Stethoscope className="h-4 w-4 mr-2" />,
      component: <HealthcareDropdown />,
    },
    {
      name: "Education",
      href: "/education",
      icon: <GraduationCap className="h-4 w-4 mr-2" />,
      component: <EducationDropdown />,
    },
    {
      name: "Financial Services",
      href: "/financial",
      icon: <DollarSign className="h-4 w-4 mr-2" />,
      component: <FinancialDropdown />,
    },
    {
      name: "Professional Services",
      href: "/professional",
      icon: <Briefcase className="h-4 w-4 mr-2" />,
      component: <ProfessionalDropdown />,
    },
    {
      name: "Entertainment",
      href: "/entertainment",
      icon: <Film className="h-4 w-4 mr-2" />,
      component: <EntertainmentDropdown />,
    },
    {
      name: "Home Services",
      href: "/home-services",
      icon: <HomeIcon className="h-4 w-4 mr-2" />,
      component: <HomeServicesDropdown />,
    },
    {
      name: "Logistics & Delivery",
      href: "/logistics",
      icon: <Truck className="h-4 w-4 mr-2" />,
      component: <LogisticsDropdown />,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Package className="h-6 w-6" />
            <span className="font-bold">Linka</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Main Navigation Items */}
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.name}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {industryItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="flex select-none items-center rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {item.icon}
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industry-specific Dropdowns */}
              {industryItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>{item.component}</NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden ml-auto">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="h-px bg-border" />
                <div className="font-medium">Services</div>
                {industryItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* User Actions */}
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}
