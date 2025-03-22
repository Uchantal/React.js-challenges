"use client"

import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Calendar, MapPin, ArrowLeft, User, Phone, Mail } from "lucide-react"

// Mock data for demonstration
const mockProducts = [
  {
    id: "1",
    name: "Premium Rice",
    category: "Grains",
    quantity: "500 kg",
    price: "300 RWF/kg",
    location: "Kigali, Rwanda",
    harvestDate: "2025-01-10",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "High-quality premium rice grown using organic farming methods. This rice has excellent cooking qualities with a pleasant aroma and taste. Ideal for both home cooking and restaurant use.",
    farmer: {
      name: "Jean Mugabo",
      phone: "+250 7XX XXX XXX",
      email: "jean.mugabo@example.com",
      rating: 4.8,
      reviews: 24,
    },
    specifications: [
      { name: "Variety", value: "Long grain" },
      { name: "Cultivation Method", value: "Organic" },
      { name: "Moisture Content", value: "12-14%" },
      { name: "Grade", value: "Premium" },
      { name: "Packaging", value: "Available in 25kg, 50kg bags" },
    ],
  },
  {
    id: "2",
    name: "Organic Potatoes",
    category: "Vegetables",
    quantity: "300 kg",
    price: "200 RWF/kg",
    location: "Musanze, Rwanda",
    harvestDate: "2025-01-15",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Fresh organic potatoes from the volcanic soil of Musanze. These potatoes are known for their excellent taste and texture. Perfect for a variety of dishes including fries, mashed potatoes, and stews.",
    farmer: {
      name: "Marie Uwase",
      phone: "+250 7XX XXX XXX",
      email: "marie.uwase@example.com",
      rating: 4.6,
      reviews: 18,
    },
    specifications: [
      { name: "Variety", value: "Irish potatoes" },
      { name: "Cultivation Method", value: "Organic" },
      { name: "Size", value: "Medium to Large" },
      { name: "Grade", value: "A" },
      { name: "Packaging", value: "Available in 10kg, 25kg bags" },
    ],
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [orderData, setOrderData] = useState({
    quantity: "",
    deliveryAddress: "",
    deliveryDate: ""
  })

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProduct = mockProducts.find((p) => p.id === id)
      setProduct(foundProduct)
      setLoading(false)
    }, 500)
  }, [id])

  const handleContactFarmer = () => {
    setShowContactInfo(!showContactInfo)
  }

  const handlePlaceOrder = () => {
    setShowOrderForm(!showOrderForm)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setOrderData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitOrder = (e) => {
    e.preventDefault()
    // In a real app, this would send the order data to an API
    alert("Order placed successfully!")
    setShowOrderForm(false)
    setOrderData({
      quantity: "",
      deliveryAddress: "",
      deliveryDate: ""
    })
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

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/products"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/products" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto rounded-lg" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {product.location}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              Harvested: {new Date(product.harvestDate).toLocaleDateString()}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">{product.price}</span>
              <span className="text-lg">Available: {product.quantity}</span>
            </div>
            <p className="text-gray-600">{product.description}</p>

            {showContactInfo && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Farmer Contact Information</h3>
                <p className="text-sm text-gray-600">Name: {product.farmer.name}</p>
                <p className="text-sm text-gray-600">Email: {product.farmer.email}</p>
                <p className="text-sm text-gray-600">Phone: {product.farmer.phone}</p>
              </div>
            )}

            {showOrderForm && (
              <form onSubmit={handleSubmitOrder} className="space-y-4 bg-gray-50 p-4 rounded-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
                  <input
                    type="number"
                    name="quantity"
                    value={orderData.quantity}
                    onChange={handleInputChange}
                    min="1"
                    max={parseInt(product.quantity)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={orderData.deliveryAddress}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={orderData.deliveryDate}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Confirm Order
                </button>
              </form>
            )}

            <div className="flex gap-4 pt-4">
              <button 
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={handleContactFarmer}
              >
                {showContactInfo ? 'Hide Contact' : 'Contact Farmer'}
              </button>
              <button 
                className="flex-1 px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50"
                onClick={handlePlaceOrder}
              >
                {showOrderForm ? 'Cancel Order' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Product Specifications</h2>
              <div className="space-y-2">
                {product.specifications.map((spec, index) => (
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
              <h2 className="text-xl font-semibold mb-4">Farmer Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-500" />
                  <span>{product.farmer.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span>{product.farmer.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span>{product.farmer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.farmer.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.farmer.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Transport & Storage Options</h2>
          <p className="text-gray-600 mb-4">
            Need help with transportation or storage for this product? Connect with our verified service providers.
          </p>
          <div className="flex gap-4">
            <Link
              to="/transport"
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 inline-flex items-center"
            >
              Find Transport
            </Link>
            <Link
              to="/storage"
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 inline-flex items-center"
            >
              Find Storage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

