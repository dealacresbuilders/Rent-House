"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {
  const [showAll, setShowAll] = useState(false);

  const initialCount = 40;
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-gradient-to-b from-[#E6FBF8] to-white pt-16 pb-8 px-4 border-t border-[#6DE1D2]/40">
      <div className="max-w-7xl mx-auto">

        {/* LOCATIONS */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Popular Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm">

            {visibleLocations.map((loc, index) => (
              <div key={index} className="relative group">

                <Link
                  href={`/house-for-rent-in-${createSlug(loc)}`}
                  className="block truncate text-gray-600 hover:text-[#6DE1D2] transition duration-300"
                >
                  House for Rent in  {loc}
                </Link>

                {/* Tooltip */}
                <div
                  className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-white text-gray-800 text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-[#6DE1D2]/40
                  z-50 pointer-events-none
                "
                >
                  House for Rent in  {loc}
                </div>

              </div>
            ))}

            {/* View More */}
            {!showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-[#6DE1D2] hover:underline transition"
                >
                  View More...
                </span>
              </div>
            )}

            {/* View Less */}
            {showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#6DE1D2] hover:underline transition"
                >
                  View Less...
                </span>
              </div>
            )}

          </div>
        </div>
{/* 🔥 Bottom Navigation Buttons - CENTER */}
<div className="border-t border-[#6DE1D2]/30 pt-6 mt-10 mb-6">
  <div className="flex justify-center items-center">
    
    <div className="flex flex-wrap gap-6 justify-center text-sm">
      <Link
        href="/about"
        className="text-gray-600 hover:text-[#6DE1D2] transition"
      >
        About
      </Link>

      <Link
        href="/blog"
        className="text-gray-600 hover:text-[#6DE1D2] transition"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="text-gray-600 hover:text-[#6DE1D2] transition"
      >
        Contact
      </Link>

      <Link
        href="/how-it-works"
        className="text-gray-600 hover:text-[#6DE1D2] transition"
      >
       How It's Work
      </Link>
    </div>

  </div>
</div>
        {/* BOTTOM */}
        <div className="border-t border-[#6DE1D2]/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} PlotForSaleInFaridabad.com - All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed By-{" "}
            <Link
              href="https://www.parcharmanch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6DE1D2] hover:underline transition"
            >
              Parchar Manch
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}