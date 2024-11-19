import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";

interface Item {
  img: string;
  title: string;
  rating: number;
  totalRatings: number;
  price: number;
}

interface Props {
  item: Item;
}

const CarouselCardItem = ({
  item: { img, price, rating, title, totalRatings },
}: Props) => {
  return (
    <div className="flex flex-col w-[165px]">
      <Image
        src={img}
        width={165}
        height={165}
        alt="item-image"
        className="self-center w-[165px] h-[165px] mb-1 object-contain"
      />
      <span className="text-sm sideLink hover:underline text-[#007185] line-clamp-5">
        {title}
      </span>

      <span className="flex items-center">
        <StarRating clickable={false} rating={rating} />
        <span className="text-xs sideLink text-[#007185] px-1">
          {totalRatings}
        </span>
      </span>

      <div className="flex items-baseline mt-1">
        <span className="text-[10px] mt-1 self-start">AED</span>
        <span className="text-lg font-medium">{price}</span>
        <span className="text-[10px] mt-1 self-start">00</span>
      </div>

      <p className="text-xs leading-relaxed">
        Get it as soon as <span className="font-bold">Sunday, November 17</span>
      </p>

      <span className="text-xs leading-relaxed">
        Fulfilled by Amazon - FREE Shipping
      </span>
    </div>
  );
};

export default CarouselCardItem;
