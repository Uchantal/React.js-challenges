import { Link } from "react-router-dom"
import { MapPin, Thermometer } from "lucide-react"
import { useState } from "react"

export default function StorageCard({ facility }) {
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingData, setBookingData] = useState({
    startDate: "",
    duration: "",
    quantity: ""
  })

  const handleBookStorage = () => {
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
    // In a real app, this would make an API call to submit the booking
    alert(`Storage booked successfully!\nStart Date: ${bookingData.startDate}\nDuration: ${bookingData.duration} days\nQuantity: ${bookingData.quantity} kg`)
    setShowBookingForm(false)
    setBookingData({
      startDate: "",
      duration: "",
      quantity: ""
    })
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{facility.name}</h3>
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
        <p className="text-gray-500 mt-1">{facility.type}</p>
        <div className="space-y-2 mt-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {facility.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Thermometer className="h-4 w-4 mr-1" />
            {facility.temperature}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Capacity: {facility.capacity}</span>
            <span className="font-bold text-green-600">{facility.price}</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {facility.features.map((feature, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {showBookingForm && (
          <form onSubmit={handleSubmitBooking} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={bookingData.startDate}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration (days)</label>
              <input
                type="number"
                name="duration"
                value={bookingData.duration}
                onChange={handleInputChange}
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
              <input
                type="number"
                name="quantity"
                value={bookingData.quantity}
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
            to={`/storage/${facility.id}`}
            className="flex-1 px-4 py-2 text-center border border-gray-300 rounded-md hover:bg-gray-100"
          >
            View Details
          </Link>
          <button 
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            onClick={handleBookStorage}
          >
            {showBookingForm ? 'Cancel Booking' : 'Book Storage'}
          </button>
        </div>
      </div>
    </div>
  )
}

