"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#E6FBF8] px-4 py-20">
      <div className="max-w-6xl mx-auto">

        {/* ================= SECTION 1 : PAGE HEADING ================= */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-[#6DE1D2]">Rent House in Faridabad</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Making it easier for tenants to find the right rental home, and for 
            owners to find the right tenant, without the run-around.
          </p>
        </div>


        {/* ================= SECTION 2 : OUR MISSION ================= */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Finding a good house on rent in Faridabad should not take weeks of calls, 
            site visits, and broker fees. Our mission is to cut through all of that — 
            giving tenants a reliable, up-to-date platform where they can browse 
            genuine rental listings, compare options, and move into their next home 
            with confidence.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            We cover rental properties across Faridabad's most in-demand residential 
            areas — including NIT Faridabad, Neharpar, Sector 15, 16, 21, Ballabhgarh, 
            and many more — so whether you are relocating, starting fresh, or simply 
            looking for a better home, you will always find the right options here.
          </p>
        </div>


        {/* ================= SECTION 3 : STATS BOX ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">

          <div className="bg-white border border-[#6DE1D2]/40 rounded-3xl p-10 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#6DE1D2]">
              1200+
            </h3>
            <p className="text-gray-700 mt-3 text-lg">
              Rental Listings Available
            </p>
          </div>

          <div className="bg-white border border-[#6DE1D2]/40 rounded-3xl p-10 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#6DE1D2]">
              900+
            </h3>
            <p className="text-gray-700 mt-3 text-lg">
              Tenants Successfully Housed
            </p>
          </div>

          <div className="bg-white border border-[#6DE1D2]/40 rounded-3xl p-10 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#6DE1D2]">
              70+
            </h3>
            <p className="text-gray-700 mt-3 text-lg">
              Localities Covered Across Faridabad
            </p>
          </div>

        </div>


        {/* ================= SECTION 4 : WHY CHOOSE US ================= */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white border border-[#6DE1D2]/40 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                Genuine Rental Listings
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every property listed is verified so tenants never waste time 
                chasing fake listings, unavailable properties, or misleading prices.
              </p>
            </div>

            <div className="bg-white border border-[#6DE1D2]/40 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                All of Faridabad, One Platform
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From affordable rentals in NIT Faridabad to spacious homes in 
                Neharpar and Ballabhgarh — find houses for rent across every 
                major locality, all in one place.
              </p>
            </div>

            <div className="bg-white border border-[#6DE1D2]/40 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                Owners, List for Free
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Property owners can post their rental listing in minutes and 
                get it in front of thousands of active tenants searching for 
                homes in Faridabad right now.
              </p>
            </div>

          </div>
        </div>


        {/* ================= SECTION 5 : CTA BANNER ================= */}
        <div className="text-center bg-[#6DE1D2] rounded-3xl p-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Next Rental Home in Faridabad Today.
          </h2>

          <p className="mb-8 text-white/90 text-lg max-w-3xl mx-auto">
            Browse verified houses for rent across Faridabad's top localities — 
            and move into a home that actually fits your life and your budget.
          </p>

          <Link
            href="/"
            className="bg-white text-[#6DE1D2] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Search Rental Properties
          </Link>
        </div>

      </div>
    </section>
  );
}