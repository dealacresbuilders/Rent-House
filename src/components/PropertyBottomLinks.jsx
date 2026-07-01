"use client";

import Link from "next/link";

export default function PropertyBottomLinks({
  propertyType,
  city,
  color = "#0046FF",
}) {
  const typeSlug = propertyType
    ?.toLowerCase()
    .trim()
    .replace(/[\s\W]+/g, "-");

  const exploreLink = `https://www.dealacres.com/properties/${typeSlug}-for-rent-in-${city}`;

  const handleDealAcresClick = (e) => {
    if (typeof window === "undefined") return;

    const now = new Date();

    const todayMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    ).getTime();

    // Start Date : 30 June 2026
    const startDate = new Date(2026, 5, 30).getTime();

    const diffDays = Math.floor(
      (todayMidnight - startDate) / (1000 * 60 * 60 * 24)
    );

    // 30 June = 10
    // 1 July = 20
    // 2 July = 30
    const MAX_CLICKS = (Math.max(0, diffDays) + 1) * 10;

    // Har domain ka alag counter
    const storageKey = `dealAcresDailyClicks_${window.location.hostname}`;

    let clickData = JSON.parse(localStorage.getItem(storageKey));

    if (!clickData || clickData.date !== todayMidnight) {
      clickData = {
        date: todayMidnight,
        count: 0,
      };
    }

   if (clickData.count >= MAX_CLICKS) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

    clickData.count += 1;

    localStorage.setItem(storageKey, JSON.stringify(clickData));
  };

  return (
    <div className="border-t border-gray-100 mt-3 pt-2 flex justify-between items-center text-sm font-medium">
      <Link
        href={exploreLink}
        target="_blank"
        onClick={handleDealAcresClick}
        className="group flex items-center gap-1"
      >
        <span
          style={{ color }}
          className="group-hover:underline"
        >
          Explore More
        </span>

        <span
          style={{ color }}
          className="group-hover:translate-x-1 transition-transform"
        >
          →
        </span>
      </Link>

      <div className="h-4 w-px bg-gray-300"></div>

      <Link
        href="https://www.dealacres.com/sell-property"
        target="_blank"
        onClick={handleDealAcresClick}
        className="group flex items-center gap-1"
      >
        <span
          style={{ color }}
          className="group-hover:underline"
        >
          Free Property Post
        </span>

        <span
          style={{ color }}
          className="group-hover:translate-x-1 transition-transform"
        >
          →
        </span>
      </Link>
    </div>
  );
}