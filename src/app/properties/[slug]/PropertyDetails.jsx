"use client";

import ContactPopup from "@/components/ContactPopup";
import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";

export default function PropertyDetails({ propertyy }) {
  const [open, setOpen] = useState(false);

  const { properties: allProperties } = useProperty();

  const formatArea = (area, unit) => {
    if (!area) return "—";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  const relatedProperties =
    allProperties?.length > 0
      ? allProperties
          .filter(
            (p) =>
              p._id !== propertyy._id &&
              p.city?.toLowerCase() === propertyy.city?.toLowerCase()
          )
          .slice(0, 4)
      : [];

  return (
    <div className="bg-gradient-to-b from-white to-[#E6FBF8] text-gray-900 px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-14 items-start">

          {/* IMAGE */}
          <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-md border border-[#6DE1D2]/40">
            {propertyy?.media?.url ? (
              <Image
                src={propertyy.media.url}
                alt={propertyy?.title}
                fill
                priority
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-[#E6FBF8] text-[#6DE1D2]">
                No Image Available
              </div>
            )}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between h-full">

            <div>
              <h1 className="text-3xl font-semibold leading-tight">
                {propertyy?.title}
              </h1>

              <p className="text-gray-600 mt-2">
                {propertyy?.locality}, {propertyy?.city}
              </p>

              <p className="mt-6 text-2xl font-bold text-[#6DE1D2]">
                {propertyy?.price === 0
                  ? "Rent on Request"
                  : `₹ ${propertyy?.price?.toLocaleString("en-IN")} /month`}
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 text-sm border-t border-[#6DE1D2]/40 pt-6">
                <Meta label="Category" value={propertyy?.propertyCategory} />
                <Meta label="Property Type" value={propertyy?.propertyType} />
                <Meta label="Listing Type" value={propertyy?.listingType} />
                <Meta label="City" value={propertyy?.city} />
                <Meta label="State" value={propertyy?.state} />
                <Meta label="Area" value={formatArea(propertyy?.area, propertyy?.areaUnit)} />

                {propertyy?.bedrooms > 0 && (
                  <Meta label="Bedrooms" value={propertyy?.bedrooms} />
                )}

                {propertyy?.bathrooms > 0 && (
                  <Meta label="Bathrooms" value={propertyy?.bathrooms} />
                )}
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setOpen(true)}
                className="bg-[#6DE1D2] hover:opacity-90 text-white px-8 py-3 rounded-full text-sm font-medium shadow transition"
              >
                Contact Rental Consultant
              </button>
            </div>

          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <section className="mt-16 border-t border-[#6DE1D2]/40 pt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            Property Description
          </h2>

          <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed max-w-4xl">
            {propertyy?.description2?.length > 0 ? (
              propertyy.description2.map((text, i) => (
                <p key={i}>{text}</p>
              ))
            ) : (
              <p>No additional description available.</p>
            )}
          </div>
        </section>

        {/* ================= RELATED PROPERTIES ================= */}
        {relatedProperties.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Similar Rental Homes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {relatedProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          </section>
        )}

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={propertyy?.title}
      />
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-gray-500 text-xs uppercase tracking-wide">
        {label}
      </div>
      <div className="mt-1 font-medium text-gray-900">
        {value || "—"}
      </div>
    </div>
  );
}