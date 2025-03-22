import { Link } from "react-router-dom"
import { MapPin, Weight } from "lucide-react"

export default function TransportCard({ service }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{service.name}</h3>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              service.availability === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {service.availability}
          </span>
        </div>
        <p className="text-sm text-gray-500">{service.vehicleType}</p>

        <div className="space-y-2 mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {service.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Weight className="h-4 w-4 mr-1" />
            Capacity: {service.capacity}
          </div>
          <p className="text-sm font-medium">Price: {service.price}</p>

          <div className="mt-2">
            <p className="text-sm font-medium">Routes:</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              {service.routes.map((route, index) => (
                <li key={index}>{route}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1 mt-2">
            {service.features.map((feature, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Link
            to={`/transport/${service.id}`}
            className="flex-1 px-4 py-2 text-center border border-gray-300 rounded-md hover:bg-gray-100"
          >
            View Details
          </Link>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Book Transport
          </button>
        </div>
      </div>
    </div>
  )
}

