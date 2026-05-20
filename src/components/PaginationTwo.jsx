"use client";

export default function Pagination({
  page,
  totalPages,
  setPage,
}) {

  if (totalPages <= 1) return null;

  const maxVisible = 3;

  const getVisiblePages = () => {

    let start = Math.max(1, page - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    );
  };

  const visiblePages = getVisiblePages();

  const handlePageChange = (newPage) => {

    if (newPage < 1 || newPage > totalPages) return;

    setPage(newPage);

    setTimeout(() => {

      const section =
        document.getElementById("locations") ||
        document.getElementById("property-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

    }, 100);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

      {/* PREV */}
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
       className="px-4 py-2 rounded-xl border border-[#6DE1D2]
        text-[#6DE1D2] disabled:opacity-40
        hover:bg-[#E6FBF8] transition"
      >
        Prev
      </button>

      {/* PAGES */}
      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => handlePageChange(p)}
          className={`px-4 py-2 rounded-lg transition
            ${
              page === p
               ? "bg-[#6DE1D2] text-white shadow-md"
                : "border border-[#6DE1D2] text-[#6DE1D2] hover:bg-[#E6FBF8]"
            }`}
        >
          {p}
        </button>
      ))}

      {/* NEXT */}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-xl border border-[#6DE1D2]
        text-[#6DE1D2] disabled:opacity-40
        hover:bg-[#E6FBF8] transition"
      >
        Next
      </button>

    </div>
  );
}