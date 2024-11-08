import React from "react";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import {
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const buyingOptions = [
  {
    text1: "15 days",
    text2: "Returnable",
    img: "https://m.media-amazon.com/images/G/39/A2I-Convert/mobile/IconFarm/icon-returns._CB405876392_.png",
  },
  {
    text1: "Free",
    text2: "Delivery",
    img: "https://m.media-amazon.com/images/G/39/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB613167361_.png",
  },
  {
    text1: "Cash on",
    text2: "Delivery",
    img: "https://m.media-amazon.com/images/G/39/A2I-Convert/mobile/IconFarm/icon-cod._CB638847680_.png",
  },
  {
    text1: "Delivered",
    text2: "by Amazon",
    img: "https://m.media-amazon.com/images/G/39/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB405876393_.png",
  },
  {
    text1: "Top Brand",
    text2: "",
    img: "https://m.media-amazon.com/images/G/39/A2I-Convert/mobile/IconFarm/icon-top-brand._CB613167591_.png",
  },
  {
    text1: "Secure",
    text2: "transaction",
    img: "https://m.media-amazon.com/images/G/39/A2I-Convert/mobile/IconFarm/icon-secure-transaction._CB414604205_.png",
  },
];

const PMColumn = () => {
  return (
    <div className="flex-1" id="center-column">
      <h1 className="text-2xl font-semibolds">
        New Bose QuietComfort Wireless Noise Cancelling Earbuds, Lifestyle
        Bluetooth Earbuds with Active Noise Cancellation, Up to 8.5 Hours of
        Battery Life, Black
      </h1>
      <p className="text-sm mt-1 sideLink text-[#007185] hover:underline">
        Visit the Bose Store
      </p>
      <div className="flex space-x-1 items-end">
        <span className="text-sm">4.3 </span>
        <StarRating clickable={false} rating={4} />
        <ChevronDownIcon className="h-4 w-4 stroke-2" />
        <span className="text-sm pl-4 sideLink text-[#007185] hover:underline">
          344 ratings
        </span>
        <span className="text-sm px-1">|</span>
        <span className="text-sm sideLink text-[#007185] hover:underline">
          Search this page
        </span>
      </div>

      <p className="text-xs font-semibold mt-1">50+ bought in past month</p>
      <div className="mb-4 mt-1.5 border-b-[1px] border-[#BBBFBF]" />

      {/* Price  */}
      <div className="flex items-baseline">
        <span className="text-2xl font-light mr-2 text-[#cc0c39]">-7%</span>
        <span className="text-sm mt-1 self-start">AED</span>
        <span className="text-3xl font-medium">762</span>
        <span className="text-sm mt-1 self-start">00</span>
      </div>
      <div className="flex">
        <span className="text-xs text-gray-600">List Price: </span>
        <span className="text-xs text-gray-600 line-through">AED949.00</span>
        <InformationCircleIcon className="h-4 w-4 ml-1 text-[#969696]" />
      </div>

      <div className="flex items-end mt-1.5">
        <span className="text-sm sideLink text-[#007185] mr-1">
          FREE Returns
        </span>
        <ChevronDownIcon className="h-4 w-4 stroke-2" />
      </div>
      <p className="font-bold text-sm">
        Buy with 0% installments and pay AED 54.08 for 12 months with select
        banks.
      </p>

      <div className="flex items-end">
        <span className="text-sm sideLink text-[#007185] mr-1">Learn more</span>
        <ChevronDownIcon className="h-4 w-4 stroke-2" />
      </div>

      {/* Buying options icons */}
      <div className="flex space-x-8 ml-4">
        {buyingOptions.map(({ img, text1, text2 }) => (
          <div className="flex flex-col items-center text-center">
            <Image src={img} width={35} height={35} alt="buying options" />
            <p className="text-xs mt-1.5 text-[#007185]">
              {text1} <br /> {text2}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-4 mt-1.5 border-b-[1px] border-[#BBBFBF]" />
    </div>
  );
};

export default PMColumn;
