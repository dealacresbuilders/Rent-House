import axios from "axios";
import { locations } from "@/data/locations";

// 🔥 SLUG FUNCTION
const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const currentDate =
    new Date().toISOString();

export async function generateSitemap() {
  const baseUrl = "https://www.renthouseinfaridabad.com";
const apiDomain =
  "www.renthouseinfaridabad.com";
  // 🔹 Static URLs
  const staticUrls = `
    <url><loc>${baseUrl}/</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/about</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/contact</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/blog</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/how-it-works</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/listing/1-bhk-house-for-rent-faridabad</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/listing/2-bhk-house-for-rent-faridabad</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/listing/3-bhk-house-for-rent-faridabad</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/listing/4-bhk-house-for-rent-faridabad</loc>
      <lastmod>${currentDate}</lastmod></url>

  `;
let blogUrls = [];

try {
  const res = await axios.get(
    `https://deal-acres-backend.onrender.com/newBlog/getSlugsByDomain/${apiDomain}`
  );

  console.log("FULL RESPONSE:", res.data);

  // 🔥 RESPONSE HANDLE
  const slugs =
    res.data?.data ||
    res.data?.blogs ||
    res.data ||
    [];

  blogUrls = slugs.map((item) => {
    // Agar object hai
    const slug =
      typeof item === "string"
        ? item
        : item.slug;

    return `
      <url>
        <loc>${baseUrl}/blog/${slug}</loc>
      <lastmod>${currentDate}</lastmod>
      </url>
    `;
  });

} catch (err) {
  console.error(
    "Blog Sitemap Fetch Error:",
    err.message
  );
}
 //properties URLs
  // let propertiesUrls = [];
  // try {
  //   const res = await axios.get(
  //     `https://faridabad-backend.onrender.com/api/listed-properties/getPropertiesSlugs/www.houseforrentinfaridabad.com`
  //   );

  //   propertiesUrls = res.data.map(
  //     (slug) => `
  //       <url>
  //         <loc>${baseUrl}/properties/${slug}</loc>
      //<lastmod>${currentDate}</lastmod>
  //       </url>
  //     `
  //   );
  // } catch (err) {
  //   console.error("Blog fetch error:", err);
  // }

  // 🔥 LOCATION URLs (MAIN PART)
  const locationUrls = locations.map((loc) => {
    const slug = createSlug(loc);

    return `
      <url>
        <loc>${baseUrl}/house-for-rent-in-${slug}-faridabad</loc>
      <lastmod>${currentDate}</lastmod>
      </url>
    `;
  });

  // 🔹 Combine all
  const allUrls = [
    staticUrls,
    ...locationUrls,
    ...blogUrls
  ].join("\n");

  // 🔹 XML Output
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls}
</urlset>`;
}