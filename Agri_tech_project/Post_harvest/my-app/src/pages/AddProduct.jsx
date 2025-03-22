"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ImagePlus } from "lucide-react"

export default function AddProduct() {
  const navigate = useNavigate()
  const [date, setDate] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
    location: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      navigate("/dashboard")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Add New Product</h1>

        <form onSubmit={handleSubmit}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Product Information</h2>
              <p className="text-sm text-gray-500">Enter the details of your agricultural product</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Product Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e.g. Premium Rice"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-medium">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="grains">Grains</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="legumes">Legumes</option>
                    <option value="root-crops">Root Crops</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="quantity" className="block text-sm font-medium">
                    Quantity (kg)
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    placeholder="e.g. 500"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="price" className="block text-sm font-medium">
                    Price (RWF/kg)
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    min="1"
                    placeholder="e.g. 300"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="e.g. Kigali, Rwanda"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="harvestDate" className="block text-sm font-medium">
                    Harvest Date
                  </label>
                  <div className="relative">
                    <input
                      id="harvestDate"
                      name="harvestDate"
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe your product, including quality, variety, and any other relevant details"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Product Images</label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 hover:text-green-500"
                    >
                      <span>Upload images</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Product"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

