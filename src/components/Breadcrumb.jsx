"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Breadcrumb({ property }) {
  const pathname = usePathname();

  const [lastLocation, setLastLocation] = useState("");
  const [lastListing, setLastListing] = useState("");

  const pathParts = pathname.split("/").filter(Boolean);

  const formatTitle = (text = "") =>
    text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  // ================= STORAGE =================
  useEffect(() => {
    if (pathname === "/") {
      localStorage.removeItem("lastLocation");
      localStorage.removeItem("lastListing");
      setLastLocation("");
      setLastListing("");
      return;
    }

    const storedLocation = localStorage.getItem("lastLocation") || "";
    const storedListing = localStorage.getItem("lastListing") || "";

    setLastLocation(storedLocation);
    setLastListing(storedListing);
  }, [pathname]);

  const baseClass = "text-gray-700 hover:underline";

  // ================= BLOG =================
  if (pathname.startsWith("/blog")) {
    if (pathname === "/blog") {
      return (
        <div className="text-xs flex gap-2 text-gray-700">
          <Link href="/" className={baseClass}>Home</Link>
          <span>›</span>
          <span className="font-semibold">Blog</span>
        </div>
      );
    }

    const slug = pathParts[pathParts.length - 1];

    return (
      <div className="text-xs flex gap-2 flex-wrap text-gray-700">
        <Link href="/" className={baseClass}>Home</Link>
        <span>›</span>
        <Link href="/blog" className={baseClass}>Blog</Link>
        <span>›</span>
        <span className="font-semibold">{formatTitle(slug)}</span>
      </div>
    );
  }

  // ================= PROPERTY =================
  if (property) {
    const city = property?.city || lastLocation || "";

    let listingName = "";
    let listingLink = "";

    if (lastListing && city) {
      const slug = lastListing.split("/").pop();

      if (slug && slug.includes(city.toLowerCase())) {
        listingName = formatTitle(slug);
        listingLink = lastListing;
      }
    }

    return (
      <div className="text-xs flex gap-2 flex-wrap text-gray-700">

        <Link href="/" className={baseClass}>Home</Link>

        {city && (
          <>
            <span>›</span>
            <Link href={`/${city.toLowerCase()}`} className={baseClass}>
              {city}
            </Link>
          </>
        )}

        {listingName && (
          <>
            <span>›</span>
            <Link href={listingLink} className={baseClass}>
              {listingName}
            </Link>
          </>
        )}

        <span>›</span>
        <span className="font-semibold">
          {property?.title || "Property"}
        </span>
      </div>
    );
  }

  // ================= LISTING =================
  const filteredParts = pathParts.filter((p) => p !== "listing");
  const lastPart = filteredParts[filteredParts.length - 1];

  let city = "";
  let title = "";

  if (lastPart) {
    const words = lastPart.split("-");
    city = words[words.length - 1] || "";
    title = words.join(" ");
  }

  return (
    <div className="text-xs flex gap-2 flex-wrap text-gray-700">

      <Link href="/" className={baseClass}>Home</Link>

      {city && (
        <>
          <span>›</span>
          <Link href={`/${city}`} className="text-gray-700 hover:underline">
  {formatTitle(city)}
</Link>
        </>
      )}

      {title && (
        <>
          <span>›</span>
          <span className="font-semibold">
            {formatTitle(title)}
          </span>
        </>
      )}
    </div>
  );
}