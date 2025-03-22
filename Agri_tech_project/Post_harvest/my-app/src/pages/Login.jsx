"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Leaf } from "lucide-react"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")

  // Get the redirect path from location state or default to dashboard
  const from = location.state?.from || "/dashboard"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    setIsLoading(true)

    try {
      const result = await login(email, password)

      if (result.success) {
        // Redirect to the page they tried to visit or dashboard
        navigate(from, { replace: true })
      } else {
        setError(result.error || "Invalid email or password. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto flex items-center justify-center">
            <Leaf className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-gray-500">Enter your credentials to access your account</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember" className="text-sm font-medium leading-none">
                  Remember me
                </label>
              </div>

              {error && <div className="text-sm text-red-500 font-medium">{error}</div>}
            </div>
            <div className="mt-6 space-y-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>

              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="text-green-600 hover:underline">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Demo accounts:</p>
          <p>farmer@example.com, buyer@example.com, service@example.com</p>
          <p>(use any password)</p>
        </div>

        <div className="text-center text-sm text-gray-500">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="text-green-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-green-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  )
}

