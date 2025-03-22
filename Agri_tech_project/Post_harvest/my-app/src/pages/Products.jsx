"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
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
    image: "/images/premium rice.jpg",
  },
  {
    id: 2,
    name: "Organic Potatoes",
    category: "Vegetables",
    quantity: "300 kg",
    price: "200 RWF/kg",
    location: "Musanze, Rwanda",
    harvestDate: "2025-01-15",
    image: "/images/potatoes-harvesting-2400.jpg",
  },
  {
    id: 3,
    name: "Fresh Maize",
    category: "Grains",
    quantity: "1000 kg",
    price: "150 RWF/kg",
    location: "Huye, Rwanda",
    harvestDate: "2025-01-05",
    image: "/images/Fresh maize.jpg",
  },
  {
    id: 4,
    name: "Organic Tomatoes",
    category: "Vegetables",
    quantity: "200 kg",
    price: "350 RWF/kg",
    location: "Rubavu, Rwanda",
    harvestDate: "2025-01-18",
    image: "/images/Tomatoes.jpg",
  },
  {
    id: 5,
    name: "Fresh Beans",
    category: "Legumes",
    quantity: "400 kg",
    price: "250 RWF/kg",
    location: "Nyagatare, Rwanda",
    harvestDate: "2025-01-12",
    image: "/images/beans.jpg",
  },
  {
    id: 6,
    name: "Sweet Potatoes",
    category: "Root Crops",
    quantity: "600 kg",
    price: "180 RWF/kg",
    location: "Karongi, Rwanda",
    harvestDate: "2025-01-08",
    image: "/images/sweetpotatoes.jpg",
  },
]

export default function Products() {
  const [showFilters, setShowFilters] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 500])

  // Filter products based on search term, category, and price range
  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === "all" || product.category === category
    const price = Number.parseInt(product.price.split(" ")[0])
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1]

    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Available Products</h1>
          <p className="text-gray-500">Browse and find agricultural products from local farmers</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, locations..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="md:w-auto w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center justify-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
          </button>
        </div>

        {showFilters && (
          <div className="bg-gray-50 p-4 rounded-lg mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Grains">Grains</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Legumes">Legumes</option>
                <option value="Root Crops">Root Crops</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price Range (RWF/kg)</label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                  min="0"
                  max={priceRange[1]}
                />
                <span>to</span>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  min={priceRange[0]}
                />
              </div>
            </div>
            <div className="flex items-end">
              <button
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={() => {
                  setSearchTerm("")
                  setCategory("all")
                  setPriceRange([0, 500])
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}

