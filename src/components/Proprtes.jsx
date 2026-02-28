"use client";

import { useState, useRef } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";

export default function Properties() {
  const { properties, loading, error } = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const propertySectionRef = useRef(null);
  const itemsPerPage = 150;

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#E6FBF8]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#6DE1D2]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#6DE1D2] animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading Premium Listings...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Plots Available in Faridabad
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  const totalItems = properties.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);

  return (
    <section
      ref={propertySectionRef}
      className="bg-gradient-to-b from-white to-[#E6FBF8] px-4 py-16"
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Premium Rent House in Faridabad
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Explore high-potential residential properties for rent in Faridabad. Our curated listings offer a range of options, from cozy apartments to spacious villas,
          available across prime sectors in Faridabad.
        </p>

        <div className="w-20 h-1 bg-[#6DE1D2] mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {currentProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-[#6DE1D2]/30
              shadow-sm hover:shadow-xl hover:-translate-y-1
              transition duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">

                {/* IMAGE */}
                <div className="relative md:w-[35%]">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-52 md:h-full object-cover"
                  />
                  <span className="absolute top-4 left-4
                  bg-[#6DE1D2]
                  text-white text-xs px-4 py-1 rounded-full shadow font-semibold">
                    {property.propertyType}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5 flex-1 flex flex-col">

                  <h2 className="text-lg font-semibold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="text-sm text-gray-600 mt-1">
                    {property.locality}
                  </p>

                  {/* STATS BAR */}
                  <div className="mt-4 bg-[#E6FBF8] border border-[#6DE1D2]/40
                  rounded-xl px-5 py-3 flex flex-wrap md:flex-nowrap
                  items-center justify-between gap-3 text-sm">

                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 uppercase text-xs">
                        Area:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatArea(property.area, property.areaUnit)}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-[#6DE1D2]/40" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 uppercase text-xs">
                        Type:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-[#6DE1D2]/40" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 uppercase text-xs">
                        Status:
                      </span>
                      <span className="font-semibold text-green-600">
                        {property.status || "Available"}
                      </span>
                    </div>

                  </div>

                  <p className="text-sm text-gray-600 mt-4 line-clamp-2 leading-relaxed">
                    {property.description ||
                      "Premium investment opportunity offering strong appreciation potential."}
                  </p>

                  <div className="flex-1" />

                  {/* PRICE + BUTTONS */}
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
                        className="bg-[#6DE1D2]
                        text-white px-6 py-2 rounded-full
                        hover:opacity-90
                        transition w-full md:w-auto font-semibold shadow-md"
                      >
                        Contact Now
                      </button>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="border border-[#6DE1D2] text-[#6DE1D2]
                        px-6 py-2 rounded-full
                        hover:bg-[#E6FBF8]
                        transition w-full md:w-auto text-center font-semibold"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}

          <div className="mt-16">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={(page) => {
  setCurrentPage(page);

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 100);
}}
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
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