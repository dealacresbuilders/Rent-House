import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "Rent House Blogs | Tenant Guide, Rental Tips & Agreement Advice",
    description:
      "Explore rent house blogs with expert tenant guides, rental tips, agreement advice and location insights. Learn how to find and rent the perfect home بسهولة.",
    keywords: [
      "rent house",
      "house for rent",
      "tenant guide",
      "rent agreement tips",
      "home rental advice",
      "rental property blogs"
    ],
    alternates: {
      canonical: "www.houseforrentinfaridabad.com/blog", // 🔥 apna real domain yaha replace karna
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