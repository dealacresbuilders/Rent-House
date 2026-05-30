"use client";

import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";


export default function RentHero() {
  return (
    <section className="w-full bg-[#E6FBF8] py-6 px-6 md:px-16">
    <div className="mb-6 flex justify-start max-w-7xl mx-auto">
   <Breadcrumb />
  </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h1 className="text-3xl md:text-4xl font-bold text-[#0f766e] leading-tight">
            Rent House in Faridabad – Complete Guide to Finding the Right Home
          </h1>

          <p className="text-gray-700 leading-relaxed">
          Introduction – The Problem, the Solution, and Trust
            Finding a rent house in Faridabad is not always easy. Many people face problems like fake listings, high broker charges, and confusion about locations. Sometimes, you see a house online, but when you visit, it is already taken or not as shown.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#6DE1D2]">
            <p className="text-gray-700 leading-relaxed">
              This creates a big trust issue.
            </p>

            <p className="text-gray-700 mt-3 leading-relaxed">
              But today, things are changing. With the right platform, you can find a rent house in Faridabad easily, safely, and without stress. A platform that shows real listings, connects you directly with owners, and removes the middleman makes the process simple.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            This guide will help you understand everything about renting in Faridabad and how to make the best decision.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative bg-gradient-to-br from-[#6DE1D2] to-teal-500 text-white p-8 rounded-3xl shadow-xl space-y-6 overflow-hidden">

          {/* Glow Effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>

          <h2 className="text-2xl font-bold relative z-10">
             What Our Website Does
          </h2>

          <p className="relative z-10">
            Our platform is designed to make property search simple and clear.
          </p>

          <ul className="list-disc pl-5 space-y-1 relative z-10">
            <li>You can find all properties in one place</li>
            <li>Every listing is real and trusted</li>
            <li>You can talk directly to the owner</li>
            <li>No broker or middleman involved</li>
            <li>Anyone can post a free property listing</li>
          </ul>

          <p className="relative z-10">
            This means when you search for a rent house in Faridabad, you get genuine options without confusion.
          </p>

          <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl relative z-10">
            <p>
              The platform focuses on trust, transparency, and simplicity.
            </p>
          </div>

          {/* CTA BUTTON */}
          <Link
            href="/#rent"
            className="inline-block mt-4 bg-white text-[#0f766e] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 relative z-10"
          >
            Explore Rental Homes →
          </Link>

        </div>

      </div>
    </section>
  );
}