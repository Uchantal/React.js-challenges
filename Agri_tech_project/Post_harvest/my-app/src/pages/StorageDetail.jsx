"use client"

import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { MapPin, Thermometer, ArrowLeft, User, Phone, Mail, Calendar } from "lucide-react"

// Mock data for storage facilities
const storageFacilities = [
  {
    id: "1",
    name: "Kigali Central Warehouse",
    location: "Kigali, Rwanda",
    capacity: "5,000 kg",
    type: "Dry Storage",
    temperature: "Room temperature",
    availability: "Available",
    price: "50 RWF/kg/month",
    features: ["24/7 Security", "Loading Dock", "Pest Control"],
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Modern warehouse facility located in central Kigali with easy access to major roads. The facility offers secure dry storage with proper ventilation and pest control measures to ensure your agricultural products remain in optimal condition.",
    owner: {
      name: "Rwanda Storage Solutions Ltd",
      phone: "+250 7XX XXX XXX",
      email: "info@rwandastorage.rw",
      rating: 4.7,
      reviews: 32,
    },
    specifications: [
      { name: "Total Capacity", value: "5,000 kg" },
      { name: "Available Space", value: "3,200 kg" },
      { name: "Temperature", value: "Room temperature (20-25°C)" },
      { name: "Humidity Control", value: "Yes" },
      { name: "Security", value: "24/7 guards, CCTV" },
      { name: "Access Hours", value: "6:00 AM - 8:00 PM daily" },
    ],
  },
  {
    id: "2",
    name: "Musanze Cold Storage",
    location: "Musanze, Rwanda",
    capacity: "3,000 kg",
    type: "Cold Storage",
    temperature: "2-8°C",
    availability: "Limited",
    price: "80 RWF/kg/month",
    features: ["Temperature Controlled", "Backup Generator", "24/7 Monitoring"],
    image: "/placeholder.svg?height=400&width=600",
    description:
      "State-of-the-art cold storage facility in Musanze, perfect for perishable agricultural products. Our facility maintains consistent temperatures between 2-8°C and is equipped with backup generators to ensure uninterrupted power supply.",
    owner: {
      name: "Northern Agri-Storage Cooperative",
      phone: "+250 7XX XXX XXX",
      email: "contact@northernstorage.rw",
      rating: 4.9,
      reviews: 27,
    },
    specifications: [
      { name: "Total Capacity", value: "3,000 kg" },
      { name: "Available Space", value: "500 kg" },
      { name: "Temperature Range", value: "2-8°C (adjustable)" },
      { name: "Humidity Control", value: "Yes (80-90%)" },
      { name: "Backup Power", value: "Generator with automatic switchover" },
      { name: "Monitoring", value: "24/7 temperature and humidity monitoring" },
    ],
  },
]

export default function StorageDetail() {
  const { id } = useParams()
  const [facility, setFacility] = useState(null)
  const [loading, setLoading] = useState(true)
  const [bookingDates, setBookingDates] = useState({ start: "", end: "" })
  const [quantity, setQuantity] = useState(100)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundFacility = storageFacilities.find((f) => f.id === id)
      setFacility(foundFacility)
      setLoading(false)
    }, 500)
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "quantity") {
      setQuantity(value)
    } else {
      setBookingDates((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Booking request submitted for ${quantity}kg from ${bookingDates.start} to ${bookingDates.end}`)
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

  if (!facility) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Storage Facility Not Found</h1>
          <p className="text-gray-600 mb-6">
            The storage facility you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/storage"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Storage Facilities
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/storage" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Storage Facilities
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={facility.image || "/placeholder.svg"} alt={facility.name} className="w-full h-auto rounded-lg" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{facility.name}</h1>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  facility.availability === "Available"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {facility.availability}
              </span>
            </div>
            <p className="text-gray-500">{facility.type}</p>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {facility.location}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Thermometer className="h-4 w-4 mr-1" />
              {facility.temperature}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">{facility.price}</span>
              <span className="text-lg">Capacity: {facility.capacity}</span>
            </div>
            <p className="text-gray-600">{facility.description}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {facility.features.map((feature, index) => (
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
              <h2 className="text-xl font-semibold mb-4">Facility Specifications</h2>
              <div className="space-y-2">
                {facility.specifications.map((spec, index) => (
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
              <h2 className="text-xl font-semibold mb-4">Owner Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-500" />
                  <span>{facility.owner.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span>{facility.owner.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span>{facility.owner.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(facility.owner.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({facility.owner.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Book Storage Space</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="quantity" className="block text-sm font-medium">
                  Quantity (kg)
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="10"
                  max="5000"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={quantity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="start" className="block text-sm font-medium">
                  Start Date
                </label>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <input
                    id="start"
                    name="start"
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={bookingDates.start}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="end" className="block text-sm font-medium">
                  End Date
                </label>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <input
                    id="end"
                    name="end"
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={bookingDates.end}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Book Storage
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

