import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import UserRoute from "./routes/UserRoute"
import AdminRoute from "./routes/AdminRoute"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import AddProduct from "./pages/AddProduct"
import Storage from "./pages/Storage"
import Transport from "./pages/Transport"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import ProductDetail from "./pages/ProductDetail"
import StorageDetail from "./pages/StorageDetail"
import TransportDetail from "./pages/TransportDetail"
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/storage/:id" element={<StorageDetail />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/transport/:id" element={<TransportDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected routes for authenticated users */}
            <Route element={<UserRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products/add" element={<AddProduct />} />
            </Route>

            {/* Protected routes for admin users */}
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App


