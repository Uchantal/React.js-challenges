import { Link } from "react-router-dom"
import { MapPin, Weight } from "lucide-react"
import { useState } from "react"

export default function TransportCard({ service }) {
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingData, setBookingData] = useState({
    pickupDate: "",
    pickupLocation: "",
    dropoffLocation: "",
    cargoWeight: ""
  })

  const handleBookTransport = () => {
    setShowBookingForm(!showBookingForm)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitBooking = (e) => {
    e.preventDefault()
    // In a real app, this would send the booking data to an API
    alert("Transport booking request submitted successfully!")
    setShowBookingForm(false)
    setBookingData({
      pickupDate: "",
      pickupLocation: "",
      dropoffLocation: "",
      cargoWeight: ""
    })
  }

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

        {showBookingForm && (
          <form onSubmit={handleSubmitBooking} className="mt-4 space-y-3 border-t pt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
              <input
                type="date"
                name="pickupDate"
                value={bookingData.pickupDate}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
              <input
                type="text"
                name="pickupLocation"
                value={bookingData.pickupLocation}
                onChange={handleInputChange}
                placeholder="Enter pickup location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Dropoff Location</label>
              <input
                type="text"
                name="dropoffLocation"
                value={bookingData.dropoffLocation}
                onChange={handleInputChange}
                placeholder="Enter dropoff location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cargo Weight (kg)</label>
              <input
                type="number"
                name="cargoWeight"
                value={bookingData.cargoWeight}
                onChange={handleInputChange}
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Submit Booking
            </button>
          </form>
        )}

        <div className="flex gap-2 mt-4">
          <Link
            to={`/transport/${service.id}`}
            className="flex-1 px-4 py-2 text-center border border-gray-300 rounded-md hover:bg-gray-100"
          >
            View Details
          </Link>
          <button 
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            onClick={handleBookTransport}
          >
            {showBookingForm ? 'Cancel Booking' : 'Book Transport'}
          </button>
        </div>
      </div>
    </div>
  )
}

