"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export default function FeaturedLocations({
  locations = [],
}) {

  

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto rounded-[26px] border border-[#d5c84f]/30 bg-[#6DE1D2] p-5 sm:p-7">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-6">
          <div>
            <p className="text-[14px] uppercase tracking-[3px] font-semibold text-white/70">
              Rent Houses in Faridabad in These Locations
            </p>

            {/* <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Popular Locations
            </h2> */}
          </div>

          <div className="h-px flex-1 bg-gradient-to-r from-[#d5c84f]/40 to-transparent" />
        </div>

        {/* Locations */}
        <div className="flex flex-wrap gap-3">
          {locations.map((location, index) => {
            const slug = location
              .toLowerCase()
              .replace(/,/g, "")
              .replace(/\s+/g, "-");

            return (
              <Link
                key={index}
                href={`https://www.dealacres.com/properties/house-for-rent-in-${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex items-center gap-2
                  rounded-full
                  border border-[#6DE1D2]/25
                  bg-white
                  px-4 py-2
                  text-sm font-medium text-[#6DE1D2]
                  transition-all duration-300
                  hover:bg-[#6DE1D2]/30
                  hover:text-white hover:border-white
                "
              >
                <MapPin
                  size={14}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                {location}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}