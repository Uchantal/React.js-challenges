"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Leaf, ArrowLeft } from "lucide-react"

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    setIsLoading(true)

    // Simulate API call
    try {
      // In a real application, this would be an API call to send a password reset email
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
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
          <h1 className="text-2xl font-semibold tracking-tight">Reset your password</h1>
          <p className="text-sm text-gray-500">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {!isSubmitted ? (
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

                {error && <div className="text-sm text-red-500 font-medium">{error}</div>}
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send reset link"}
                </button>

                <div className="mt-4 text-center">
                  <Link to="/login" className="text-green-600 hover:underline flex items-center justify-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to login
                  </Link>
                </div>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center">
              <h3 className="text-lg font-medium mb-2">Check your email</h3>
              <p className="text-sm text-gray-500 mb-2">
                We've sent a password reset link to <span className="font-medium">{email}</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">
                If you don't see it, check your spam folder or try again with a different email address.
              </p>
              <Link
                to="/login"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 inline-flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Link>
            </div>
          )}
        </div>

        <div className="text-center text-sm text-gray-500">
          <Link to="/login" className="text-green-600 hover:underline">
            Sign in
          </Link>{" "}
          or{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  )
}

