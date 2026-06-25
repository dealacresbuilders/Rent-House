"use client";

import { useState, useEffect } from "react";
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
  const [visibleCounts, setVisibleCounts] = useState({});

  useEffect(() => {
    localStorage.setItem("lastLocation", "Faridabad");

    const counts = {};

    locations.forEach((item) => {
      const key = Object.keys(item)[0];
      counts[key] = 15;
    });

    setVisibleCounts(counts);
  }, []);

  const handleViewMore = (type) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 15,
    }));
  };

  const handleViewLess = (type) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [type]: 15,
    }));
  };

  const getRentLabel = (bhkType) => {
    switch (bhkType.toLowerCase()) {
      case "1 bhk":
        return "1 BHK House For Rent in";

      case "2 bhk":
        return "2 BHK House For Rent in";

      case "3 bhk":
        return "3 BHK House For Rent in";

      case "4 bhk":
        return "4 BHK House For Rent in";

      default:
        return "House For Rent in";
    }
  };

  const getRentUrl = (bhkType, location) => {
    switch (bhkType.toLowerCase()) {
      case "1 bhk":
        return `https://www.dealacres.com/properties/1-bhk-house-for-rent-in-${createSlug(
          location
        )}-faridabad`;

      case "2 bhk":
        return `https://www.dealacres.com/properties/2-bhk-house-for-rent-in-${createSlug(
          location
        )}-faridabad`;

      case "3 bhk":
        return `https://www.dealacres.com/properties/3-bhk-house-for-rent-in-${createSlug(
          location
        )}-faridabad`;

      case "4 bhk":
        return `https://www.dealacres.com/properties/4-bhk-house-for-rent-in-${createSlug(
          location
        )}-faridabad`;

      default:
        return `https://www.dealacres.com/properties/house-for-rent-in-${createSlug(
          location
        )}-faridabad`;
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#E6FBF8] to-white pt-16 pb-8 px-4 border-t border-[#6DE1D2]/40">
      <div className="max-w-7xl mx-auto">
        {locations.map((item, index) => {
          const bhkType = Object.keys(item)[0];
          const bhkLocations = item[bhkType];

          return (
            <div key={index} className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                House Available for Rent in Popular{" "}
                {bhkType.replace("bhk", " BHK").toUpperCase()} Locations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm">
                {bhkLocations
                  .slice(0, visibleCounts[bhkType] || 15)
                  .map((loc, idx) => (
                    <div
                      key={idx}
                      className="relative group overflow-visible"
                    >
                      <Link
                        href={getRentUrl(bhkType, loc)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate text-gray-600 hover:text-[#6DE1D2] transition duration-300"
                      >
                        {getRentLabel(bhkType)} {loc}
                      </Link>

                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                          opacity-0 scale-95
                          group-hover:opacity-100 group-hover:scale-100
                          transition-all duration-200 ease-out
                          whitespace-nowrap
                          bg-white text-gray-800 text-xs
                          px-3 py-1.5 rounded-md
                          shadow-lg border border-[#6DE1D2]/40
                          z-50 pointer-events-none
                        "
                      >
                        {getRentLabel(bhkType)} {loc}
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-4 flex gap-4">
                {(visibleCounts[bhkType] || 15) <
                  bhkLocations.length && (
                  <button
                    onClick={() => handleViewMore(bhkType)}
                    className="text-[#6DE1D2] hover:underline transition"
                  >
                    View More...
                  </button>
                )}

                {(visibleCounts[bhkType] || 15) > 15 && (
                  <button
                    onClick={() => handleViewLess(bhkType)}
                    className="text-[#6DE1D2] hover:underline transition"
                  >
                    View Less...
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* Bottom Navigation */}
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

        {/* Bottom */}
        <div className="border-t border-[#6DE1D2]/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} PlotForSaleInFaridabad.com - All rights
            reserved.
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