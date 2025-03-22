"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Leaf, Menu, X, User, LogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"

const routes = [
  {
    name: "Home",
    path: "/",
    public: true,
  },
  {
    name: "Products",
    path: "/products",
    public: true,
  },
  {
    name: "Storage Facilities",
    path: "/storage",
    public: true,
  },
  {
    name: "Transport Services",
    path: "/transport",
    public: true,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    public: false,
  },
  {
    name: "About Us",
    path: "/about",
    public: true,
  },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    // Redirect to home page after logout
    window.location.href = "/"
  }

  // Filter routes based on authentication status
  const filteredRoutes = routes.filter((route) => route.public || isAuthenticated)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="font-bold hidden sm:inline-block">Post-Harvest Manager</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          {filteredRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`transition-colors hover:text-foreground/80 ${
                location.pathname === route.path ? "text-foreground font-bold" : "text-foreground/60"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">{user?.name}</div>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <Link to="/login">Login</Link>
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                <Link to="/register">Register</Link>
              </button>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden flex-1 justify-end">
          <button className="p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>

          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-white">
              <div className="flex justify-end p-4">
                <button className="p-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="flex flex-col items-center space-y-6 p-4">
                <Link to="/" className="flex items-center space-x-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span className="font-bold">Post-Harvest Manager</span>
                </Link>
                {filteredRoutes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`text-lg font-medium transition-colors hover:text-foreground/80 ${
                      location.pathname === route.path ? "text-foreground font-bold" : "text-foreground/60"
                    }`}
                  >
                    {route.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 mt-6 w-full">
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center justify-center space-x-2 py-2">
                        <User className="h-4 w-4" />
                        <span>{user?.name}</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        <Link to="/login">Login</Link>
                      </button>
                      <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                        <Link to="/register">Register</Link>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

