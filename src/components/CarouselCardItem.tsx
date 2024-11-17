import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";

const CarouselCardItem = () => {
  return (
    <div className="flex flex-col w-[165px]">
      <Image
        src="https://images-eu.ssl-images-amazon.com/images/I/41T+qZ4VUiL._AC_UL330_SR330,330_.jpg"
        width={165}
        height={165}
        alt="item-image"
        className="self-center"
      />
      <span className="text-sm sideLink hover:underline text-[#007185] line-clamp-5">
        Bose Case Cover for QuietComfort Earbuds II, Protective Silicone
        Exterior, With Aluminium Carabiner for Convenient Carrying, Soapstone,
        Wireless
      </span>

      <span className="flex items-center">
        <StarRating clickable={false} rating={4} />
        <span className="text-xs sideLink text-[#007185] px-1">233</span>
      </span>

      <div className="flex items-baseline mt-1">
        <span className="text-[10px] mt-1 self-start">AED</span>
        <span className="text-lg font-medium">762</span>
        <span className="text-[10px] mt-1 self-start">00</span>
      </div>

      <p className="text-xs">
        Get it as soon as <span className="font-bold">Sunday, November 17</span>
      </p>

      <span className="text-xs">Fulfilled by Amazon - FREE Shipping</span>
    </div>
  );
};

export default CarouselCardItem;
