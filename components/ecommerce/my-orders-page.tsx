import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Truck, CheckCircle, Clock } from "lucide-react"

export default function MyOrdersPage() {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 299.99,
      items: [
        {
          name: "Wireless Headphones",
          quantity: 1,
          price: 129.99,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Phone Case",
          quantity: 2,
          price: 24.99,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      tracking: "TRK123456789",
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-18",
      status: "shipped",
      total: 89.99,
      items: [
        {
          name: "Cotton T-Shirt",
          quantity: 3,
          price: 29.99,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      tracking: "TRK987654321",
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-20",
      status: "processing",
      total: 159.99,
      items: [
        {
          name: "Smart Watch",
          quantity: 1,
          price: 159.99,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      tracking: null,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "shipped":
        return <Truck className="h-5 w-5 text-blue-600" />
      case "processing":
        return <Clock className="h-5 w-5 text-yellow-600" />
      default:
        return <Package className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <span>/</span>
        <Link href="/ecommerce" className="hover:text-gray-700">
          E-commerce
        </Link>
        <span>/</span>
        <span className="text-gray-900">My Orders</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Orders</h1>
        <p className="text-gray-600">Track and manage your order history</p>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id} className="overflow-hidden">
            <CardContent className="p-6">
              {/* Order Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{order.id}</h3>
                  <p className="text-sm text-gray-500">Ordered on {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon(order.status)}
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="font-semibold">${order.total.toFixed(2)}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-3 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Actions */}
              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  {order.tracking && (
                    <p className="text-sm text-gray-500">
                      Tracking: <span className="font-mono">{order.tracking}</span>
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  {order.status === "delivered" && (
                    <Button variant="outline" size="sm">
                      Leave Review
                    </Button>
                  )}
                  {order.tracking && (
                    <Button variant="outline" size="sm">
                      Track Package
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {order.status === "delivered" && <Button size="sm">Buy Again</Button>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State (if no orders) */}
      {orders.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Package className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
            <p className="text-gray-500 mb-6">Start shopping to see your orders here</p>
            <Button asChild>
              <Link href="/ecommerce">Start Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
