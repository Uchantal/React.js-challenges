"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock, CheckCircle2, Linkedin, Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    try {
      // In a real application, this would be an API call to send the contact form
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (err) {
      console.error("Error submitting form:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "#", className: "bg-blue-600" },
    { name: "Facebook", icon: Facebook, url: "#", className: "bg-blue-500" },
    { name: "Instagram", icon: Instagram, url: "#", className: "bg-pink-500" },
    { name: "YouTube", icon: Youtube, url: "#", className: "bg-red-600" },
    { name: "Twitter", icon: Twitter, url: "#", className: "bg-black" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Get in touch with our team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  })
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    KG 123 Street, Kigali Heights
                    <br />
                    Kigali, Rwanda
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+250 7XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@postharvest.rw</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className={`${link.className} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Need Immediate Assistance?</h3>
            <p className="text-gray-600 mb-4">
              For urgent inquiries, please call our customer support line or send us an email.
            </p>
            <Link
              to="tel:+250700000000"
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 inline-flex items-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </Link>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Find Us</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
          <p className="text-gray-600">
            Map will be displayed here. In a real application, you would integrate Google Maps or another mapping
            service.
          </p>
        </div>
      </div>
    </div>
  )
}

