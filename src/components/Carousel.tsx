import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CarouselCardItem from "./CarouselCardItem";

const items = [1, 2, 3, 4, 5, 6];

const Carousel = () => {
  return (
    <div className="flex items-center">
      <div>
        <button className="flex w-[37px] p-1.5 items-center justify-center rounded-[7px] cursor-pointer border border-[#888c8c] bg-white hover:bg-[#F7FAFA] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#edfdff]">
          <ChevronLeftIcon className="h-[25px] w-[20px] mr-0.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center">
        {items.map((_, index) => (
          <div
            key={index}
            className={`${index > 1 && "hidden"} sm:${
              index > 2 && "hidden" && index <= 3 && "block"
            } md:${index > 1 && "hidden" && index <= 3 && "block"} lg:${
              index > 0 && "hidden" && index <= 4 && "block"
            } xl:${"block"}`}
          >
            <CarouselCardItem />
          </div>
        ))}
      </div>
      <div>
        <button className="flex w-[37px] p-1.5 items-center justify-center rounded-[7px] cursor-pointer border border-[#888c8c] bg-white hover:bg-[#F7FAFA] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#edfdff]">
          <ChevronRightIcon className="h-[25px] w-[20px] mr-0.5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
