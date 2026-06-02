import React, { useState } from "react";
import { CATEGORIES, JOB_TYPES } from "../data/jobs";
import { useSavedJobs } from "../context/SavedJobsContext";
import { useSearchParams } from "react-router";

function Filterbar({ searchInput, setSearchInput }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "All") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    setSearchParams(params);
  };
  const activeCategory = searchParams.get("category") || "All";
  const activeType = searchParams.get("type") || "All";

  return (
    <>
      {/* Search */}
      <div className="relative mb-5">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          ⌕
        </span>
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          placeholder="Search by title, company, or skill…"
          className="w-full pl-8 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none placeholder-gray-300"
        />
      </div>

      <div className="flex gap-2 flex-wrap mb-3">
        {JOB_TYPES.map((type) => (
          <button
            onClick={(e) => {
              updateParam("type", type);
            }}
            key={type}
            className={`text-xs px-3 py-1.5 rounded-full border cursor-pointer ${
              type == activeType
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Category pills */}
      <div className="flex gap-2 flex-wrap mb-8">
        {CATEGORIES.map((cat) => (
          <button
            onClick={(e) => updateParam("category", cat)}
            key={cat}
            className={`text-xs px-3 py-1.5 rounded-full border cursor-pointer ${
              cat == activeCategory
                ? "bg-gray-100 text-gray-900 border-gray-300 font-medium"
                : "bg-white text-gray-400 border-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}

export default Filterbar;
