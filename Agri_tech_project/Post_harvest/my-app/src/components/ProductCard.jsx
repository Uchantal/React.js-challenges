import { Link } from "react-router-dom"
import { Calendar, MapPin } from "lucide-react"

export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <div className="relative h-48">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
        <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <span className="font-bold text-green-600">{product.price}</span>
        </div>
        <div className="space-y-2 mt-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {product.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            Harvested: {new Date(product.harvestDate).toLocaleDateString()}
          </div>
          <p className="text-sm">Available: {product.quantity}</p>
        </div>
        <div className="flex gap-2 mt-4">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 px-4 py-2 text-center border border-gray-300 rounded-md hover:bg-gray-100"
          >
            View Details
          </Link>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Contact Farmer
          </button>
        </div>
      </div>
    </div>
  )
}

