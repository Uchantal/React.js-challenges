"use client"

import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { MapPin, Weight, ArrowLeft, User, Phone, Mail, Calendar, Truck } from "lucide-react"

// Mock data for transport services
const transportServices = [
  {
    id: "1",
    name: "Kigali Express Logistics",
    location: "Kigali, Rwanda",
    vehicleType: "Refrigerated Truck",
    capacity: "3,000 kg",
    availability: "Available",
    price: "500 RWF/km",
    routes: ["Kigali - Musanze", "Kigali - Huye", "Nationwide"],
    features: ["Temperature Controlled", "GPS Tracking", "Experienced Drivers"],
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Professional logistics company specializing in temperature-controlled transportation of agricultural products. Our refrigerated trucks ensure your produce remains fresh during transit, and our experienced drivers know the best routes across Rwanda.",
    owner: {
      name: "Kigali Express Ltd",
      phone: "+250 7XX XXX XXX",
      email: "info@kigaliexpress.rw",
      rating: 4.8,
      reviews: 42,
    },
    specifications: [
      { name: "Vehicle Type", value: "Refrigerated Truck" },
      { name: "Capacity", value: "3,000 kg" },
      { name: "Temperature Range", value: "0-10°C (adjustable)" },
      { name: "GPS Tracking", value: "Yes (real-time)" },
      { name: "Insurance", value: "Comprehensive cargo insurance" },
      { name: "Operating Hours", value: "24/7" },
    ],
    vehicles: [
      { id: "v1", type: "Small Refrigerated Van", capacity: "1,000 kg", price: "400 RWF/km" },
      { id: "v2", type: "Medium Refrigerated Truck", capacity: "3,000 kg", price: "500 RWF/km" },
      { id: "v3", type: "Large Refrigerated Truck", capacity: "5,000 kg", price: "650 RWF/km" },
    ],
  },
  {
    id: "2",
    name: "Farmers Transport Cooperative",
    location: "Musanze, Rwanda",
    vehicleType: "Flatbed Truck",
    capacity: "5,000 kg",
    availability: "Available",
    price: "400 RWF/km",
    routes: ["Northern Province", "Kigali"],
    features: ["Farmer-owned", "Affordable Rates", "Flexible Scheduling"],
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Farmer-owned cooperative providing affordable transportation services for agricultural products. We understand farmers' needs and offer flexible scheduling to accommodate harvest times and market days.",
    owner: {
      name: "Musanze Farmers Cooperative",
      phone: "+250 7XX XXX XXX",
      email: "transport@musanzefarmers.rw",
      rating: 4.6,
      reviews: 38,
    },
    specifications: [
      { name: "Vehicle Type", value: "Flatbed Truck with tarp cover" },
      { name: "Capacity", value: "5,000 kg" },
      { name: "Weather Protection", value: "Waterproof tarp covering" },
      { name: "GPS Tracking", value: "Yes" },
      { name: "Insurance", value: "Basic cargo insurance" },
      { name: "Operating Hours", value: "6:00 AM - 8:00 PM daily" },
    ],
    vehicles: [
      { id: "v1", type: "Small Flatbed Truck", capacity: "2,000 kg", price: "350 RWF/km" },
      { id: "v2", type: "Medium Flatbed Truck", capacity: "5,000 kg", price: "400 RWF/km" },
      { id: "v3", type: "Large Flatbed Truck", capacity: "8,000 kg", price: "550 RWF/km" },
    ],
  },
]

export default function TransportDetail() {
  const { id } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [bookingData, setBookingData] = useState({
    pickupLocation: "",
    deliveryLocation: "",
    pickupDate: "",
    quantity: 500,
    selectedVehicle: "",
  })

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundService = transportServices.find((s) => s.id === id)
      setService(foundService)
      if (foundService && foundService.vehicles.length > 0) {
        setBookingData((prev) => ({
          ...prev,
          selectedVehicle: foundService.vehicles[0].id,
        }))
      }
      setLoading(false)
    }, 500)
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `Transport booking request submitted for ${bookingData.quantity}kg from ${bookingData.pickupLocation} to ${bookingData.deliveryLocation} on ${bookingData.pickupDate}`,
    )
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 rounded-lg h-96"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="h-6 bg-gray-200 rounded w-full"></div>
                <div className="h-24 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Transport Service Not Found</h1>
          <p className="text-gray-600 mb-6">
            The transport service you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/transport"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Transport Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/transport" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Transport Services
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={service.image || "/placeholder.svg"} alt={service.name} className="w-full h-auto rounded-lg" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{service.name}</h1>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  service.availability === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {service.availability}
              </span>
            </div>
            <p className="text-gray-500">{service.vehicleType}</p>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {service.location}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Weight className="h-4 w-4 mr-1" />
              Capacity: {service.capacity}
            </div>
            <div className="text-2xl font-bold text-green-600">{service.price}</div>
            <p className="text-gray-600">{service.description}</p>

            <div className="mt-2">
              <p className="text-sm font-medium">Routes:</p>
              <ul className="text-sm text-gray-500 list-disc list-inside">
                {service.routes.map((route, index) => (
                  <li key={index}>{route}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {service.features.map((feature, index) => (
                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Service Specifications</h2>
              <div className="space-y-2">
                {service.specifications.map((spec, index) => (
                  <div key={index} className="flex border-b border-gray-100 py-2">
                    <span className="font-medium w-1/3">{spec.name}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Provider Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-500" />
                  <span>{service.owner.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span>{service.owner.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span>{service.owner.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(service.owner.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({service.owner.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-green-500 cursor-pointer"
                onClick={() => setBookingData((prev) => ({ ...prev, selectedVehicle: vehicle.id }))}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{vehicle.type}</h3>
                  <input
                    type="radio"
                    name="selectedVehicle"
                    value={vehicle.id}
                    checked={bookingData.selectedVehicle === vehicle.id}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Truck className="h-4 w-4 mr-1" />
                  Capacity: {vehicle.capacity}
                </div>
                <div className="text-sm font-medium text-green-600">{vehicle.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Book Transport</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="pickupLocation" className="block text-sm font-medium">
                  Pickup Location
                </label>
                <input
                  id="pickupLocation"
                  name="pickupLocation"
                  type="text"
                  placeholder="e.g. Farm in Musanze"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={bookingData.pickupLocation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="deliveryLocation" className="block text-sm font-medium">
                  Delivery Location
                </label>
                <input
                  id="deliveryLocation"
                  name="deliveryLocation"
                  type="text"
                  placeholder="e.g. Market in Kigali"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={bookingData.deliveryLocation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="pickupDate" className="block text-sm font-medium">
                  Pickup Date
                </label>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <input
                    id="pickupDate"
                    name="pickupDate"
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={bookingData.pickupDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="quantity" className="block text-sm font-medium">
                  Quantity (kg)
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="10"
                  max="10000"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={bookingData.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Book Transport
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

