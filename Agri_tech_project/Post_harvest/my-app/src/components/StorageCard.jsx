import { Link } from "react-router-dom"
import { MapPin, Thermometer } from "lucide-react"

export default function StorageCard({ facility }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{facility.name}</h3>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              facility.availability === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {facility.availability}
          </span>
        </div>
        <p className="text-sm text-gray-500">{facility.type}</p>

        <div className="space-y-2 mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {facility.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Thermometer className="h-4 w-4 mr-1" />
            {facility.temperature}
          </div>
          <p className="text-sm">Capacity: {facility.capacity}</p>
          <p className="text-sm font-medium">Price: {facility.price}</p>

          <div className="flex flex-wrap gap-1 mt-2">
            {facility.features.map((feature, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Link
            to={`/storage/${facility.id}`}
            className="flex-1 px-4 py-2 text-center border border-gray-300 rounded-md hover:bg-gray-100"
          >
            View Details
          </Link>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Book Storage
          </button>
        </div>
      </div>
    </div>
  )
}

