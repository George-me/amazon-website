"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import amazonPrime from "../app/assets/amazon_prime_icon.png";
import StarRating from "./StarRating";
import { Items, ItemImages } from "@prisma/client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Min_rating = 1;
const Max_rating = 5;

interface Props {
  item: Items;
}

const ProductCard = ({ item: { item_asin, item_name } }: Props) => {
  const [rating] = useState(
    Math.floor(Min_rating + Math.random() * (Max_rating - Min_rating + 1))
  );
  const [coupon, setCoupon] = useState(false);
  const [buyingOpts, setBuyingOpts] = useState(false);
  const [limited, setLimited] = useState(false);
  const [best, setBest] = useState(false);
  const [prime, setPrime] = useState(false);

  const {
    data: itemImages,
    error,
    isLoading,
  } = useQuery<ItemImages>({
    queryKey: ["itemImages", item_asin],
    queryFn: () =>
      axios.get(`/api/items/images/${item_asin}`).then((res) => res.data),
    retry: 5,
  });

  useEffect(() => {
    console.log("Fetched Images:", itemImages); // Add this line
  }, [itemImages]);

  useEffect(() => {
    setPrime(Math.random() < 0.5);
    setCoupon(Math.random() < 0.5);
    setBuyingOpts(Math.random() < 0.5);
    setBest(Math.random() > 0.93);
    setLimited(Math.random() < 0.5);
  }, []);

  return (
    <div
      key={item_asin}
      className="relative flex flex-col rounded-[4px] overflow-hidden bg-white m-1 z-30 border"
    >
      {/* Item image in card  */}
      <div className="relative pt-[26px] px-2 mb-2">
        {best && (
          <div className="trapezium absolute top-0 left-0 bg-[#C45500] text-white text-xs px-2.5 py-1 pr-3.5">
            Best Seller
          </div>
        )}

        <Link href={`/products/${item_asin}`}>
          <Image
            src={itemImages?.item_images_url || ""}
            alt={item_name}
            height={208}
            width={242}
            objectFit="contain"
            className="my-2 cursor-pointer self-center object-contain h-52 w-full"
          />
        </Link>

        {/* Grey background for product images */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.05] pointer-events-none" />
      </div>

      <div className="px-2 mb-2">
        {/* Item Name */}
        <Link href={`/products/${item_asin}`}>
          <h4 className="sideLink my-2 text-base font-medium line-clamp-4">
            {item_name}
          </h4>
        </Link>

        {/* Star Rating */}
        <div className="pt-1">
          <div className="flex items-end">
            <StarRating clickable={false} rating={rating} />
            <ChevronDownIcon className="h-4 w-4 stroke-2" />
            <span className="text-sm sideLink text-[#007185] font-medium">
              30
            </span>
          </div>
          <span className="text-sm">500+ bought in past month</span>
        </div>

        {/* Limited Deal */}
        {limited && (
          <div className="mt-2 mb-1">
            <button className="font-bold text-white text-xs p-1.5 rounded-sm bg-[#cc0c39]">
              Limited time deal
            </button>
          </div>
        )}

        {/* Price section */}
        <div className="flex items-baseline">
          <span className="text-sm mt-1 self-start">AED</span>
          <span className="text-3xl font-medium">762</span>
          <span className="text-sm mt-1 self-start">00</span>
          <span className="text-sm text-gray-600 ml-2 line-through">
            List: AED949.00
          </span>
        </div>

        {/* Coupon available */}
        {coupon && (
          <div className="mt-1">
            <span className="text-sm bg-[#7fda69] pb-0.5 px-1.5">
              Save AED 10.30
            </span>
            <span className="text-sm"> with coupon</span>
          </div>
        )}

        {/* Prime Delivery Available */}
        {prime && (
          <span className="mb-1 text-sm">
            <Image
              alt="amazon logo"
              src={amazonPrime}
              height={18}
              className="cursor-pointer mt-1 float-left"
            />
            <span className="text-sm pl-1">
              Get it as soon as
              <span className="font-bold"> tomorrow, 30 Oct</span>
            </span>
          </span>
        )}

        {/* Free or Fast Delivery */}
        <div className="text-sm pt-1">
          <p>
            FREE delivery <span className="font-bold">Sat, 2 Nov</span>
          </p>
          <p>
            Or fastest delivery{" "}
            <span className="font-bold">Tomorrow, 1 Nov</span>
          </p>
        </div>

        {/* <div className="text-sm">Fulfilled by Amazon - FREE Shipping</div> */}

        {/* No. of Items left in stock  */}
        <div className="mt-[1px] text-sm text-[#b12704]">
          Only 4 left in stock - order soon.
        </div>

        {/* Add to Cart Button */}
        <button className="mt-2 p-1.5 px-2.5 text-[13px] bg-[#ffd814] rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">
          Add to cart
        </button>

        {/* Buying Options */}
        {buyingOpts && (
          <div className="mt-1">
            <p className="text-sm">More Buying Choices</p>
            <p className="text-sm">
              AED 528.80
              <span className="ml-1 sideLink text-[#007185]">
                (2 used & new offers)
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
