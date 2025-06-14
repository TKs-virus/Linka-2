"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Minus, Plus, ShoppingCart, ArrowLeft, Check, AlertTriangle } from "lucide-react"

interface ProductDetailPageProps {
  productId: string
}

export default function ProductDetailPage({ productId }: ProductDetailPageProps) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  // Mock product data (in a real app, you would fetch this based on the productId)
  const product = {
    id: Number.parseInt(productId),
    name: "Paracetamol Tablets",
    image: "/placeholder.jpg",
    price: 5.99,
    rating: 4.8,
    reviewCount: 245,
    category: "Over-the-Counter",
    description: "Paracetamol tablets for pain relief and fever reduction. Each tablet contains 500mg of paracetamol.",
    dosage: "Adults and children aged 12 years and over: 1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours.",
    ingredients: "Active ingredient: Paracetamol 500mg. Other ingredients: Maize starch, potassium sorbate (E202), purified talc, stearic acid, povidone, pregelatinised starch, hypromellose, and triacetin.",
    sideEffects: "Side effects are rare but may include allergic reactions such as skin rash or itching, liver problems, or blood disorders. If you experience any unusual symptoms, stop taking the medication and consult your doctor.",
    manufacturer: "HealthPharm Ltd.",
    inStock: true,
    prescription: false,
  }

  const handleAddToCart = () => {
    // In a real app, you would add the product to the cart
    // For now, we'll just show an alert
    alert(`Added ${quantity} ${quantity === 1 ? "item" : "items"} to cart`)
  }

  const handleBuyNow = () => {
    // In a real app, you would add the product to the cart and redirect to checkout
    router.push("/healthcare/pharmacy/checkout")
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="relative h-[400px]">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-8" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-2 text-sm">
            <span className="text-muted-foreground">
              {product.category} / {product.prescription ? "Prescription Required" : "No Prescription Required"}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
          <div className="text-2xl font-bold mb-6">${product.price}</div>
          <div className="mb-6">
            <p className="mb-4">{product.description}</p>
            <div className="flex items-center text-sm">
              {product.inStock ? (
                <div className="flex items-center text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  In Stock
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  Out of Stock
                </div>
              )}
              <span className="mx-2">•</span>
              <span>Manufactured by {product.manufacturer}</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={handleBuyNow}>\
