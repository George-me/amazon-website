import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Pagination = () => {
  return (
    <nav className="inline-flex items-center rounded-lg border border-gray-200 bg-white shadow-sm">
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 text-gray-500 disabled:opacity-50"
        disabled
      >
        <ChevronLeftIcon className="h-4 w-4" />
        <span className="ml-1">Previous</span>
      </button>

      <div className="flex items-center border-l border-r border-gray-200">
        <button
          type="button"
          disabled
          className="px-5 py-3.5 text-sm font-bold text-blue-600 bg-blue-50"
        >
          1
        </button>
        <button
          type="button"
          className="px-5 py-3.5 text-sm font-bold text-gray-600 hover:bg-gray-100"
        >
          2
        </button>
        <button
          type="button"
          className="px-5 py-3.5 text-sm font-bold text-gray-600 hover:bg-gray-100"
        >
          3
        </button>
        <span className="px-4 mb-2 text-gray-700">...</span>
        <button
          type="button"
          className="px-4 py-3.5 text-sm text-gray-600 hover:bg-gray-50"
        >
          400
        </button>
      </div>

      <button
        type="button"
        className="inline-flex items-center px-3 py-3 text-gray-700 hover:bg-gray-100"
      >
        <span className="mr-1">Next</span>
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </nav>
  );
};

export default Pagination;
