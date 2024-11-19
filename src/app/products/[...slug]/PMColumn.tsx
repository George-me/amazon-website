import React from "react";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import {
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

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
      <p className="text-sm mb-2">All prices include VAT.</p>

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
        {buyingOptions.map(({ img, text1, text2 }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <Image src={img} width={35} height={35} alt="buying options" />
            <p className="text-xs mt-1.5 text-[#007185]">
              {text1} <br /> {text2}
            </p>
          </div>
        ))}
      </div>

      {/* Horizontal Line */}
      <div className="mb-5 mt-1.5 border-b-[1px] border-[#BBBFBF]" />

      <p className="text-sm mb-2">
        Available at a lower price from{" "}
        <span className="sideLink text-[#007185] hover:underline">
          other sellers
        </span>{" "}
        that may not offer free Prime shipping.
      </p>

      {/* Prime Saving */}
      <div className="flex flex-wrap lg:flex-nowrap text-sm line-clamp-1 group cursor-pointer">
        <p className="font-bold line-clamp-1 text-[#007185] group-hover:text-[#c45500]">
          Prime Savings Extra 10% off with Mastercard Cards. Enter code MC75 at
          checkout. Discount by Amazon.
        </p>
        <span className="flex items-end ml-[11px] mr-[15px] font-semibold">
          <span className="text-sm text-nowrap text-[#007185] mr-1 group-hover:text-[#c45500]">
            1 Applicable Promotion
          </span>
          <ChevronDownIcon className="h-4 w-4 stroke-2 text-black" />
        </span>
      </div>

      {/* Horizontal Line */}
      <div className="mb-3.5 mt-1 border-b-[1px] border-[#BBBFBF]" />

      <div className="mb-4">
        <h1 className="text-base font-bold pb-1">About this item</h1>
        <ul className="text-sm list-disc pl-[18px] pr-5">
          <li>
            A FIT THAT WON’T QUIT: To help you achieve the perfect fit, a trio
            of eartip and stability band sizes are included to ensure your
            Bluetooth earbuds feel comfortable, snug, and secure
          </li>
          <li>
            FULL CONTROL WITH THE BOSE QCE APP: Seamlessly control EQ settings
            like bass, mid-range, and treble levels to perfectly customize the
            sound, or use the app to check battery life and manage connected
            devices
          </li>
          <li>
            POWERFUL, PROVEN AUDIO: Get into it while you get after it, these
            IPX4-rated Bluetooth wireless earphones feature remarkable sound
            quality for a satisfyingly rich listening experience that hits all
            the right notes
          </li>
        </ul>
      </div>

      <div className="flex items-end">
        <ChatBubbleBottomCenterTextIcon className="h-5 w-5 stroke-2" />
        <span className="text-sm sideLink text-[#007185] ml-3 hover:underline">
          Report an issue with this product
        </span>
      </div>

      {/* Horizontal Line */}
      <div className="mb-4 mt-0.5 border-b-[1px] border-[#BBBFBF]" />

      <div className="flex">
        <Image
          src="https://m.media-amazon.com/images/G/39/AHS_UAE/2023/EW/EW_HQP_75x75._SS75_CB581149081_.png"
          width={75}
          height={75}
          alt="warranty"
          className="w-[75px] h-[75px] mr-2.5"
        />

        <p className="text-sm mr-10">
          <span className="font-bold">
            Extended warranties and protection plans
          </span>{" "}
          <br />
          Our extended warranty and protection plan helps keep your item safe
          for longer periods. Get 10% off with Prime. Extend your coverage
          today.{" "}
          <span className="text-[#007185] sideLink hover:underline">
            Learn more
          </span>
        </p>
      </div>
    </div>
  );
};

export default PMColumn;
