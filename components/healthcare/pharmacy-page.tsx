"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Upload, Pill, Thermometer, Heart, Droplet, Activity, ShoppingBag } from "lucide-react"

export default function PharmacyPage() {
  const router = useRouter()

  const categories = [
    {
      id: 1,
      name: "Prescription Medications",
      icon: <Pill className="h-8 w-8" />,
      image: "/placeholder.jpg",
      itemCount: 1200,
    },
    {
      id: 2,
      name: "Over-the-Counter",
      icon: <Thermometer className="h-8 w-8" />,
      image: "/placeholder.jpg",
      itemCount: 850,
    },
    {
      id: 3,
      name: "Vitamins & Supplements",
      icon: <Heart className="h-8 w-8" />,
      image: "/placeholder.jpg",
      itemCount: 620,
    },
    {
      id: 4,
      name: "Personal Care",
      icon: <Droplet className="h-8 w-8" />,
      image: "/placeholder.jpg",
      itemCount: 740,
    },
    {
      id: 5,
      name: "Medical Devices",
      icon: <Activity className="h-8 w-8" />,
      image: "/placeholder.jpg",
      itemCount: 320,
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Paracetamol Tablets",
      image: "/placeholder.jpg",
      price: 5.99,
      rating: 4.8,
      reviewCount: 245,
      category: "Over-the-Counter",
    },
    {
      id: 2,
      name: "Vitamin D3 Supplements",
      image: "/placeholder.jpg",
      price: 12.5,
      rating: 4.7,
      reviewCount: 189,
      category: "Vitamins & Supplements",
    },
    {
      id: 3,
      name: "Digital Blood Pressure Monitor",
      image: "/placeholder.jpg",
      price: 45.99,
      rating: 4.9,
      reviewCount: 312,
      category: "Medical Devices",
    },
    {
      id: 4,
      name: "Hand Sanitizer",
      image: "/placeholder.jpg",
      price: 3.99,
      rating: 4.6,
      reviewCount: 178,
      category: "Personal Care",
    },
  ]

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/healthcare/pharmacy/category/${categoryId}`)
  }

  const handleProductClick = (productId: number) => {
    router.push(`/healthcare/pharmacy/product/${productId}`)
  }

  const handleUploadPrescription = () => {
    router.push("/healthcare/pharmacy/upload-prescription")
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Online Pharmacy</h1>

      {/* Search and Upload Prescription */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for medications, health conditions, or products..."
            className="pl-10 py-6 text-lg"
          />
        </div>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-full" onClick={handleUploadPrescription}>
          <Upload className="mr-2 h-5 w-5" />
          Upload Prescription
        </Button>
      </div>

      {/* Categories */}
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="relative h-40">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
            </div>
            <CardContent className="p-4 text-center">
              <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto -mt-12 mb-4 relative z-10 border-4 border-white">
                {category.icon}
              </div>
              <h3 className="font-bold text-lg mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.itemCount} items</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">${product.price}</span>
                  <Button size="sm" variant="ghost" className="rounded-full p-2">
                    <ShoppingBag className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Promotions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-blue-600 rounded-xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
              <p className="opacity-90 mb-4">On orders over $25</p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Shop Now</Button>
            </div>
            <div className="relative w-32 h-32">
              <Image src="/placeholder.jpg" alt="Free delivery" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
        <div className="bg-green-600 rounded-xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold mb-2">20% Off Vitamins</h3>
              <p className="opacity-90 mb-4">Limited time offer</p>
              <Button className="bg-white text-green-600 hover:bg-green-50">Shop Now</Button>
            </div>
            <div className="relative w-32 h-32">
              <Image src="/placeholder.jpg" alt="Vitamins sale" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Health Information */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Health Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-2">COVID-19 Updates</h3>
            <p className="text-muted-foreground mb-4">
              Stay informed about the latest COVID-19 guidelines, vaccines, and testing information.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-2">Medication Safety</h3>
            <p className="text-muted-foreground mb-4">
              Important tips for safely storing, taking, and disposing of medications.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-2">Seasonal Allergies</h3>
            <p className="text-muted-foreground mb-4">
              Find relief from seasonal allergies with these tips and recommended products.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
