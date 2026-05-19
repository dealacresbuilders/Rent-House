"use client";

export default function HisarMarketOverview({
  pageContent,
}) {
  return (
    <section className="w-full px-4 py-7">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          bg-[#6DE1D2]
          p-6
          md:p-10
          lg:p-14
          border
          border-[#f7e7b5]/30
          relative
          overflow-hidden
        "
      >

        {/* TOP BLUR */}
        <div
          className="
            absolute
            -top-24
            -right-24
            w-80
            h-80
            bg-white/20
            rounded-full
            blur-3xl
          "
        ></div>

        {/* BOTTOM BLUR */}
        <div
          className="
            absolute
            -bottom-24
            -left-24
            w-80
            h-80
            bg-[#fff6d6]/20
            rounded-full
            blur-3xl
          "
        ></div>

        <div className="relative z-10">

          {/* HEADING */}
          {/* <h2
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-white
              leading-tight
            "
          >
            Real Estate Market Overview
          </h2> */}

          {/* LINE */}
          <div
            className="
              w-28
              h-1.5
              rounded-full
              bg-white/90
              mt-6
              mb-8
            "
          ></div>

          {/* CONTENT */}
          <div
            className="
              text-base
              md:text-lg
              lg:text-[19px]
              leading-9
              text-white/95
              font-medium
              tracking-wide
            "
          >
            {pageContent ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: pageContent,
                }}
              />
            ) : (
              <p>
                No content available.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}