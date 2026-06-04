import React from "react";
import { Link } from "react-router";

function EmptyState() {
  return (
    <div className="flex-col items-center justify-center py-24 text-center">
      <p className="text-3xl mb-4">♡</p>
      <p className="text-sm font-medium text-gray-700 mb-1">
        No saved jobs yet
      </p>
      <p className="text-xs text-gray-400 mb-6">
        Jobs you save will appear here
      </p>
      <Link
        to={"/jobs"}
        className="text-xs px-4 py-2 bg-gray-900 text-white rounded-lg cursor-pointer"
      >
        Browse jobs
      </Link>
    </div>
  );
}

export default EmptyState;
