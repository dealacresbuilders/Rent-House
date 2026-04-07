import RentAdvancedSections from "./RentAdvancedSections";
import RentFAQ from "./RentFAQ";
import RentHero from "./RentHero";
import RentSections from "./RentSections";

export default function Page() {
  return (
    <>
    <RentHero/>
    <RentSections/>
    <RentAdvancedSections/>
    <RentFAQ/>
    </>
  );
}