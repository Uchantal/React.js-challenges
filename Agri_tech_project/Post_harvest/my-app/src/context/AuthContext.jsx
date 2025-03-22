"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Create the context
const AuthContext = createContext()

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext)
}

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in (from localStorage in this example)
    const checkAuthStatus = async () => {
      try {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser)
          setUser(parsedUser)
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error("Error checking auth status:", error)
        // Clear potentially corrupted data
        localStorage.removeItem("user")
      } finally {
        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  // Login function
  const login = async (email, password) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data based on email
      let mockUser

      if (email === "farmer@example.com") {
        mockUser = {
          id: "1",
          name: "Jean Mugabo",
          email: "farmer@example.com",
          role: "farmer",
        }
      } else if (email === "buyer@example.com") {
        mockUser = {
          id: "2",
          name: "Marie Uwase",
          email: "buyer@example.com",
          role: "buyer",
        }
      } else if (email === "service@example.com") {
        mockUser = {
          id: "3",
          name: "Eric Niyonzima",
          email: "service@example.com",
          role: "service",
        }
      } else if (email === "admin@example.com") {
        mockUser = {
          id: "4",
          name: "Chantal Uwimana",
          email: "admin@example.com",
          role: "admin",
        }
      } else {
        throw new Error("Invalid credentials")
      }

      // Save user to state and localStorage
      setUser(mockUser)
      setIsAuthenticated(true)
      localStorage.setItem("user", JSON.stringify(mockUser))

      return { success: true, user: mockUser }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  // Register function
  const register = async (userData) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create mock user
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        role: userData.role || "farmer",
      }

      // Save user to state and localStorage
      setUser(mockUser)
      setIsAuthenticated(true)
      localStorage.setItem("user", JSON.stringify(mockUser))

      return { success: true, user: mockUser }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
  }

  // Context value
  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

