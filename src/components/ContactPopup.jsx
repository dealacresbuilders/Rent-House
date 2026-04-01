"use client";

import { useState } from "react";

export default function ContactPopup({ isOpen, onClose, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

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
      alert("Phone number must be 10 digits");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          propertyTitle,
          date: new Date().toLocaleString(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Enquiry Submitted Successfully!");
        setFormData({ name: "", phone: "", message: "" });
        onClose();
      } else {
        alert("Something went wrong!");
      }

    } catch (error) {
      alert("Server Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-7 shadow-2xl relative border border-[#6DE1D2]">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold text-gray-900">
          Check Rental Details
        </h3>

        <p className="text-sm text-gray-500 mt-2 mb-6">
          Enquiry for:{" "}
          <span className="font-medium text-gray-800">
            {propertyTitle}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
  name="name"
  required
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
  text-gray-800 placeholder-gray-400 bg-white
  focus:border-[#6DE1D2] focus:ring-2 focus:ring-[#6DE1D2]/40 
  outline-none transition"
/>

<input
  name="phone"
  required
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
  text-gray-800 placeholder-gray-400 bg-white
  focus:border-[#6DE1D2] focus:ring-2 focus:ring-[#6DE1D2]/40 
  outline-none transition"
/>

<textarea
  name="message"
  rows="3"
  placeholder="Budget / Sector / BHK Requirement"
  value={formData.message}
  onChange={handleChange}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
  text-gray-800 placeholder-gray-400 bg-white
  focus:border-[#6DE1D2] focus:ring-2 focus:ring-[#6DE1D2]/40 
  outline-none resize-none transition"
/>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#6DE1D2] hover:opacity-90 text-white font-medium rounded-lg transition shadow-md"
          >
            {loading ? "Submitting..." : "Get Rental Details"}
          </button>

        </form>
      </div>
    </div>
  );
}