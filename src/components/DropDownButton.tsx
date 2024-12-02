import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const DropDownButton = () => {
  const [quantity, setQuantity] = useState<number>(1); // state for quantity
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // state for dropdown visibility
  const dropdownRef = useRef<HTMLDivElement | null>(null); // ref for the dropdown container

  const handleQuantitySelect = (selectedQuantity: number) => {
    setQuantity(selectedQuantity); // update quantity
    setIsDropdownOpen(false); // close the dropdown after selection
  };

  // Close the dropdown if click is outside of it or "Escape" key is pressed
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false); // close dropdown if click is outside
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false); // close dropdown if "Escape" is pressed
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Cleanup event listeners when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {" "}
      {/* Attach ref to the dropdown container */}
      <button
        className="flex items-center justify-between mb-2.5 w-full rounded-lg border border-[#D5D9D9] shadow-sm text-left text-[13px] pl-[11px] py-1.5 cursor-pointer bg-[#F0F2F2] hover:bg-[#E3E6E6] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#F0F2F2]"
        onClick={() => setIsDropdownOpen((prev) => !prev)} // toggle dropdown visibility
      >
        Quantity: {quantity}
        <ChevronDownIcon className="h-4 w-4 mx-2 stroke-2" />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 w-full overflow-auto h-28 bg-white border border-[#D5D9D9] rounded-lg shadow-lg">
          <ul className="text-sm">
            {/* Generate quantity options (you can change range or options) */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <li
                key={num}
                className="cursor-pointer hover:bg-[#F0F2F2] px-3 py-1"
                onClick={() => handleQuantitySelect(num)} // select quantity
              >
                {num}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
