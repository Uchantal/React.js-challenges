import { Link } from "react-router-dom"
import TransportCard from "../components/TransportCard"

// Mock data for transport services
const transportServices = [
  {
    id: 1,
    name: "Kigali Express Logistics",
    location: "Kigali, Rwanda",
    vehicleType: "Refrigerated Truck",
    capacity: "3,000 kg",
    availability: "Available",
    price: "500 RWF/km",
    routes: ["Kigali - Musanze", "Kigali - Huye", "Nationwide"],
    features: ["Temperature Controlled", "GPS Tracking", "Experienced Drivers"],
  },
  {
    id: 2,
    name: "Farmers Transport Cooperative",
    location: "Musanze, Rwanda",
    vehicleType: "Flatbed Truck",
    capacity: "5,000 kg",
    availability: "Available",
    price: "400 RWF/km",
    routes: ["Northern Province", "Kigali"],
    features: ["Farmer-owned", "Affordable Rates", "Flexible Scheduling"],
  },
  {
    id: 3,
    name: "Rwanda Cargo Movers",
    location: "Huye, Rwanda",
    vehicleType: "Cargo Van",
    capacity: "1,500 kg",
    availability: "Limited",
    price: "350 RWF/km",
    routes: ["Southern Province", "Eastern Province"],
    features: ["Fast Delivery", "Small Batch Transport", "Door-to-Door"],
  },
  {
    id: 4,
    name: "Green Harvest Transport",
    location: "Rubavu, Rwanda",
    vehicleType: "Multi-purpose Truck",
    capacity: "4,000 kg",
    availability: "Available",
    price: "450 RWF/km",
    routes: ["Western Province", "Kigali", "Border Crossings"],
    features: ["Cross-border Transport", "Documentation Assistance", "Insurance"],
  },
  {
    id: 5,
    name: "Eastern Agri Logistics",
    location: "Nyagatare, Rwanda",
    vehicleType: "Grain Truck",
    capacity: "8,000 kg",
    availability: "Limited",
    price: "380 RWF/km",
    routes: ["Eastern Province", "Kigali", "Tanzania Border"],
    features: ["Bulk Transport", "Grain Specialists", "Long Distance"],
  },
  {
    id: 6,
    name: "Lake Kivu Transporters",
    location: "Karongi, Rwanda",
    vehicleType: "Mixed Fleet",
    capacity: "Varies",
    availability: "Available",
    price: "Varies by vehicle",
    routes: ["Western Province", "Nationwide"],
    features: ["Multiple Vehicle Types", "Flexible Capacity", "Experienced Team"],
  },
]

export default function Transport() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Transport Services</h1>
          <p className="text-gray-500">Find reliable transportation for your agricultural products</p>
        </div>
        <Link to="/transport/register" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Register Your Transport Service
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transportServices.map((service) => (
          <TransportCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

