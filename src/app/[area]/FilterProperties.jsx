"use client";

import { useEffect, useState, useMemo } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function FilterProperties({ area }) {

  const { data, properties, loading2, error2, setLocality } = useProperty();

  // ✅ SAFETY FIX (null crash prevent)
  const safeData = Array.isArray(data) ? data : [];
  const safeProperties = Array.isArray(properties) ? properties : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea, setLocality]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    return `${formattedNumber} ${unit}`;
  };

  /* ================= 150 CARD LOGIC ================= */

  const finalData = useMemo(() => {

    // Agar full domain data hi nahi hai
    if (safeProperties.length === 0) {
      return safeData;
    }

    // Filtered IDs
    const filteredIds = new Set(
      safeData.map((p) => p._id)
    );

    // Remaining domain properties
    const remaining = safeProperties.filter(
      (p) => !filteredIds.has(p._id)
    );

    const needed = 150 - safeData.length;

    return [
      ...safeData,
      ...remaining.slice(0, needed > 0 ? needed : 0)
    ].slice(0, 150);

  }, [safeData, safeProperties]);

  /* ================= LOADING ================= */
  if (loading2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#E6FBF8]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#6DE1D2]/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#6DE1D2] animate-spin"></div>
          <div className="absolute inset-4 bg-[#6DE1D2] rounded-full animate-pulse"></div>
        </div>

        <p className="mt-6 text-sm font-medium text-gray-600 tracking-wide">
          Loading Rental Listings...
        </p>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-[#E6FBF8]">
        <p className="text-red-500 text-lg">
          Something went wrong while loading properties.
        </p>
      </div>
    );
  }

  /* ================= EMPTY ================= */
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#E6FBF8]">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Rental Houses Available in {formattedArea}
        </h2>
        <p className="text-gray-500 mt-2">
          New rental listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        {/* <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Rental Houses in{" "}
            <span className="text-[#6DE1D2]">{formattedArea}</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Verified residential rental homes in prime sectors.
          </p>
        </div> */}

        {/* GRID */}
        <div className="grid grid-cols-1  gap-10">

          {finalData.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-xl border border-[#6DE1D2]/40
              shadow-sm hover:shadow-lg transition duration-300
              overflow-hidden flex flex-col md:flex-row"
            >
              {/* IMAGE */}
              <div className="relative md:w-[35%] aspect-[4/3] md:aspect-auto">
                {property?.media?.url ? (
                  <Image
                    src={property.media.url}
                    unoptimized
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-[#E6FBF8] w-full h-full flex items-center justify-center text-[#6DE1D2] text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5 flex-1 flex flex-col">

                <h2 className="text-base font-semibold text-gray-900">
                  {property.title}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  {property.locality}, Faridabad
                </p>

                {/* INFO BAR */}
                <div className="mt-3 bg-[#E6FBF8] border border-[#6DE1D2]/40 rounded-lg px-4 py-3 text-xs flex items-center justify-between">

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">AREA</span>
                    <span className="font-semibold text-gray-900">
                      {formatArea(property.area, property.areaUnit)}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-[#6DE1D2]/40"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">STATUS</span>
                    <span className="font-semibold text-green-600">
                      {property.status || "Available"}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-[#6DE1D2]/40"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">TYPE</span>
                    <span className="font-semibold text-gray-900">
                      {property.type || "Residential"}
                    </span>
                  </div>

                </div>

                {/* <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {property.description2 ||
                    "Comfortable rental home with excellent connectivity and nearby amenities."}
                </p> */}

                <div className="flex-1" />

                {/* PRICE + BUTTON */}
                <div className="mt-4 flex justify-between items-center">

  {/* PRICE */}
  {property.price && property.price > 0 ? (
    <p className="text-lg font-bold text-[#6DE1D2]">
      ₹ {property.price.toLocaleString("en-IN")}
    </p>
  ) : (
    <p className="text-sm font-medium text-gray-500">
      Price on Request
    </p>
  )}

  {/* RIGHT SIDE BUTTONS */}
  <div className="flex items-center gap-3">

    {/* CONTACT BUTTON */}
    <button
      onClick={() => {
        setSelectedProperty(property.title);
        setOpen(true);
      }}
      className="bg-[#6DE1D2] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 transition"
    >
      Contact Now
    </button>

    {/* VIEW DETAILS */}
    <Link
      href={`/properties/${property.slug}`}
      className="text-[#6DE1D2] text-sm font-medium hover:underline"
    >
      View  Details →
    </Link>

  </div>

</div>

              </div>
            </div>
          ))}

        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}