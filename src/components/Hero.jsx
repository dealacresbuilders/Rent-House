"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import AlertPopup from "@/components/AlertPopup";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

   const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
  open: false,
  type: "",
  message: "",
});

  

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
 setPopup({
  open: true,
  type: "error",
  message: "Phone number must be 10 digits",
});      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website:"renthouseinfaridabad.com",
        }),
      });

      const result = await res.json();

      if (result.success) {
setPopup({
  open: true,
  type: "success",
  message: "Enquiry submitted successfully!",
});
        setFormData({ name: "", phone: "", message: "" });
      } else {
 setPopup({
  open: true,
  type: "error",
  message: "Something went wrong. Try again.",
});
      }
    } catch (err) {
      console.log("Hero form error:", err);
setPopup({
  open: true,
  type: "error",
  message: "Server error. Please try later.",
});
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#E6FBF8] px-4 sm:px-6">
    <AlertPopup
    open={popup.open}
    type={popup.type}
    message={popup.message}
    onClose={() =>
      setPopup({
        open: false,
        type: "",
        message: "",
      })
    }
  />
      <div className="max-w-7xl mx-auto py-6 grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            Rent House in{" "}
            <span className="text-[#6DE1D2]">Faridabad</span>
          </h1>

          <div className="text-lg max-w-4xl space-y-5 text-gray-700 leading-relaxed">
            <p>
             Searching for a comfortable, well-located house for rent in Faridabad that fits your lifestyle and your monthly budget? Your ideal rental home is just a few clicks away. Faridabad's rental property market is one of the most vibrant and tenant-friendly in the NCR region, offering an excellent mix of furnished, semi-furnished, and unfurnished homes across a wide range of configurations — from cosy 1 BHK apartments and independent 2 BHK builder floors to spacious 3 BHK independent houses and family-sized duplex homes. Renting in Faridabad makes complete sense: the city offers lower rental costs compared to Gurugram or Noida, while providing the same quality of urban life with excellent metro connectivity, top schools, reputed hospitals, and well-stocked markets. Whether you are a corporate professional relocating to the NCR, a family seeking a peaceful neighbourhood, or a student needing proximity to institutions, our verified rental listings cover all key areas including Neharpar, Sainik Colony, NIT, Sector 85, Sector 86, Ballabhgarh, and many more. Every listing is verified for authenticity, fairly priced, and backed by transparent rental agreements with zero surprise deductions. Find your next rental home in Faridabad with ease, speed, and complete confidence — because great living should never be complicated.
            </p>
            <Link href="/how-it-works">
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

            <h2 className="text-2xl font-semibold text-[#6DE1D2]">
              Free Rental Consultation
            </h2>

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