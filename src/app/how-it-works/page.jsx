import RentAdvancedSections from "./RentAdvancedSections";
import RentFAQ from "./RentFAQ";
import RentHero from "./RentHero";
import RentSections from "./RentSections";

// ✅ SEO METADATA
export const metadata = {
  title: "How It Works | Easy Steps to Rent a House in Faridabad",

  description:
    "Renting a house in Faridabad is now hassle-free. Search verified rental listings, schedule a free site visit & move into your dream home in Faridabad in just a few simple steps. Zero brokerage. No hidden charges.",

  keywords: [
    "how to rent house in Faridabad", "house renting process Faridabad", "rental home steps Faridabad", "house booking on rent Faridabad", "rental guide Faridabad", "rent independent house Faridabad", "no brokerage house rent Faridabad", "verified rental homes Faridabad", "rent agreement Faridabad", "easy house rental Faridabad"
  ],

  alternates: {
    canonical: "https://www.renthouseinfaridabad.com/",
  },
};

export default function Page() {
  return (
    <>
      <RentHero />
      <RentSections />
      <RentAdvancedSections />
      <RentFAQ />
    </>
  );
}