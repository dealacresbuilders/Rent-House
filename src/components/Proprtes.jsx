"use client";

import { useState, useRef ,useMemo} from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";
import PropertyViewButton from "./PropertyViewButton";
import FeaturedLocations from "./FeaturedLocations";
export default function Properties() {
  const { properties, loading, error, page2, setPage2,
    totalItems, itemsPerPage, areas} = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const propertySectionRef = useRef(null);
 

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  const localities = useMemo(() => {
      return [
        ...new Set(
          properties
            ?.map((item) => item?.locality)
            .filter(Boolean)
        ),
      ];
    }, [properties]);

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
          No house Available in Faridabad
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }



  return (
    <section id="locations"
      ref={propertySectionRef}
      className="bg-gradient-to-b from-white to-[#E6FBF8] px-4 py-16"
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Premium Rent House in Faridabad
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Explore high-potential residential properties for rent in Faridabad. Our curated listings offer a range of options, from cozy apartments to spacious villas,
          available across prime sectors in Faridabad.
        </p>

        <div className="w-20 h-1 bg-[#6DE1D2] mt-6 rounded-full"></div>
        <div className="mt-8">
          <BHKFilterButtons />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {properties.map((property, index) => {
           const areaBatch = areas?.slice(
  Math.floor(index / 30) * 10,
  Math.floor(index / 30) * 10 + 10
) || [];

            return (
              <div
                key={property._id}
                className="space-y-10"
              >

                {/* PROPERTY CARD */}
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-[#6DE1D2]/30
              shadow-sm hover:shadow-xl hover:-translate-y-1
              transition duration-300 overflow-hidden md:h-[250px]"
            >
              <div className="flex flex-col md:flex-row h-full">

                {/* IMAGE */}
                <div className="relative md:w-[45%] h-[250px]">
                  <Image
                    src={property?.media?.url ? 
                      property?.media?.url :
                       "https://res.cloudinary.com/do84xjpmx/image/upload/v1778824618/faridabadProperties/ui9tj2tpn8vgzgyqsotg.webp"}
                    unoptimized
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4
                  bg-[#6DE1D2]
                  text-white text-xs px-4 py-1 rounded-full shadow font-semibold">
                    {property.propertyType}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col w-full min-w-0">

                  <h2 className="text-lg font-bold text-gray-900 overflow-hidden md:whitespace-nowrap md:text-ellipsis">
                    {property.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z"
                      />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>

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

                  {/* <p className="text-sm text-gray-600 mt-4 line-clamp-2 leading-relaxed">
                    {property.description2 ||
                      "Premium investment opportunity offering strong appreciation potential."}
                  </p> */}

                  <div className="flex-1" />

                  {/* PRICE + BUTTONS */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-5 gap-3 md:gap-4">

                    <p className="text-xl sm:text-2xl font-bold text-[#6DE1D2]">
                      ₹ {property.price?.toLocaleString("en-IN")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">

                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="bg-[#6DE1D2]
      text-white px-4 sm:px-6 py-2 rounded-full
      hover:opacity-90
      transition w-full md:w-auto text-center font-semibold shadow-md text-sm"
                      >
                        Contact Now
                      </button>
                     <PropertyViewButton slug={property.slug} city={property.city}/>
                      {/* <Link
                        href={`/properties/${property.slug}`}
 
                        className="border border-[#6DE1D2] text-[#6DE1D2]
      px-4 sm:px-6 py-2 rounded-full
      hover:bg-[#E6FBF8]
      transition w-full md:w-auto text-center font-semibold text-sm"
                      >
                        View Details
                      </Link> */}

                    </div>

                  </div>

                </div>
              </div>
            </div>
           {/* FEATURED */}

                {(index + 1) % 30 === 0 &&
                  areaBatch.length > 0 && (
                    <FeaturedLocations
                      locations={areaBatch}
                    />
                )}

              </div>
            );
          })}

          <div className="mt-16">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={page2}
              onPageChange={(page2) => {
                setPage2(page2);

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