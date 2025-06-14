"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, DollarSign, ShoppingCart, AlertTriangle } from "lucide-react"
import MainNavigation from "@/components/main-navigation"
import Link from "next/link"

export default function SparePartsDashboard() {
  const [activeTab, setActiveTab] = useState("inventory")

  const inventory = [
    {
      id: "SP001",
      name: "Brake Pads - Toyota Camry",
      category: "Brakes",
      stock: 25,
      price: 89.99,
      status: "in-stock",
      supplier: "OEM Parts Co.",
    },
    {
      id: "SP002",
      name: "Oil Filter - Honda Civic",
      category: "Engine",
      stock: 5,
      price: 12.99,
      status: "low-stock",
      supplier: "AutoParts Plus",
    },
    {
      id: "SP003",
      name: "Headlight Assembly - BMW X5",
      category: "Lighting",
      stock: 0,
      price: 299.99,
      status: "out-of-stock",
      supplier: "Premium Auto",
    },
  ]

  const orders = [
    {
      id: "ORD001",
      customer: "Mike Johnson",
      items: "Brake Pads, Oil Filter",
      total: 102.98,
      status: "processing",
      date: "2024-01-15",
    },
    {
      id: "ORD002",
      customer: "Sarah Wilson",
      items: "Headlight Assembly",
      total: 299.99,
      status: "shipped",
      date: "2024-01-14",
    },
    {
      id: "ORD003",
      customer: "David Brown",
      items: "Oil Filter x2",
      total: 25.98,
      status: "delivered",
      date: "2024-01-13",
    },
  ]

  const getStockStatus = (status: string) => {
    switch (status) {
      case "in-stock":
        return "bg-green-100 text-green-800"
      case "low-stock":
        return "bg-yellow-100 text-yellow-800"
      case "out-of-stock":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getOrderStatus = (status: string) => {
    switch (status) {
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNavigation />

      {/* Breadcrumbs */}
      <div className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/vehiclestore" className="hover:text-blue-600">
              VehicleStore
            </Link>
            <span className="mx-2">/</span>
            <Link href="/vehiclestore/spare-parts" className="hover:text-blue-600">
              Spare Parts
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Provider Dashboard</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Spare Parts Provider Dashboard</h1>
          <p className="text-gray-600">Manage your auto parts inventory and orders</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Products</p>
                  <p className="text-2xl font-bold">1,247</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Sales</p>
                  <p className="text-2xl font-bold">$2,340</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Inventory Management</CardTitle>
                    <CardDescription>Manage your spare parts inventory and stock levels</CardDescription>
                  </div>
                  <Button>Add New Product</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventory.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Package className="h-8 w-8 text-gray-400" />
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600">Category: {item.category}</p>
                          <p className="text-sm text-gray-600">Supplier: {item.supplier}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">${item.price}</p>
                        <p className="text-sm text-gray-600">Stock: {item.stock}</p>
                        <Badge className={getStockStatus(item.status)}>{item.status.replace("-", " ")}</Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          Restock
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>Process and track customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <ShoppingCart className="h-8 w-8 text-gray-400" />
                        <div>
                          <h3 className="font-semibold">Order #{order.id}</h3>
                          <p className="text-sm text-gray-600">Customer: {order.customer}</p>
                          <p className="text-sm text-gray-600">Items: {order.items}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">${order.total}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                        <Badge className={getOrderStatus(order.status)}>{order.status}</Badge>
                      </div>
                      <div className="flex space-x-2">
                        {order.status === "processing" && (
                          <Button size="sm" variant="outline">
                            Ship Order
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suppliers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Supplier Management</CardTitle>
                <CardDescription>Manage your parts suppliers and relationships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">OEM Parts Co.</h3>
                      <p className="text-sm text-gray-600">Primary supplier for OEM parts</p>
                      <p className="text-sm text-gray-600">Contact: john@oemparts.com</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                      <p className="text-sm text-gray-600 mt-1">Rating: 4.8/5</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">AutoParts Plus</h3>
                      <p className="text-sm text-gray-600">Aftermarket parts supplier</p>
                      <p className="text-sm text-gray-600">Contact: sales@autopartsplus.com</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                      <p className="text-sm text-gray-600 mt-1">Rating: 4.5/5</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                </div>
                <div className="mt-6">
                  <Button>Add New Supplier</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Analytics</CardTitle>
                  <CardDescription>Track your sales performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>This Week</span>
                      <span className="font-semibold">$8,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>This Month</span>
                      <span className="font-semibold">$32,100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Revenue</span>
                      <span className="font-semibold">$156,780</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Selling Parts</CardTitle>
                  <CardDescription>Most popular parts this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Brake Pads</span>
                      <span className="font-semibold">145 sold</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Oil Filters</span>
                      <span className="font-semibold">98 sold</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Air Filters</span>
                      <span className="font-semibold">76 sold</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
