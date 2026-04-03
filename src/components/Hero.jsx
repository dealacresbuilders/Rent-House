"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      console.log("Hero form error:", err);
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#E6FBF8] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-10 grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Rent House in{" "}
            <span className="text-[#6DE1D2]">Faridabad</span>
          </h1>

          <div className="text-lg max-w-3xl space-y-5 text-gray-700 leading-relaxed">
            <p>
              Looking for a comfortable and affordable house for rent in 
              Faridabad? Whether you need a 1BHK, 2BHK, 3BHK, or a luxury 
              independent house, Faridabad offers excellent residential 
              options with great connectivity to Delhi and NCR.
            </p>

            <p>
              With rapidly developing sectors, metro access, schools, 
              hospitals, and shopping complexes nearby, renting a house in 
              Faridabad ensures convenience, safety, and a peaceful lifestyle. 
              Explore verified rental homes that match your budget and 
              lifestyle needs.
            </p>
            <Link href="/rent-house-in-faridabad">
  <button className="relative overflow-hidden bg-[#6DE1D2] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-[#6DE1D2] hover:shadow-xl hover:scale-105 mt-4 cursor-pointer">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#6DE1D2]">

            <h3 className="text-2xl font-semibold text-[#6DE1D2]">
              Free Rental Consultation
            </h3>

            <p className="text-sm mb-6 text-gray-500">
              Fill in your details and our team will help you find the perfect rental home.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#6DE1D2] 
                text-gray-800 placeholder-gray-400
                focus:ring-2 focus:ring-[#6DE1D2] focus:border-[#6DE1D2]
                outline-none transition"
              />

              {/* PHONE */}
              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#6DE1D2] 
                text-gray-800 placeholder-gray-400
                focus:ring-2 focus:ring-[#6DE1D2] focus:border-[#6DE1D2]
                outline-none transition"
              />

              {/* MESSAGE */}
              <textarea
                rows="3"
                name="message"
                placeholder="Your Requirement (Budget / Sector / BHK)"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#6DE1D2] 
                text-gray-800 placeholder-gray-400
                focus:ring-2 focus:ring-[#6DE1D2] focus:border-[#6DE1D2]
                outline-none resize-none transition"
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold 
                bg-[#6DE1D2] text-white 
                hover:opacity-90 
                transition duration-300 
                disabled:opacity-70 shadow-md"
              >
                {loading ? "Submitting..." : "Find Rental House"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;