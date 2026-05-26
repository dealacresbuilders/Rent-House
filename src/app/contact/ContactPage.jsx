"use client"

import { useState } from "react"
import Image from "next/image"
import AlertPopup from "@/components/AlertPopup"

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const [popup, setPopup] = useState({
    open: false,
    type: "",
    message: "",
  })

  const showPopup = (type, message) => {
    setPopup({
      open: true,
      type,
      message,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 10) return
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.phone.length !== 10) {
      showPopup("error", "Phone number must be 10 digits")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website: "renthouseinfaridabad.com",
        }),
      })

      const result = await res.json()

      if (result.success) {
        showPopup(
          "success",
          "Your rental inquiry has been submitted!"
        )

        setFormData({
          name: "",
          phone: "",
          message: "",
        })
      } else {
        showPopup(
          "error",
          "Something went wrong. Please try again."
        )
      }
    } catch (err) {
      showPopup(
        "error",
        "Server error. Please try later."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() =>
          setPopup((prev) => ({
            ...prev,
            open: false,
          }))
        }
      />

      <section className="bg-gradient-to-b from-white to-[#E6FBF8] py-20 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Let’s Find Your{" "}
              <span className="text-[#6DE1D2]">
                Perfect Rental Home
              </span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Whether you are looking for a 1BHK, 2BHK,
              3BHK, or an independent house in Faridabad,
              our team is here to help you find the right
              rental property.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* FORM */}
            <div
              className="bg-white border border-[#6DE1D2]/40
              rounded-3xl p-10 shadow-lg
              hover:shadow-xl transition duration-500"
            >

              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                Register Your Rental Requirement
              </h3>

              <p className="text-gray-500 mb-8 text-sm">
                Fill in your details and our rental consultant
                will contact you shortly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div>
                  <label className="text-sm text-gray-600">
                    Full Name*
                  </label>

                  <input
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl
                    bg-[#E6FBF8]
                    border border-[#6DE1D2]/40
                    text-gray-900
                    focus:ring-2 focus:ring-[#6DE1D2]
                    outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Phone*
                  </label>

                  <input
                    name="phone"
                    required
                    inputMode="numeric"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl
                    bg-[#E6FBF8]
                    border border-[#6DE1D2]/40
                    text-gray-900
                    focus:ring-2 focus:ring-[#6DE1D2]
                    outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us your budget, preferred sector, and BHK..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl
                    bg-[#E6FBF8]
                    border border-[#6DE1D2]/40
                    text-gray-900
                    focus:ring-2 focus:ring-[#6DE1D2]
                    outline-none resize-none transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full
                  font-semibold
                  bg-[#6DE1D2]
                  text-white
                  hover:opacity-90
                  transition shadow-md"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Rental Inquiry"}
                </button>

              </form>
            </div>

            {/* IMAGE */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden border border-[#6DE1D2]/40 shadow-lg">

              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Rental Consultation"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            </div>
          </div>

          {/* MAP */}
          <div className="mt-24 rounded-3xl overflow-hidden border border-[#6DE1D2]/40 shadow-lg">

            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=29.134042,75.740044&z=18&output=embed"
              className="w-full h-[500px] border-0"
              loading="lazy"
            />

          </div>

        </div>

      </section>
    </>
  )
}