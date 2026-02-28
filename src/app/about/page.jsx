"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#E6FBF8] px-4 py-16">
      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-[#6DE1D2]">Rent House in Faridabad</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We help families, working professionals, and tenants discover
            verified rental homes in prime residential sectors across Faridabad.
          </p>
        </div>

        {/* OUR MISSION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is to simplify the home rental process by offering
              verified listings, transparent rental pricing, and reliable
              guidance from inquiry to move-in.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We focus on high-demand residential sectors including Neharpar,
              Sector 9, Sector 21, Sector 82, and other rapidly developing
              areas of Faridabad.
            </p>
          </div>

          <div className="bg-[#E6FBF8] rounded-3xl p-10 text-center border border-[#6DE1D2]/40">
            <h3 className="text-3xl font-bold text-[#6DE1D2]">500+</h3>
            <p className="text-gray-700 mt-2">Verified Rental Homes</p>

            <h3 className="text-3xl font-bold text-[#6DE1D2] mt-8">1000+</h3>
            <p className="text-gray-700 mt-2">Happy Tenants & Families</p>
          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border border-[#6DE1D2]/40 rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Verified Listings
              </h3>
              <p className="text-gray-600 text-sm">
                Every rental home is checked for authenticity to ensure safe
                and stress-free tenancy.
              </p>
            </div>

            <div className="bg-white border border-[#6DE1D2]/40 rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Prime Residential Locations
              </h3>
              <p className="text-gray-600 text-sm">
                We focus on high-demand residential sectors with good
                connectivity, schools, hospitals, and markets nearby.
              </p>
            </div>

            <div className="bg-white border border-[#6DE1D2]/40 rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Transparent Rental Process
              </h3>
              <p className="text-gray-600 text-sm">
                Clear rental details, no hidden charges, and complete
                assistance from property visit to agreement.
              </p>
            </div>

          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center bg-[#6DE1D2] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Looking for a Rental Home in Faridabad?
          </h2>
          <p className="mb-6 text-white/90">
            Explore verified rental houses and find your perfect home today.
          </p>

          <Link
            href="/"
            className="bg-white text-[#6DE1D2] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Browse Rental Homes
          </Link>
        </div>

      </div>
    </section>
  );
}