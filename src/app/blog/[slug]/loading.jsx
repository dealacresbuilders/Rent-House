export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen 
    bg-gradient-to-b from-white to-[#E6FBF8]">

      <div className="flex flex-col items-center gap-5">

        {/* SPINNER (AQUA) */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#6DE1D2]/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#6DE1D2] animate-spin"></div>
        </div>

        {/* TEXT */}
        <p className="text-[#6DE1D2] text-sm tracking-wide animate-pulse font-medium">
          Loading amazing content...
        </p>

      </div>

    </div>
  );
}