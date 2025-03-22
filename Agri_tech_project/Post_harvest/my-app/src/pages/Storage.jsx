import { Link } from "react-router-dom"
import StorageCard from "../components/StorageCard"

// Mock data for storage facilities
const storageFacilities = [
  {
    id: 1,
    name: "Kigali Central Warehouse",
    location: "Kigali, Rwanda",
    capacity: "5,000 kg",
    type: "Dry Storage",
    temperature: "Room temperature",
    availability: "Available",
    price: "50 RWF/kg/month",
    features: ["24/7 Security", "Loading Dock", "Pest Control"],
  },
  {
    id: 2,
    name: "Musanze Cold Storage",
    location: "Musanze, Rwanda",
    capacity: "3,000 kg",
    type: "Cold Storage",
    temperature: "2-8°C",
    availability: "Limited",
    price: "80 RWF/kg/month",
    features: ["Temperature Controlled", "Backup Generator", "24/7 Monitoring"],
  },
  {
    id: 3,
    name: "Huye Agricultural Depot",
    location: "Huye, Rwanda",
    capacity: "10,000 kg",
    type: "Dry Storage",
    temperature: "Room temperature",
    availability: "Available",
    price: "45 RWF/kg/month",
    features: ["Bulk Storage", "Sorting Area", "Quality Control"],
  },
  {
    id: 4,
    name: "Rubavu Refrigerated Facility",
    location: "Rubavu, Rwanda",
    capacity: "2,500 kg",
    type: "Cold Storage",
    temperature: "0-4°C",
    availability: "Available",
    price: "85 RWF/kg/month",
    features: ["Humidity Control", "Backup Power", "Loading Equipment"],
  },
  {
    id: 5,
    name: "Nyagatare Grain Silo",
    location: "Nyagatare, Rwanda",
    capacity: "15,000 kg",
    type: "Grain Storage",
    temperature: "Controlled",
    availability: "Limited",
    price: "40 RWF/kg/month",
    features: ["Aeration System", "Moisture Monitoring", "Pest Management"],
  },
  {
    id: 6,
    name: "Karongi Community Storage",
    location: "Karongi, Rwanda",
    capacity: "8,000 kg",
    type: "Multi-purpose",
    temperature: "Varies by section",
    availability: "Available",
    price: "55 RWF/kg/month",
    features: ["Cooperative Owned", "Training Facilities", "Market Access"],
  },
]

export default function Storage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Storage Facilities</h1>
          <p className="text-gray-500">Find suitable storage for your agricultural products</p>
        </div>
        <Link to="/storage/register" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Register Your Storage Facility
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storageFacilities.map((facility) => (
          <StorageCard key={facility.id} facility={facility} />
        ))}
      </div>
    </div>
  )
}

