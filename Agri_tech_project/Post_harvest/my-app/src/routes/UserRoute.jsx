"use client"

import { useState, useEffect } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function UserRoute() {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = async () => {
      // In a real app, this would check with your backend
      await new Promise((resolve) => setTimeout(resolve, 500))
      setIsChecking(false)
    }

    checkAuth()
  }, [])

  // Show loading state while checking authentication
  if (loading || isChecking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    )
  }

  // If not authenticated, redirect to login page with return URL
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  // If authenticated, render the protected route
  return <Outlet />
}

