import React from "react";

function SkeletonCard() {
  return (
    <ul className="space-y-3 hidden">
      {Array.from({ length: 4 }).map((_, i) => (
        <li
          key={i}
          className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse"
        >
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-xl bg-gray-100 shrink-0" />
            <div className="flex-1 space-y-2.5">
              <div className="h-4 bg-gray-100 rounded w-1/3" />
              <div className="h-3 bg-gray-100 rounded w-1/4" />
              <div className="flex gap-1.5 mt-2">
                <div className="h-5 w-16 bg-gray-100 rounded-full" />
                <div className="h-5 w-12 bg-gray-100 rounded-full" />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SkeletonCard;
