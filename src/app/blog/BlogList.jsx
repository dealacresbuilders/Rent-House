"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Date formatter
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {

  const loading = false;
  const error = null;

  const blogs = [
    {
      _id: "1",
      Slug: "best-sectors-for-rent-in-faridabad",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      },
      HeroAltText: "Best Sectors for Rent in Faridabad",
      Category: "Rental Guide",
      Title: "Best Sectors to Rent a House in Faridabad in 2024",
      Date: "2024-05-10",
    },
    {
      _id: "2",
      Slug: "documents-required-for-renting-house",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
      },
      HeroAltText: "Documents Required for Renting",
      Category: "Tenant Guide",
      Title: "Documents Required for Renting a House in Faridabad",
      Date: "2024-04-22",
    },
    {
      _id: "3",
      Slug: "how-to-find-affordable-rent",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      },
      HeroAltText: "Affordable Rental Homes",
      Category: "Budget Rental",
      Title: "How to Find Affordable Rental Homes in Faridabad",
      Date: "2024-03-18",
    },
    {
      _id: "4",
      Slug: "rent-agreement-guide",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      },
      HeroAltText: "Rent Agreement Guide",
      Category: "Legal Guide",
      Title: "Understanding Rent Agreements: A Complete Guide",
      Date: "2024-02-05",
    },
    {
      _id: "5",
      Slug: "bhk-guide-for-tenants",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      },
      HeroAltText: "BHK Guide",
      Category: "Rental Tips",
      Title: "Which BHK is Right for You? A Tenant’s Guide",
      Date: "2024-01-12",
    },
    {
      _id: "6",
      Slug: "things-to-check-before-renting",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      },
      HeroAltText: "Things to Check Before Renting",
      Category: "Tenant Checklist",
      Title: "Important Things to Check Before Renting a House",
      Date: "2023-12-28",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto py-16 bg-gradient-to-b from-white to-[#E6FBF8]">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Rental Insights &{" "}
          <span className="text-[#6DE1D2]">Faridabad Updates</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay informed with rental tips, tenant guides, legal updates,
          and sector-wise insights to find the perfect home in Faridabad.
        </p>
      </div>

      {/* ===== LOADING ===== */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-[#6DE1D2]/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#6DE1D2] animate-spin"></div>
          </div>
        </div>
      )}

      {/* ===== ERROR ===== */}
      {error && !loading && (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Something went wrong
          </h2>
          <p className="text-gray-600">
            Unable to load blogs right now.
          </p>
        </div>
      )}

      {/* ===== BLOG GRID ===== */}
      {!loading && !error && blogs?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((post, index) => (
            <Link
              href={`/blog/${post.Slug}`}
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-[#6DE1D2]/30 transition duration-300"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={post.HeroImg?.url}
                  alt={post?.HeroAltText}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* CATEGORY */}
                <span className="inline-block text-xs font-semibold bg-[#E6FBF8] text-[#6DE1D2] px-3 py-1 rounded-full mb-3">
                  {post.Category}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#6DE1D2] transition-colors duration-300">
                  {post.Title}
                </h3>

                {/* DATE */}
                <p className="text-sm text-gray-500">
                  {formatDate(post.Date)}
                </p>

              </div>

            </Link>
          ))}

        </div>
      )}

      {/* ===== EMPTY ===== */}
      {!loading && !error && blogs?.length === 0 && (
        <div className="text-center py-16 text-gray-600">
          No blogs found.
        </div>
      )}

    </section>
  );
}