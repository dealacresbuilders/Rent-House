import React from "react";
import { headers } from "next/headers";
import BlogList from "./BlogList";

export async function generateMetadata() {
  const h = headers();
  const domain = h.get("host") || "localhost";

  const cleanDomain = domain.replace(/^www\./, "");

  return {
    title: "Rental Blogs & Tenant Guides | Rent House in Faridabad",
    description:
      "Read the latest rental blogs, tenant guides, rent agreement tips, and sector-wise rental insights in Faridabad. Find expert advice before renting a house.",
    keywords: [
      "rent house in faridabad",
      "faridabad rental blogs",
      "tenant guide faridabad",
      "rent agreement guide",
      "house rent tips",
      "best sectors in faridabad for rent"
    ],
    alternates: {
      canonical: `https://${cleanDomain}/blog`,
    },
  };
}

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#E6FBF8] to-[#E6FBF8]">
      <BlogList />
    </div>
  );
};

export default Page;