import React from "react";

function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Job title"
        value={filters.title}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, title: e.target.value }))
        }
        className="px-4 py-2 border rounded w-full sm:w-1/3"
      />
      <input
        type="text"
        placeholder="Company"
        value={filters.company}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, company: e.target.value }))
        }
        className="px-4 py-2 border rounded w-full sm:w-1/3"
      />
      <input
        type="text"
        placeholder="Keyword"
        value={filters.keyword}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, keyword: e.target.value }))
        }
        className="px-4 py-2 border rounded w-full sm:w-1/3"
      />
      <button
        onClick={() => setFilters({ title: "", company: "", keyword: "" })}
        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded w-full sm:w-auto"
      >
        Reset
      </button>
    </div>
  );
}

export default FilterBar;
