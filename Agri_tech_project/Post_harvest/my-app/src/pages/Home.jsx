import { Link } from "react-router-dom"
import { ArrowRight, Leaf, ShoppingCart, Truck } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Post-Harvest Manager</h1>
            <p className="text-xl mb-8">
              Connecting farmers with buyers, transporters, and storage facilities to reduce post-harvest losses and
              improve market access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-white text-green-800 font-medium rounded-md hover:bg-gray-100 text-center"
              >
                Register Now
              </Link>
              <Link
                to="/products"
                className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-green-700 text-center"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Farmers</h3>
              <p className="text-gray-600 mb-4">
                List your products, find storage facilities, and connect with buyers and transporters.
              </p>
              <Link to="/register?type=farmer" className="text-green-600 font-medium flex items-center">
                Register as Farmer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Buyers</h3>
              <p className="text-gray-600 mb-4">
                Browse available products, connect with farmers, and arrange for transportation.
              </p>
              <Link to="/register?type=buyer" className="text-green-600 font-medium flex items-center">
                Register as Buyer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Service Providers</h3>
              <p className="text-gray-600 mb-4">
                Register your transport or storage services to help farmers reduce harvest losses.
              </p>
              <Link to="/register?type=service" className="text-green-600 font-medium flex items-center">
                Register as Provider <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">20%</h3>
              <p className="text-lg">Post-harvest losses reduced</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-lg">Farmers connected to the markets</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">400+</h3>
              <p className="text-lg">Storage facilities available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to embrace technology in Rwanda's Agriculture sector through this  connective digital platform to
              help farmers meet with their relevant stakeholders, encourage them to adapt to modern Agriculture to
              ensure food security in the Country and abroad.
            </p>
            <Link
              to="/about"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 inline-block"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

