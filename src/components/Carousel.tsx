import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CarouselCardItem from "./CarouselCardItem";
import { CarouselData } from "./CarouselData";

const Carousel = () => {
  return (
    <div>
      <h2 className="text-[21px] mb-3 font-bold">
        What other items do customers buy after viewing this item?
      </h2>
      <div className="flex items-center">
        <div>
          <button className="flex w-[37px] p-1.5 items-center justify-center rounded-[7px] cursor-pointer border border-[#888c8c] bg-white hover:bg-[#F7FAFA] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#edfdff]">
            <ChevronLeftIcon className="h-[25px] w-[20px] mr-0.5" />
          </button>
        </div>
        <div className="flex w-full justify-around">
          {CarouselData.map((item, index) => {
            // Determine the display class based on the index
            let displayClass = "";
            if (index === 0) {
              displayClass = ""; // Always show the first item
            } else if (index === 1) {
              displayClass = ""; // Always show the second item
            } else if (index === 2) {
              displayClass = "hidden sm:block"; // Show from small screens
            } else if (index === 3) {
              displayClass = "hidden md:block"; // Show from medium screens
            } else if (index === 4) {
              displayClass = "hidden lg:block"; // Show from large screens
            } else if (index === 5) {
              displayClass = "hidden xl:block"; // Show from extra large screens
            } else {
              displayClass = "hidden";
            }
            return (
              <div key={index} className={displayClass}>
                <CarouselCardItem item={item} />
              </div>
            );
          })}
        </div>
        <div>
          <button className="flex w-[37px] p-1.5 items-center justify-center rounded-[7px] cursor-pointer border border-[#888c8c] bg-white hover:bg-[#F7FAFA] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#edfdff]">
            <ChevronRightIcon className="h-[25px] w-[20px] mr-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
