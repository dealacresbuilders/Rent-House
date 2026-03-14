"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";

export default function PropertyTypePage() {

  const { propertyType } = useParams();

  const {
    properties,
    loading3,
    error3,
    fetchPropertiesByType,
    page,
    totalPages,
  } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const propertySectionRef = useRef(null);

  useEffect(() => {
    if (propertyType) {
      fetchPropertiesByType(`${propertyType} BHK`, 1);
    }
  }, [propertyType]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";

    const formattedNumber = Number(area).toLocaleString("en-IN");

    if (!unit) return formattedNumber;

    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();

    return `${formattedNumber} ${formattedUnit}`;
  };

  if (loading3) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#e6fffb]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-teal-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#6DE1D2] border-r-[#6DE1D2] animate-spin"></div>
        </div>

        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading {propertyType} BHK Listings...
        </p>
      </div>
    );
  }

  if (error3) {
    return (
      <p className="text-center py-20 text-[#6DE1D2]">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          No {propertyType} BHK Houses Available
        </h2>

        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section ref={propertySectionRef} className="bg-[#f0fffd] px-4 py-16">

      {/* ===== HEADER ===== */}

      <div className="max-w-7xl mx-auto mb-12">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {propertyType} BHK Residential Houses For Rent in Faridabad
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl">
          Explore premium {propertyType} BHK houses available across prime
          locations in Faridabad. Find your ideal rental home with us today.
        </p>

        <div className="w-20 h-1 bg-[#6DE1D2] mt-6 rounded-full"></div>

        <div className="mt-8">
          <BHKFilterButtons />
        </div>

      </div>

      {/* ===== GRID ===== */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* PROPERTY LIST */}

        <div className="lg:col-span-2 space-y-8">

          {properties.map((property) => (

            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
            >

              <div className="flex flex-col md:flex-row">

                <div className="relative md:w-[35%]">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-52 md:h-full object-cover"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col">

                  <h2 className="text-lg font-semibold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {property.locality}
                  </p>

                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 text-sm">

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Area:
                      </span>

                      <span className="font-semibold text-gray-900">
                        {formatArea(property.area, property.areaUnit)}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Type:
                      </span>

                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Status:
                      </span>

                      <span className="font-semibold text-[#6DE1D2]">
                        {property.status || "Ready to Move"}
                      </span>
                    </div>

                  </div>

                  <p className="text-sm text-gray-500 mt-4 line-clamp-2 leading-relaxed">
                    {property.description2 ||
                      "High-value residential asset offering strong long-term growth."}
                  </p>

                  <div className="flex-1" />

                  <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4">

                    <p className="text-2xl font-bold text-[#6DE1D2]">
                      ₹ {property.price?.toLocaleString("en-IN")}
                    </p>

                    <div className="flex gap-3 w-full md:w-auto">

                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="bg-[#6DE1D2] text-white px-6 py-2 rounded-full hover:opacity-90 transition w-full md:w-auto"
                      >
                        Contact Now
                      </button>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="border border-[#6DE1D2] text-[#6DE1D2] px-6 py-2 rounded-full hover:bg-[#e6fffb] transition w-full md:w-auto text-center"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

          {/* PAGINATION */}

          <div className="mt-16">

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => {

                fetchPropertiesByType(`${propertyType} BHK`, newPage);

                const yOffset = -90;

                const y =
                  propertySectionRef.current.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            />

          </div>

        </div>

        {/* SIDEBAR */}

        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
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