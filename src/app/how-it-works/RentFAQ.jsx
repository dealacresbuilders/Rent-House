"use client";

import { useState } from "react";

export default function RentFAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "1. How can I find a rent house in Faridabad easily?",
      a: "You can use a property listing platform that shows all properties in one place. It helps you filter by budget, location, and type. Always check trusted listings to avoid fake options. Direct contact with owners also makes the process faster and safer.",
    },
    {
      q: "2. What is the average rent house price in Faridabad?",
      a: "The price depends on location and size. A 1 BHK is cheaper, while 2 BHK and 3 BHK cost more. Areas like Greater Faridabad may have modern options. Overall, it is more affordable than Delhi.",
    },
    {
      q: "3. Is it safe to rent without a broker?",
      a: "Yes, if you use a trusted platform. Direct buyer-seller interaction removes middleman risks. It also saves money and gives clear communication. Always verify documents before finalizing.",
    },
    {
      q: "4. Which areas are best to rent house in Faridabad?",
      a: "Popular areas include Sector 15, Sector 21, and Greater Faridabad. These locations offer good connectivity and facilities. Choose based on your budget and daily needs.",
    },
    {
      q: "5. What documents are needed for renting?",
      a: "You need ID proof, address proof, and photos. Sometimes job details are required. Keep all documents ready to avoid delays in booking a rent house in Faridabad.",
    },
    {
      q: "6. How do I avoid fake property listings?",
      a: "Use platforms that provide verified and trusted listings. Never pay money before visiting the property. Always check ownership and agreement details carefully.",
    },
    {
      q: "7. Can I list my property for free?",
      a: "Yes, you can use platforms that offer free property listing. This helps owners connect directly with tenants. It also increases visibility and saves brokerage fees.",
    },
    {
      q: "8. What are the benefits of direct owner contact?",
      a: "You save money on brokerage. You get clear information. You can negotiate easily. This makes renting a house more transparent and simple.",
    },
    {
      q: "9. Is Faridabad a good place to live on rent?",
      a: "Yes, it is affordable and well-connected. It has schools, hospitals, and markets. Many people prefer a rent house in Faridabad for better living at lower cost.",
    },
    {
      q: "10. How does Deal Acres help in property search?",
      a: "Deal Acres helps improve trust and reach of property listings. It ensures better visibility and genuine options. This makes the process smoother and more reliable.",
    },
  ];

  return (
    <section className="w-full bg-[#E6FBF8] py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold  text-[#0f766e] mb-10">
          FAQs – Rent House in Faridabad
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#6DE1D2]/30"
            >
              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-800">
                  {item.q}
                </span>

                <span className="text-[#0f766e] text-xl font-bold">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 transition-all duration-300 ${
                  open === i
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}