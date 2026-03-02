"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function BHKFilterButtons() {
  const bhkOptions = ["1", "2", "3", "4"];

  return (
    <div className="flex flex-wrap gap-4">
      {bhkOptions.map((bhk) => (
        <Link
          key={bhk}
          href={`/type/${bhk}`}   // 👈 CHANGE HERE
          className="px-6 py-3 rounded-full text-sm md:text-base font-medium 
          border border-[#6DE1D2] text-[#6DE1D2] 
          hover:bg-[#6DE1D2] hover:text-white transition-all duration-200"
        >
          Rent House For {bhk} BHK
        </Link>
      ))}

     
    </div>
  );
}