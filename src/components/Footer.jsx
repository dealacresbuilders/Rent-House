"use client";

import { useState } from "react";
import Link from "next/link";

const locations = [
  "Adarsh Nagar, Faridabad",
  "Anangpur, Faridabad",
  "Ankhir, Faridabad",
  "Ashoka Enclave Part 1, Faridabad",
  "Ashoka Enclave Part 3, Faridabad",
  "BPTP, Faridabad",
  "Badkhal, Faridabad",
  "Badshahpur, Faridabad",
  "Ballabhgarh, Faridabad",
  "Bathola, Faridabad",
  "Bhadana Chowk, Faridabad",
  "Bharat Colony, Faridabad",
  "Bhatta Colony, Faridabad",
  "Bhikam Colony, Faridabad",
  "Bhim Sen Colony, Faridabad",
  "Bhopani Village, Faridabad",
  "Block A Sector 7, Faridabad",
  "Block B, Sector 7, Faridabad",
  "Block E New Industrial Twp 3, Faridabad",
  "Chawla Colony, Faridabad",
  "Dabua Colony, Faridabad",
  "Dayalpur, Faridabad",
  "Eros Garden, Faridabad",
  "Gandhi Colony, Faridabad",
  "Greenfield Colony, Faridabad",
  "Greenfields Colony Block C, Faridabad",
  "Housing Board Duplex, Faridabad",
  "Indira Enclave, Faridabad",
  "Indra Complex Colony, Faridabad",
  "Jawahar Colony, Faridabad",
  "Jeevan Nagar, Faridabad",
  "Mewla Maharajpur, Faridabad",
  "Mohna, Faridabad",
  "NIT 5, Faridabad",
  "NIT, Faridabad",
  "Nehar Par, Faridabad",
  "New Baselwa Colony, Faridabad",
  "Pali Village, Faridabad",
  "Palla Number 1, Faridabad",
  "Palwali, Faridabad",
  "Rajeev Colony, Faridabad",
  "Rajendra Colony, Faridabad",
  "Roshan Nagar, Faridabad",
  "SGM Nagar, Faridabad",
  "Sainik Colony, Faridabad",
  "Sanjay Colony, Faridabad",
  "Sanjay Gandhi Memorial Nagar, Faridabad",
  "Sarai Khawaja Village, Faridabad",
  "Sector 11, Faridabad",
  "Sector 11C, Faridabad",
  "Sector 14, Faridabad",
  "Sector 15, Faridabad",
  "Sector 15A, Faridabad",
  "Sector 16, Faridabad",
  "Sector 16A, Faridabad",
  "Sector 17, Faridabad",
  "Sector 18, Faridabad",
  "Sector 19, Faridabad",
  "Sector 2, Faridabad",
  "Sector 21, Faridabad",
  "Sector 21A, Faridabad",
  "Sector 21B, Faridabad",
  "Sector 21C, Faridabad",
  "Sector 21D, Faridabad",
  "Sector 22, Faridabad",
  "Sector 23, Faridabad",
  "Sector 28, Faridabad",
  "Sector 3, Faridabad",
  "Sector 30, Faridabad",
  "Sector 31, Faridabad",
  "Sector 37, Faridabad",
  "Sector 42, Faridabad",
  "Sector 45, Faridabad",
  "Sector 46, Faridabad",
  "Sector 48, Faridabad",
  "Sector 50, Faridabad",
  "Sector 62, Faridabad",
  "Sector 64, Faridabad",
  "Sector 65, Faridabad",
  "Sector 7, Faridabad",
  "Sector 70, Faridabad",
  "Sector 75, Faridabad",
  "Sector 76, Faridabad",
  "Sector 77, Faridabad",
  "Sector 78, Faridabad",
  "Sector 7A, Faridabad",
  "Sector 8, Faridabad",
  "Sector 81, Faridabad",
  "Sector 83, Faridabad",
  "Sector 84, Faridabad",
  "Sector 85, Faridabad",
  "Sector 86, Faridabad",
  "Sector 88, Faridabad",
  "Sector 89, Faridabad",
  "Sector 9, Faridabad",
  "Sector 91, Faridabad",
  "Sector-143, Faridabad",
  "Sehatpur, Faridabad",
  "Shiv Colony, Faridabad",
  "Shiv Durga Vihar, Faridabad",
  "Sikri, Faridabad",
  "Sohna Road, Faridabad",
  "Surya Nagar Phase 1, Faridabad",
  "Surya Vihar Part 2, Faridabad",
  "Tilpat, Faridabad",
  "Vedram Colony, Faridabad",
  "Parvatiya Colony, Faridabad"
];

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
                  href={`/${createSlug(loc)}`}
                  className="block truncate text-gray-600 hover:text-[#6DE1D2] transition duration-300"
                >
                  House For Rent {loc}
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
                  House For Rent {loc}
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