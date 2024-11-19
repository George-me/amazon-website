import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";

const PRightColumn = () => {
  return (
    <div className="flex-shrink-0 w-[245px]" id="right-column">
      <div className="border border-b-[1px] border-[#BBBFBF] rounded-lg">
        <div className="relative px-[18px] pt-2.5">
          <p className="font-bold text-sm">Buy new:</p>
          {/* Price section */}
          <div className="flex items-baseline mt-1">
            <span className="text-sm mt-1 self-start">AED</span>
            <span className="text-3xl font-medium">762</span>
            <span className="text-sm mt-1 self-start">00</span>
          </div>
          <div className="absolute top-3 right-3 w-[17px] h-[17px] border-[5.2px] border-[#007185] rounded-xl" />
        </div>
        <div className="px-[18px] pt-1 mb-3.5">
          <div className="flex items-end mt-1.5 mb-3">
            <span className="text-sm sideLink text-[#007185] mr-1">
              FREE Returns
            </span>
            <ChevronDownIcon className="h-4 w-4 stroke-2" />
          </div>
          <p className="text-sm mb-3">
            <span className="sideLink hover:underline text-[#007185]">
              FREE delivery
            </span>{" "}
            <span className="font-bold">Monday, 11 November</span>
          </p>
          <p className="text-sm mb-3">
            Or fastest delivery{" "}
            <span className="font-bold">Tomorrow, 7 November.</span> Order
            within{" "}
            <span className="text-[#007600] font-semibold">1 hr 52 mins</span>
          </p>
          <div className="inline-flex mb-2 items-center">
            <MapPinIcon className="h-5 w-h-5 stroke-2" />
            <p className="text-xs sideLink text-[#007185] line-clamp-1 ml-1.5">
              Deliver to Dubai, Al Barsha Heights 3284
            </p>
          </div>
          {/* Buttons Group */}
          <div id="Buttons-group">
            <p className="text-lg text-[#007600] pt-1 mb-3">In Stock</p>
            <button className="flex items-center justify-between mb-2.5 w-full rounded-lg border border-[#D5D9D9] shadow-sm text-left text-[13px] pl-[11px] py-1.5 cursor-pointer bg-[#F0F2F2] hover:bg-[#E3E6E6] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#F0F2F2]">
              Quantity: 1
              <ChevronDownIcon className="h-4 w-4 mx-2 stroke-2" />
            </button>
            <button className="mb-2 w-full rounded-full text-center text-sm py-1.5 cursor-pointer bg-[#ffd814] hover:bg-[#F7CA00] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#F0B800]">
              Add to Cart
            </button>
            <button className="w-full rounded-full text-center text-sm py-1.5 cursor-pointer bg-[#FFA41C] hover:bg-[#FA8900] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#FFA41C]">
              Buy Now
            </button>
          </div>
          <div className="p-[5px] grid grid-cols-2 text-xs mt-3">
            <ul className="space-y-1">
              <li>Ships from</li>
              <li>Sold by</li>
              <li>Payment</li>
            </ul>
            <ul className="space-y-1">
              <li>Amazon.ae</li>
              <li>Amazon.ae</li>
              <li className="sideLink text-[#007185]">Secure transaction</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold mt-3">Add a Protection Plan:</h2>
            <label className="flex items-baseline mr-2 my-1">
              <input
                type="checkbox"
                className="form-checkbox accent-[#007185] rounded transform"
              />
              <span className={"text-sm pl-2 font-semibold"}>
                <span className="sideLink text-[#007185] hover:underline">
                  1-Year Extended Warranty by Salama Care (E-mail delivery)
                </span>
                <br />
                for <span className="text-[#b12704]">AED 40.00</span>
              </span>
            </label>
            <label className="flex items-baseline mr-2">
              <input
                type="checkbox"
                className="form-checkbox accent-[#007185] rounded transform"
              />
              <span className={"text-sm pl-2 font-semibold"}>
                <span className="sideLink text-[#007185] hover:underline">
                  2-Year Extended Warranty by Salama Care (E-mail delivery)
                </span>
                <br />
                for <span className="text-[#b12704]">AED 57.00</span>
              </span>
            </label>
          </div>
        </div>
        <div
          className="relative rounded-b-lg px-[18px] py-2.5 bg-[#F3F3F3] cursor-pointer hover:bg-[#E9E9E9] border-[3px] border-transparent focus:border-[#007185]"
          tabIndex={0}
        >
          <div className="absolute top-3 right-3 w-[17px] h-[17px] bg-white border border-[#0f1111] hover:border-[#1196AB] hover:border-[3.5px] rounded-xl" />
          <p className="text-sm font-bold">Save with used – like new</p>
          {/* Price section */}
          <div className="flex items-baseline my-1">
            <span className="text-xs mt-1 self-start">AED</span>
            <span className="text-xl font-medium">762</span>
            <span className="text-xs mt-1 self-start">00</span>
          </div>
          <p className="text-sm mb-3">
            <span className="sideLink hover:underline text-[#007185]">
              FREE delivery
            </span>{" "}
            <span className="font-bold text-[#565959]">
              Monday, 11 November
            </span>
          </p>
          <p className="text-xs text-[#565959]">Dispatched from: Amazon</p>
          <p className="text-xs text-[#565959] mt-1">
            Sold by: Amazon Warehouse
          </p>
        </div>
      </div>
    </div>
  );
};

export default PRightColumn;
