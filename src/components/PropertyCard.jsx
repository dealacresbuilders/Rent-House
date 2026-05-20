"use client";

import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ property }) {
  const formatArea = (area, unit) => {
    if (!area) return "N/A";

    const formattedNumber = Number(area).toLocaleString("en-IN");

    if (!unit) return formattedNumber;

    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();

    return `${formattedNumber} ${formattedUnit}`;
  };

  return (
    <div
      className="bg-white rounded-xl border border-[#6DE1D2]/40
      shadow-sm hover:shadow-lg transition duration-300
      overflow-hidden flex flex-col md:flex-row"
    >
      {/* IMAGE */}
      <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto">
        
          <Image
             src={property?.media?.url ? 
                      property?.media?.url :
                       "https://res.cloudinary.com/do84xjpmx/image/upload/v1778824618/faridabadProperties/ui9tj2tpn8vgzgyqsotg.webp"}
            unoptimized
            alt={property.title}
            fill
            className="object-cover"
          />
        
      </div>

      {/* CONTENT */}
      <div className="p-5 flex-1 flex flex-col">
        <h2 className="text-base font-semibold text-gray-900 leading-snug">
          {property.title}
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          {property.locality}, Faridabad
        </p>

        {/* INFO BAR */}
        <div className="mt-3 bg-[#E6FBF8] border border-[#6DE1D2]/40 rounded-lg px-4 py-3 text-xs flex items-center justify-between">
          
          {/* AREA */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-gray-500">AREA</span>
            <span className="font-semibold text-gray-900">
              {formatArea(property.area, property.areaUnit)}
            </span>
          </div>

          <div className="h-8 w-px bg-[#6DE1D2]/40"></div>

          {/* STATUS */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-gray-500">STATUS</span>
            <span className="font-semibold text-green-600">
              {property.status || "Available"}
            </span>
          </div>

          <div className="h-8 w-px bg-[#6DE1D2]/40"></div>

          {/* TYPE */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-gray-500">TYPE</span>
            <span className="font-semibold text-gray-900">
              {property.type || "Residential"}
            </span>
          </div>
        </div>

        {/* <p className="text-sm text-gray-600 mt-3 line-clamp-2">
          {property.description2 ||
            "Comfortable rental home located in a prime sector of Faridabad with excellent connectivity and amenities nearby."}
        </p> */}

        <div className="flex-1" />

        {/* PRICE + LINK */}
        <div className="mt-4 flex justify-between items-center">
          {property.price && property.price > 0 ? (
            <p className="text-lg font-bold text-[#6DE1D2]">
              ₹ {property.price.toLocaleString("en-IN")}
            </p>
          ) : (
            <span className="text-[#6DE1D2] text-sm font-medium">
              Rent on Call
            </span>
          )}

          <Link
            href={`/properties/${property.slug}`}
            className="text-[#6DE1D2] text-sm font-medium hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}