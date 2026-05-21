"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What is the average monthly rent for a house in Faridabad?",
    answer:
      "Monthly rents in Faridabad vary by size and location. A 1 BHK typically rents for ₹8,000–14,000, a 2 BHK for ₹15,000–25,000, and a 3 BHK independent house or builder floor for ₹22,000–40,000 per month. Furnished homes and properties near metro stations command 15–25% higher rents.",
  },
  {
    question:
      "Which are the best areas to rent a house in Faridabad?",
    answer:
      "Top localities for house rentals in Faridabad include Sainik Colony, NIT, Neharpar (Sectors 82–88), Sector 16, Sector 46, Greenfield Colony, Aravali Vihar, and Ballabhgarh. These areas offer good connectivity, established markets, schools, and hospitals within easy reach.",
  },
  {
    question:
      "Is it easy to find a furnished house for rent in Faridabad?",
    answer:
      "Yes, furnished and semi-furnished rental homes are widely available in Faridabad, particularly in sectors popular with corporate tenants and students. Common furnishings include beds, wardrobes, modular kitchen fittings, ACs, and sometimes washing machines — always confirm inclusions before signing the rental agreement.",
  },
  {
    question:
      "What documents are required to rent a house in Faridabad?",
    answer:
      "Landlords typically require government-issued photo ID (Aadhaar, passport, or driving licence), a recent passport-sized photograph, address proof, and sometimes a last-month salary slip or employment letter for salaried tenants. A duly stamped rental agreement is mandatory for legal protection of both parties.",
  },
  {
    question:
      "How much security deposit is standard for renting a house in Faridabad?",
    answer:
      "The standard security deposit for renting a house in Faridabad is 2–3 months' rent, though some landlords ask for up to 6 months for furnished properties. Always get the deposit terms clearly documented in the rental agreement, including refund timelines and conditions for deductions.",
  },
  {
    question:
      "Can I find no-brokerage house rentals in Faridabad?",
    answer:
      "Yes. Our platform directly connects tenants with property owners, eliminating the traditional broker entirely. You can browse verified no-brokerage house rentals in Faridabad, contact owners directly, and sign a transparent rental agreement — saving you one to two months of rent in brokerage fees.",
  },
  {
    question:
      "Is Faridabad a good city for families looking to rent a house?",
    answer:
      "Absolutely. Faridabad is one of the most family-friendly rental markets in the NCR. It offers large independent homes at affordable rents, excellent schools like DPS, Ryan International, and St. Xavier's, reputed hospitals, parks, and a generally safe residential environment in established colonies.",
  },
  {
    question:
      "Can I rent a house in Faridabad near the Delhi Metro station?",
    answer:
      "Yes. Rental properties near metro stations like Escorts Mujesar, NHPC Chowk, Sarai, and Old Faridabad are readily available. These properties are in high demand and rent slightly higher but offer unbeatable commute convenience for professionals working in Delhi or central NCR.",
  },
  {
    question:
      "Is it legal for a landlord to increase rent without notice in Faridabad?",
    answer:
      "No. Under Indian tenancy law, landlords must provide advance written notice before increasing rent, as agreed in the rental agreement. Standard practice allows a 5–10% annual increase. Tenants are protected under the Haryana Urban (Control of Rent and Eviction) Act and can challenge illegal hikes.",
  },
  {
    question:
      "How do I find a verified house for rent in Faridabad without visiting in person?",
    answer:
      "Our platform offers virtual property tours, high-quality photo galleries, and detailed locality information for all rental listings. You can shortlist properties online, speak with owners via phone or video call, and finalise terms before your physical site visit — ideal for outstation tenants relocating to Faridabad.",
  },
];

export default function HouseRentFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="w-full py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="mb-10 md:mb-14 ">
            {/* <div className="inline-flex items-center rounded-full bg-[#6DE1D2]/15 px-5 py-2 text-sm font-semibold tracking-wide text-[#00A99D]">
              Rental Housing FAQ
            </div> */}

            <h2 className="mt-5 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-700 text-base md:text-lg max-w-3xl  mt-4 md:mt-5 leading-7 md:leading-8">
              Everything you need to know before renting a house in Faridabad.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`group rounded-[28px] border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-[#6DE1D2]/40 shadow-[0_20px_50px_rgba(109,225,210,0.14)]"
                      : "border-cyan-100 hover:border-[#6DE1D2]/50"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-start justify-between gap-4 px-5 md:px-8 py-6 md:py-7 text-left bg-gradient-to-br from-cyan-50 via-[#eefefd] to-teal-50"
                  >
                    <h3 className="text-base sm:text-lg md:text-[22px] font-semibold text-gray-900 leading-7 md:leading-8 pr-2">
                      {faq.question}
                    </h3>

                    <div
                      className={`flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#00A99D] text-white rotate-180"
                          : "bg-white text-[#00A99D] group-hover:bg-[#00A99D] group-hover:text-white"
                      }`}
                    >
                      <ChevronDown size={22} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out bg-white ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-8 pb-6 md:pb-8">
                        <div className="h-px bg-cyan-100 mb-5 md:mb-6"></div>

                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 md:leading-9">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}