import PropertyTypePage from "./ListingPage";

export async function generateMetadata({ params }) {
  const { propertyType } = await params;

  const formattedType = propertyType
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${formattedType} Houses for Rent in Faridabad`,

    description: `Explore ${formattedType} houses for rent in Faridabad. Find independent houses, villas, and rental homes with modern amenities in prime locations of Faridabad.`,

    keywords: [
      `${formattedType} houses for rent in Faridabad`,
      `rent ${formattedType} house Faridabad`,
      `${formattedType} villa rent Faridabad`,
      `${formattedType} independent house Faridabad`,
      `property for rent Faridabad`,
      `Faridabad rental homes`,
    ],

    alternates: {
      canonical: `https://www.renthouseinfaridabad.com/listing/${propertyType}`,
    },
  };
}

export default function Page(props) {
  return <PropertyTypePage {...props} />;
}