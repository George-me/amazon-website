"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

const SearchReviews = () => {
  const [inputValue, setInputValue] = useState("");

  // Handler for input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the state with the input value
  };

  const clearInput = () => {
    setInputValue(""); // Clear input on icon click
  };

  return (
    <div>
      <h2 className="text-2xl mb-5 font-bold">Looking for specific info?</h2>

      <div className="w-[800px]">
        {/* Review Search bar */}
        <div className="flex items-center  h-[31px] border border-[#888c8c] rounded shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)]">
          <MagnifyingGlassIcon className="mx-2 h-4 w-4 cursor-pointer" />
          <input
            placeholder="Search in reviews, Q&A..."
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="text-sm w-full h-[24px] outline-none"
          />
          <div
            className={`px-1.5 cursor-pointer ${
              inputValue ? "block" : "hidden"
            }`}
            onClick={clearInput} // Clear input when clicked
          >
            <XMarkIcon className={"h-5 w-5"} />
          </div>
        </div>

        {/* Tab selection */}

        <div>
          <div className="text-sm py-[17px] cursor-pointer">
            <span className="px-5 py-[15px] border-b-[3.5px] border-[#ffa700]">
              All
            </span>
            <span className="px-5 py-[15px]">Product Information</span>
            <span className="px-5 py-[15px]">Customer Q&As</span>
            <span className="px-5 py-[15px]">Customer Reviews</span>
          </div>
          {/* Horizontal Line */}
          <div className="mb-3 border-b-[1px] border-[#BBBFBF]" />

          <span className="text-sm">
            Hmm, no matches. To get an answer, try different keywords or post
            your question to the community.
          </span>

          {/* Post your question component */}
          <div className="relative my-4 text-sm rounded-lg overflow-hidden px-[22px] py-[18px]">
            <span className="font-bold">
              Don't see the answer you're looking for?
            </span>
            <button className="ml-3.5 pl-2.5 pr-[11px] text-[13px] rounded-full text-center py-1 cursor-pointer bg-white border border-[#0f1111] hover:bg-[#F7FAFA] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#edfdff]">
              Post your question
            </button>
            <div className="absolute inset-0 bg-[#f0f2f2] z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchReviews;
