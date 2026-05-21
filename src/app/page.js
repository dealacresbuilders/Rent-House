
import Image from "next/image";
import Hero from "@/components/Hero.jsx"
import Properties from "@/components/Proprtes";
import RentalMarketContent from "@/components/RentalMarketContent";
import HouseRentFAQSection from "@/components/HouseRentFAQSection";
export default function Home() {
  return (
    <>
     <Hero/>
     <Properties/>
     <RentalMarketContent/>
     <HouseRentFAQSection/>
    </>
  );
}
