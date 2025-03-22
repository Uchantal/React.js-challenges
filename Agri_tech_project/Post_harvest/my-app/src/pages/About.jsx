import { Link } from "react-router-dom"
import { Leaf, Users, TrendingUp, BarChart3 } from "lucide-react"

export default function About() {
  const teamMembers = [
    { name: "Chantal Uwimana", role: "Founder & CEO" },
    { name: "Jean Mugabo", role: "Agricultural Expert" },
    { name: "Marie Uwase", role: "Technology Lead" },
    { name: "Eric Niyonzima", role: "Operations Manager" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Post-Harvest Manager</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting farmers with buyers, transporters, and storage facilities to reduce post-harvest losses and improve
          market access in Rwanda.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to embrace technology in Rwanda's Agriculture sector by creating a connective platform to
            help farmers meet with their relevant stakeholders and encourage them to adapt to modern Agriculture to
            ensure food security in the Country and abroad.
          </p>
          <p className="text-gray-600 mb-4">
            According to the Rwanda Agriculture and Animal Resources Development Board (RAB), post-harvest losses in
            some agricultural value chains reach up to 30%. These losses are primarily due to inadequate storage
            facilities leading crops to spoilage before getting to the market, limited transportation options, and
            insufficient market access.
          </p>
          <p className="text-gray-600">
            Our platform addresses these challenges by providing a digital solution that connects all stakeholders in
            the agricultural value chain, ensuring efficient post-harvest management and improved market access.
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 text-center rounded-lg shadow">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">30%</h3>
              <p className="text-gray-500">Reduction in post-harvest losses</p>
            </div>
            <div className="bg-white p-6 text-center rounded-lg shadow">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1,000+</h3>
              <p className="text-gray-500">Farmers connected</p>
            </div>
            <div className="bg-white p-6 text-center rounded-lg shadow">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">20%</h3>
              <p className="text-gray-500">Increase in farmer income</p>
            </div>
            <div className="bg-white p-6 text-center rounded-lg shadow">
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-500">Storage facilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Register & List Products</h3>
            <p className="text-gray-600">
              Farmers register on the platform and list their products with details such as quantity, quality, and
              harvest date. Storage providers and transporters also register their services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect & Negotiate</h3>
            <p className="text-gray-600">
              Buyers browse available products and connect with farmers. Farmers can find suitable storage facilities
              and transport services to ensure their products reach the market in good condition.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Transactions</h3>
            <p className="text-gray-600">
              Once agreements are reached, transactions are completed securely. The platform facilitates the entire
              process from farm to market, reducing losses and increasing efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt={`${member.name} - ${member.role}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our platform? Want to learn more about how we can help reduce post-harvest losses?
            Contact us today!
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="/contact" className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

