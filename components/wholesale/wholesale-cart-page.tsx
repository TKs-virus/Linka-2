"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Plus, Minus, Calculator, Send, ShoppingCart, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WholesaleCartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Coffee Beans - Arabica Blend",
      image: "/placeholder.svg?height=100&width=100",
      sku: "CB-ARB-001",
      quantity: 250,
      unitPrice: 12.5,
      moq: 50,
      weight: "25kg per unit",
      leadTime: "3-5 days",
    },
    {
      id: 2,
      name: "Industrial LED Panel Lights",
      image: "/placeholder.svg?height=100&width=100",
      sku: "LED-IND-200",
      quantity: 150,
      unitPrice: 45.0,
      moq: 100,
      weight: "2kg per unit",
      leadTime: "5-7 days",
    },
    {
      id: 3,
      name: "Cotton T-Shirts Bulk Pack",
      image: "/placeholder.svg?height=100&width=100",
      sku: "TS-COT-500",
      quantity: 1000,
      unitPrice: 3.2,
      moq: 500,
      weight: "0.2kg per unit",
      leadTime: "7-10 days",
    },
  ])

  const [specialInstructions, setSpecialInstructions] = useState("")
  const [shippingLocation, setShippingLocation] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(item.moq, newQuantity) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
  const estimatedShipping = subtotal > 5000 ? 0 : 250 // Free shipping over $5000
  const estimatedTotal = subtotal + estimatedShipping

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/wholesale" className="hover:text-blue-600">
              Wholesale
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Quote Request Cart</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Quote Request Summary</h1>
        </div>

        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Your quote cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some wholesale products to get started</p>
              <Link href="/wholesale/products">
                <Button>Browse Wholesale Products</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Items in Quote Request ({cartItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                      <div className="relative w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">SKU: {item.sku}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <span>MOQ: {item.moq} units</span>
                          <span>Weight: {item.weight}</span>
                          <span>Lead Time: {item.leadTime}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label htmlFor={`qty-${item.id}`} className="text-sm">
                              Qty:
                            </Label>
                            <div className="flex items-center gap-1">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - item.moq)}
                                disabled={item.quantity <= item.moq}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <Input
                                id={`qty-${item.id}`}
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || item.moq)}
                                className="w-20 text-center"
                                min={item.moq}
                                step={item.moq}
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + item.moq)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-gray-600">${item.unitPrice.toFixed(2)}/unit</p>
                            <p className="text-lg font-semibold">${(item.quantity * item.unitPrice).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Special Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle>Special Instructions</CardTitle>
                  <CardDescription>Add any special requirements or notes for your quote request</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Enter any special instructions, delivery requirements, or questions..."
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    rows={4}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Quote Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Shipping:</span>
                      <span className="font-semibold">
                        {estimatedShipping === 0 ? "FREE" : `$${estimatedShipping.toFixed(2)}`}
                      </span>
                    </div>
                    {estimatedShipping === 0 && (
                      <p className="text-sm text-green-600">🎉 Free shipping on orders over $5,000!</p>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Estimated Total:</span>
                        <span className="text-blue-600">${estimatedTotal.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        *Final pricing may vary based on current market rates
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <Label htmlFor="shipping-location">Shipping Location</Label>
                    <Input
                      id="shipping-location"
                      placeholder="Enter city, state/province"
                      value={shippingLocation}
                      onChange={(e) => setShippingLocation(e.target.value)}
                    />
                    <Button variant="outline" className="w-full">
                      <Calculator className="h-4 w-4 mr-2" />
                      Recalculate Shipping
                    </Button>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <Link href="/wholesale/quote-confirmation">
                      <Button className="w-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        Submit Quote Request
                      </Button>
                    </Link>
                    <Link href="/wholesale/products">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Our sales team will review your request</li>
                      <li>• You'll receive a detailed quote within 24 hours</li>
                      <li>• We'll contact you to discuss terms and delivery</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
