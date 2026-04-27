import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "House Rental Blog | Renting Tips, Tenant Guide & Property News in Faridabad",
    description:
      "Read expert blogs on house renting tips in Faridabad, rental market trends, tenant rights, rent agreement guide, best localities to rent a house & property news to help you make the smartest rental decision in Faridabad.",
    keywords: [
      "house rental blog Faridabad", "renting tips Faridabad", "rental market trends Faridabad", "tenant rights India", "rent agreement guide Faridabad", "best localities to rent house Faridabad", "real estate news Faridabad", "affordable rental homes Faridabad", "house rent price trends Faridabad", "independent house rental checklist Faridabad"
    ],
    alternates: {
      canonical: "www.renthouseinfaridabad.com/blog", // 🔥 apna real domain yaha replace karna
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