// app/properties/[slug]/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#E6FBF8]">
      
      <div className="flex flex-col items-center gap-6">

        {/* Premium Dual Ring Spinner */}
        <div className="relative w-16 h-16">

          {/* Outer Light Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#6DE1D2]/30"></div>

          {/* Spinning Teal Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#6DE1D2] animate-spin"></div>

          {/* Inner Glow Dot */}
          <div className="absolute inset-4 bg-[#6DE1D2] rounded-full animate-pulse"></div>

        </div>

        {/* Main Text */}
        <p className="text-[#6DE1D2] font-semibold text-lg tracking-wide">
          Loading Rental Home Details...
        </p>

        {/* Sub Text */}
        <p className="text-sm text-gray-500 text-center max-w-xs">
          Please wait while we fetch complete rental property information for you.
        </p>

      </div>
    </div>
  );
}