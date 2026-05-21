"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PropertyViewButton({ slug }) {

  const [todayViews, setTodayViews] = useState(0);

  // 🔥 START DATE
  const startDate = new Date("2026-05-21");

  // 📅 TODAY
  const todayDate = new Date();

  // 🔥 DIFFERENCE IN DAYS
  const diffTime =
    todayDate.getTime() - startDate.getTime();

  const diffDays = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );

  // 🔥 EVERY DAY +50
  // Day 1 = 50
  // Day 2 = 100
  // Day 3 = 150

  const dailyLimit = 50 + diffDays * 50;

  // 🔥 TODAY KEY
  const today = todayDate.toISOString().split("T")[0];

  // ✅ LOAD SAVED DATA
  useEffect(() => {

    const savedDate =
      localStorage.getItem("viewDate");

    const savedViews =
      localStorage.getItem("todayViews");

    // 🔥 NEW DAY RESET
    if (savedDate !== today) {

      localStorage.setItem("viewDate", today);

      localStorage.setItem("todayViews", "0");

      setTodayViews(0);

    } else {

      setTodayViews(
        Number(savedViews || 0)
      );

    }

  }, [today]);

  // 🔥 HANDLE CLICK
  const handleViewClick = (e) => {

    // ALWAYS GET LATEST VALUE
    const currentViews = Number(
      localStorage.getItem("todayViews") || 0
    );

    // 🔥 LIMIT REACHED
    if (currentViews >= dailyLimit) {

      e.preventDefault();

      

      return;
    }

    const updatedViews = currentViews + 1;

    // ✅ SAVE
    localStorage.setItem(
      "todayViews",
      updatedViews.toString()
    );

    // ✅ UPDATE STATE
    setTodayViews(updatedViews);
  };

  return (
   <Link
  href={`https://www.dealacres.com/property/${slug}`}
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleViewClick}
  className="border border-[#6DE1D2]
  text-[#6DE1D2]
  px-4 sm:px-6 py-2 rounded-full
  hover:bg-[#E6FBF8]
  transition w-full md:w-auto
  text-center font-semibold text-sm pointer-events-none"
>
  View Details
</Link>
  );
}