import React, { useState } from "react"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent! (You can connect this form to your backend or email API)")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-25 animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Have questions, feedback, or partnership inquiries? We’d love to hear from you.
          </p>
        </div>

        {/* Grid: Contact Form + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-indigo-200"
          >
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">Send us a message</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                  placeholder="Write your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-purple-200 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-purple-700 mb-6">Get in touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MdEmail className="text-indigo-600" size={28} />
                <span className="text-gray-700 text-lg">utkarshsinghdau@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MdPhone className="text-purple-600" size={28} />
                <span className="text-gray-700 text-lg">+91 95267 36143</span>
              </div>
              <div className="flex items-center space-x-4">
                <MdLocationOn className="text-teal-600" size={28} />
                <span className="text-gray-700 text-lg">Jamshedpur, India</span>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                title="Doc-AI Office"
                src="https://www.google.com/maps/embed?pb=!1m18!..."
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl border border-gray-300 shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
