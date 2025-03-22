"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Users, Package, Warehouse, Truck, BarChart3, Settings } from "lucide-react"
import { useAuth } from "../context/AuthContext"

export default function AdminDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")
  const navigate = useNavigate()

  // Mock data for admin dashboard
  const stats = {
    users: 1245,
    products: 3782,
    storage: 87,
    transport: 64,
    transactions: 2156,
  }

  const recentUsers = [
    { id: 1, name: "Jean Mugabo", email: "jean.mugabo@example.com", role: "farmer", date: "2025-01-15" },
    { id: 2, name: "Marie Uwase", email: "marie.uwase@example.com", role: "buyer", date: "2025-01-14" },
    { id: 3, name: "Eric Niyonzima", email: "eric.niyonzima@example.com", role: "service", date: "2025-01-13" },
    { id: 4, name: "Alice Mukamana", email: "alice.mukamana@example.com", role: "farmer", date: "2025-01-12" },
    { id: 5, name: "Robert Mugisha", email: "robert.mugisha@example.com", role: "buyer", date: "2025-01-11" },
  ]

  const handleAddNewUser = () => {
    // In a real app, this would open a modal or navigate to a user creation form
    navigate('/admin/users/new')
  }

  const handleAddNewProduct = () => {
    navigate('/admin/products/new')
  }

  const handleManageStorageFacilities = () => {
    navigate('/admin/storage-facilities')
  }

  const handleManageTransportServices = () => {
    navigate('/admin/transport-services')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Welcome back, {user?.name}</p>
        </div>
        <Link
          to="/settings"
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center"
        >
          <Settings className="mr-2 h-4 w-4" /> Platform Settings
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
              activeTab === "users" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "products" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "services" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("services")}
          >
            Services
          </button>
        </div>
      </div>

      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
                <Users className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">{stats.users}</div>
              <p className="text-xs text-gray-500">+24 this week</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Products Listed</h3>
                <Package className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">{stats.products}</div>
              <p className="text-xs text-gray-500">+156 this week</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Storage Facilities</h3>
                <Warehouse className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">{stats.storage}</div>
              <p className="text-xs text-gray-500">+3 this week</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Transport Services</h3>
                <Truck className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">{stats.transport}</div>
              <p className="text-xs text-gray-500">+5 this week</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Transactions</h3>
                <BarChart3 className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">{stats.transactions}</div>
              <p className="text-xs text-gray-500">+87 this week</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow">
            <h2 className="text-lg font-semibold mb-4">Recent User Registrations</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.role === "farmer"
                              ? "bg-green-100 text-green-800"
                              : user.role === "buyer"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-green-600 hover:text-green-900 mr-3">
                          View
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-900">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow">
              <h2 className="text-lg font-semibold mb-4">Platform Statistics</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Farmers</span>
                    <span className="text-sm text-gray-500">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Buyers</span>
                    <span className="text-sm text-gray-500">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Service Providers</span>
                    <span className="text-sm text-gray-500">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">New user registered</p>
                    <p className="text-sm text-gray-500">Marie Uwase joined as a buyer</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Package className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">New product listed</p>
                    <p className="text-sm text-gray-500">500kg of Premium Rice added by Jean Mugabo</p>
                    <p className="text-xs text-gray-400">3 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Truck className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">New transport service</p>
                    <p className="text-sm text-gray-500">Kigali Express Logistics registered as a service provider</p>
                    <p className="text-xs text-gray-400">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "users" && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">User Management</h2>
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={handleAddNewUser}
            >
              Add New User
            </button>
          </div>
          <p className="text-gray-500 mb-4">
            This section would contain a full user management interface with filtering, pagination, and CRUD operations.
          </p>
          <div className="bg-gray-100 p-12 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">User management interface would be implemented here</p>
          </div>
        </div>
      )}

      {activeTab === "products" && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Product Management</h2>
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={handleAddNewProduct}
            >
              Add New Product
            </button>
          </div>
          <p className="text-gray-500 mb-4">
            This section would contain a full product management interface with filtering, pagination, and CRUD
            operations.
          </p>
          <div className="bg-gray-100 p-12 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Product management interface would be implemented here</p>
          </div>
        </div>
      )}

      {activeTab === "services" && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Service Management</h2>
            <div className="space-x-2">
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleManageStorageFacilities}
              >
                Storage Facilities
              </button>
              <button 
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={handleManageTransportServices}
              >
                Transport Services
              </button>
            </div>
          </div>
          <p className="text-gray-500 mb-4">
            This section would contain management interfaces for both storage facilities and transport services.
          </p>
          <div className="bg-gray-100 p-12 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Service management interface would be implemented here</p>
          </div>
        </div>
      )}
    </div>
  )
}

