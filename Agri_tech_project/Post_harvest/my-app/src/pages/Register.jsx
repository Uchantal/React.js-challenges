"use client"

import { useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { Leaf } from "lucide-react"
import { useAuth } from "../context/AuthContext"

export default function Register() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const userType = searchParams.get("type") || "farmer"
  const [activeTab, setActiveTab] = useState(userType)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const { register } = useAuth()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: userType,
    // Farmer specific
    farmLocation: "",
    farmSize: "",
    mainCrop: "",
    // Buyer specific
    companyName: "",
    businessType: "",
    buyerLocation: "",
    // Service provider specific
    serviceType: "",
    serviceLocation: "",
    serviceCapacity: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setFormData((prev) => ({ ...prev, role: tab }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const result = await register(formData)

      if (result.success) {
        navigate("/dashboard")
      } else {
        setError(result.error || "Registration failed. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <div className="mx-auto flex items-center justify-center mb-4">
              <Leaf className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm text-gray-500">
              Join the Post-Harvest Manager platform to connect with buyers and reduce post-harvest losses
            </p>
          </div>

          <div className="mb-6">
            <div className="flex border-b">
              <button
                className={`flex-1 px-4 py-2 font-medium ${
                  activeTab === "farmer" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
                }`}
                onClick={() => handleTabChange("farmer")}
              >
                Farmer
              </button>
              <button
                className={`flex-1 px-4 py-2 font-medium ${
                  activeTab === "buyer" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
                }`}
                onClick={() => handleTabChange("buyer")}
              >
                Buyer
              </button>
              <button
                className={`flex-1 px-4 py-2 font-medium ${
                  activeTab === "service" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
                }`}
                onClick={() => handleTabChange("service")}
              >
                Service Provider
              </button>
            </div>
          </div>

          {error && <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {activeTab === "farmer" && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="farmLocation" className="block text-sm font-medium">
                      Farm location
                    </label>
                    <input
                      id="farmLocation"
                      name="farmLocation"
                      type="text"
                      placeholder="e.g. Kigali, Rwanda"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.farmLocation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="farmSize" className="block text-sm font-medium">
                      Farm size (hectares)
                    </label>
                    <input
                      id="farmSize"
                      name="farmSize"
                      type="number"
                      min="0.1"
                      step="0.1"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.farmSize}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mainCrop" className="block text-sm font-medium">
                      Main crops
                    </label>
                    <select
                      id="mainCrop"
                      name="mainCrop"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.mainCrop}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select main crop</option>
                      <option value="rice">Rice</option>
                      <option value="maize">Maize</option>
                      <option value="potatoes">Potatoes</option>
                      <option value="beans">Beans</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="fruits">Fruits</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </>
              )}

              {activeTab === "buyer" && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="block text-sm font-medium">
                      Company name
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="businessType" className="block text-sm font-medium">
                      Business type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select business type</option>
                      <option value="retailer">Retailer</option>
                      <option value="wholesaler">Wholesaler</option>
                      <option value="processor">Processor</option>
                      <option value="exporter">Exporter</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="buyerLocation" className="block text-sm font-medium">
                      Business location
                    </label>
                    <input
                      id="buyerLocation"
                      name="buyerLocation"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.buyerLocation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              {activeTab === "service" && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="serviceType" className="block text-sm font-medium">
                      Service type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select service type</option>
                      <option value="transport">Transport</option>
                      <option value="storage">Storage</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="serviceLocation" className="block text-sm font-medium">
                      Service location
                    </label>
                    <input
                      id="serviceLocation"
                      name="serviceLocation"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.serviceLocation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="serviceCapacity" className="block text-sm font-medium">
                      Capacity
                    </label>
                    <input
                      id="serviceCapacity"
                      name="serviceCapacity"
                      type="text"
                      placeholder="e.g. 5 tons, 1000 sq meters"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.serviceCapacity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

