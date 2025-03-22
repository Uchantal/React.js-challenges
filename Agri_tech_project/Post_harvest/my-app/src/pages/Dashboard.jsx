"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BarChart3, Package, Plus, ShoppingCart, Truck } from "lucide-react"
import ProductCard from "../components/ProductCard"

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: "Premium Rice",
    category: "Grains",
    quantity: "500 kg",
    price: "300 RWF/kg",
    location: "Kigali, Rwanda",
    harvestDate: "2025-01-10",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Organic Potatoes",
    category: "Vegetables",
    quantity: "300 kg",
    price: "200 RWF/kg",
    location: "Musanze, Rwanda",
    harvestDate: "2025-01-15",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Fresh Maize",
    category: "Grains",
    quantity: "1000 kg",
    price: "150 RWF/kg",
    location: "Huye, Rwanda",
    harvestDate: "2025-01-05",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const navigate = useNavigate()

  const handleFindMoreStorage = () => {
    navigate('/storage')
  }

  const handleViewOrderDetails = (orderId) => {
    // In a real app, this would navigate to a specific order details page
    navigate(`/orders/${orderId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Farmer Dashboard</h1>
          <p className="text-gray-500">Manage your products, storage, and orders</p>
        </div>
        <Link
          to="/products/add"
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Product
        </Link>
      </div>

      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "overview" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "products" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("products")}
          >
            My Products
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "storage" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("storage")}
          >
            Storage
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "orders" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            Orders
          </button>
        </div>
      </div>

      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
                <Package className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-500">+2 from last month</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Storage Used</h3>
                <Package className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">1,800 kg</div>
              <p className="text-xs text-gray-500">of 2,000 kg capacity</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Pending Orders</h3>
                <ShoppingCart className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-500">Requiring action</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
                <BarChart3 className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">320,000 RWF</div>
              <p className="text-xs text-gray-500">+18% from last month</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <p className="text-sm text-gray-500 mb-4">Your recent actions and updates</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Package className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">New product added</p>
                  <p className="text-sm text-gray-500">You added 500kg of Premium Rice</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">New order received</p>
                  <p className="text-sm text-gray-500">Buyer requested 200kg of Organic Potatoes</p>
                  <p className="text-xs text-gray-400">Yesterday</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <Truck className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium">Transport scheduled</p>
                  <p className="text-sm text-gray-500">300kg of Fresh Maize will be picked up tomorrow</p>
                  <p className="text-xs text-gray-400">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {activeTab === "storage" && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow">
          <h3 className="text-lg font-semibold mb-4">Storage Facilities</h3>
          <p className="text-sm text-gray-500 mb-4">Your current storage usage and available facilities</p>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Kigali Warehouse</h3>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">1,000 kg capacity, temperature controlled</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full w-4/5"></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>800 kg used</span>
                <span>200 kg available</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Musanze Cold Storage</h3>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">1,000 kg capacity, refrigerated</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full w-full"></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>1,000 kg used</span>
                <span>0 kg available</span>
              </div>
            </div>
            <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 mt-4" onClick={handleFindMoreStorage}>
              Find More Storage
            </button>
          </div>
        </div>
      )}

      {activeTab === "orders" && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <p className="text-sm text-gray-500 mb-4">Manage your pending and completed orders</p>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Order #1234</h3>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
              </div>
              <p className="text-sm text-gray-500 mb-1">200kg of Organic Potatoes</p>
              <p className="text-sm text-gray-500 mb-2">Buyer: Kigali Foods Ltd</p>
              <div className="flex justify-between text-xs">
                <span>Order Date: Jan 15, 2025</span>
                <button 
                  className="px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-200"
                  onClick={() => handleViewOrderDetails('1234')}
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Order #1233</h3>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">In Transit</span>
              </div>
              <p className="text-sm text-gray-500 mb-1">300kg of Fresh Maize</p>
              <p className="text-sm text-gray-500 mb-2">Buyer: Rwanda Grains Co.</p>
              <div className="flex justify-between text-xs">
                <span>Order Date: Jan 12, 2025</span>
                <button 
                  className="px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-200"
                  onClick={() => handleViewOrderDetails('1233')}
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Order #1232</h3>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
              </div>
              <p className="text-sm text-gray-500 mb-1">100kg of Premium Rice</p>
              <p className="text-sm text-gray-500 mb-2">Buyer: Huye Restaurant</p>
              <div className="flex justify-between text-xs">
                <span>Order Date: Jan 10, 2025</span>
                <button 
                  className="px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-200"
                  onClick={() => handleViewOrderDetails('1232')}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

