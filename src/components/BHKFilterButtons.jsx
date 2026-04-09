"use client";

import Link from "next/link";

export default function BHKFilterButtons() {
  const bhkOptions = ["1", "2", "3", "4"];

  // ✅ SLUG FUNCTION
  const createSlug = (bhk) => {
    return `${bhk}-bhk-house-for-rent`;
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4">

      {bhkOptions.map((bhk) => (
        <Link
          key={bhk}
          href={`/listing/${createSlug(bhk)}`}   // ✅ FIXED
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-full 
          text-xs sm:text-sm md:text-base font-medium 
          border border-[#6DE1D2] text-[#6DE1D2] 
          hover:bg-[#6DE1D2] hover:text-white 
          transition-all duration-200 
          w-full sm:w-auto text-center"
        >
          {bhk} BHK House for Rent
        </Link>
      ))}

    </div>
  );
}