"use client";

export default function RentAdvancedSections() {
  return (
    <section className="w-full bg-[#E6FBF8] py-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 11 */}
        <div className="bg-gradient-to-br from-[#0f766e] to-[#6DE1D2] text-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">
            Free Listing + Deal Acres Partnership
          </h2>

          <p className="mb-4">
            Our platform allows free property listing for everyone.
          </p>

          <p className="font-semibold mb-2">This means:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Owners can list property without cost</li>
            <li>More options for tenants</li>
            <li>Fresh and updated listings</li>
          </ul>

          <p className="mb-4">
            We also have a strong partnership with Deal Acres, which helps improve property reach and trust.
          </p>

          <p>
            This makes searching for a rent house in Faridabad more reliable and easy.
          </p>
        </div>

        {/* 12 TIMELINE */}
        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h2 className="text-2xl font-bold text-[#0f766e] mb-8">
           Step-by-Step Process
          </h2>

          <div className="border-l-4 border-[#6DE1D2] pl-6 space-y-6">
            {[
              "Step 1 Search your location and budget.",
              "Step 2 Browse trusted listings.",
              "Step 3 Check details and photos.",
              "Step 4 Contact the owner directly.",
              "Step 5 Visit the property.",
              "Step 6 Finalize and move in."
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[34px] top-1 w-5 h-5 bg-[#0f766e] rounded-full"></div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-6">
            Simple and quick process to find a rent house in Faridabad.
          </p>
        </div>

        {/* 13 + 14 */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-xl font-bold text-[#0f766e] mb-4">
              Legal Checks Before Renting
            </h2>

            <p className="font-semibold mb-2 text-black">Always check:</p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Ownership proof</li>
              <li>Rental agreement</li>
              <li>ID verification</li>
            </ul>

            <p className="font-semibold mb-2 text-black">Important Points:</p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Read agreement carefully</li>
              <li>Check rent and deposit</li>
              <li>Confirm notice period</li>
            </ul>

            <p className="text-gray-700">
              These steps protect you when renting a house.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#6DE1D2] to-teal-500 text-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-xl font-bold mb-4">
              Documents Required
            </h2>

            <p className="mb-4">You may need:</p>

            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>ID proof (Aadhar/PAN)</li>
              <li>Address proof</li>
              <li>Passport size photos</li>
              <li>Job details (sometimes)</li>
            </ul>

            <p>
              Keep documents ready when searching for a rent house in Faridabad.
            </p>
          </div>

        </div>

        {/* 15 */}
        <div className="bg-white rounded-3xl p-8 shadow-md border-t-4 border-[#6DE1D2]">
          <h2 className="text-2xl font-bold text-[#0f766e] mb-4">
            Problems Buyers Face + Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p><b>Problem:</b> Fake Listings</p>
              <p><b>Solution:</b> Use trusted platform</p>

              <p className="mt-3"><b>Problem:</b> High Broker Fees</p>
              <p><b>Solution:</b> Direct owner contact</p>
            </div>

            <div>
              <p><b>Problem:</b> Limited Options</p>
              <p><b>Solution:</b> Find all properties in one place</p>

              <p className="mt-3"><b>Problem:</b> Confusion</p>
              <p><b>Solution:</b> Clear property details</p>
            </div>
          </div>

          <p className="text-gray-700 mt-4">
            Our platform solves all these problems.
          </p>
        </div>

        {/* 16 + 17 */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-xl font-bold text-[#0f766e] mb-4">
              16. Mistakes to Avoid
            </h2>

            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Not visiting property</li>
              <li>Ignoring agreement details</li>
              <li>Paying advance without checking</li>
              <li>Choosing wrong location</li>
            </ul>

            <p className="text-gray-700">
              Avoid these mistakes while selecting a rent house in Faridabad.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0f766e] to-[#6DE1D2] text-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-xl font-bold mb-4">
               Future Growth and Investment
            </h2>

            <p className="mb-4">
              Faridabad has strong future growth.
            </p>

            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Infrastructure improving</li>
              <li>Metro expansion</li>
              <li>New projects coming</li>
            </ul>

            <p>
              This means better rental options and value.
            </p>
          </div>

        </div>

        {/* 18 + 19 */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-xl font-bold text-[#0f766e] mb-4">
             Who Should Use This Platform
            </h2>

            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Working professionals</li>
              <li>Families</li>
              <li>Students</li>
              <li>Property owners</li>
            </ul>

            <p className="text-gray-700">
              Anyone looking for a rent house in Faridabad can use this platform.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md border border-[#6DE1D2]/40">
            <h2 className="text-xl font-bold text-[#0f766e] mb-4">
             Benefits for Sellers
            </h2>

            <p className="mb-4 text-gray-700">
              Sellers also get big advantages:
            </p>

            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Free property listing</li>
              <li>Direct tenant contact</li>
              <li>No broker involved</li>
              <li>Faster deals</li>
            </ul>

            <p className="text-gray-700">
              This creates a win-win situation for both sides.
            </p>
          </div>

        </div>

        {/* 20 FINAL */}
        <div className="bg-gradient-to-r from-[#0f766e] to-[#6DE1D2] text-white rounded-3xl p-10  shadow-xl">
          <h2 className="text-2xl font-bold mb-4">
           Conclusion – Complete Solution
          </h2>

          <p className="mb-4">
            Finding a rent house in Faridabad does not have to be hard.
          </p>

          <p className="mb-4">
            With the right platform:
          </p>

          <ul className="list-disc inline-block text-left pl-5 mb-4">
            <li>You find trusted listings</li>
            <li>You connect directly with owners</li>
            <li>You avoid extra costs</li>
            <li>You get all options in one place</li>
          </ul>

          <p className="mb-4">
            With features like free property listing and support from Deal Acres, the process becomes simple, safe, and clear.
          </p>

          <p>
            This is the smart way to rent a home today.
          </p>

         
        </div>

      </div>
    </section>
  );
}