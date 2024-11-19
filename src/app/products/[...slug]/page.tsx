import Image from "next/image";
import CategoryNav from "./CategoryNav";
import PLeftColumn from "./PLeftColumn";
import PMColumn from "./PMColumn";
import PRightColumn from "./PRightColumn";
import StarRating from "@/components/StarRating";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Carousel from "@/components/Carousel";
import SearchReviews from "./ReviewSection/SearchReviews";
import Reviews from "./ReviewSection/Reviews";
import BottomSign from "../BottomSign";

const buyWithItems = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/51-FK1DFxBL._AC_UL348_SR348,348_.jpg",
    description:
      "New Bose QuietComfort Wireless Noise Cancelling Earbuds, Lifestyle",
    price: 649,
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/516rmFSwOAL._AC_UL348_SR348,348_.jpg",
    description:
      "Bose Ultra Open Earbuds with OpenAudio Technology, Open Ear Wireless Earbuds, Up to 48 Hours of Battery Life, White Smoke",
    price: 799,
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/512mPubhJdL._AC_UL348_SR348,348_.jpg",
    description:
      "Bose QuietComfort Ultra Wireless Noise Cancelling Earbuds, Bluetooth Noise Cancelling Earbuds with Spatial Audio and World-Class Noise Cancellation, Black 2023",
    price: 749,
  },
];

interface Props {
  params: {
    slug: string[];
  };
}

const page = ({ params: { slug } }: Props) => {
  return (
    <div>
      {/* Category navigation */}
      <CategoryNav />

      {/* Page body content */}
      <div className="flex px-[18px] mt-5 space-x-5">
        <PLeftColumn />
        <PMColumn />
        <PRightColumn />
      </div>

      {/* Horizontal Line */}
      <div className="m-4 my-4 border-b-[1px] border-[#BBBFBF]" />

      {/* Buy it with other items */}
      <h1 className="text-[21px] font-bold pl-6 my-2">Buy it with</h1>

      <div className="flex pl-6">
        {buyWithItems.map(({ img, description }, index) => (
          <div key={index} className="flex">
            <div className="w-[213px]">
              <div className="relative flex justify-center py-2 rounded-xl">
                <Image src={img} width={140} height={140} alt="Buy it item" />

                {/* Grey background for product images */}
                <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-black opacity-[0.05] pointer-events-none" />

                <input
                  type="checkbox"
                  defaultChecked
                  className="absolute top-2 right-2 form-checkbox accent-[#007185] rounded transform scale-125"
                />
              </div>

              <p className="text-sm line-clamp-3 mt-3">
                <span className={`font-bold ${index !== 0 && "hidden"}`}>
                  This item:{" "}
                </span>{" "}
                <span
                  className={`${
                    index !== 0 && "sideLink text-[#007185] hover:underline"
                  }`}
                >
                  {description}
                </span>
              </p>

              {/* Price  */}
              <div className="flex items-baseline">
                <span className="text-xs mt-1 self-start">AED</span>
                <span className="text-xl font-medium">762</span>
                <span className="text-xs mt-1 self-start">00</span>
              </div>
            </div>

            {/* Plus icon separator */}
            {index + 1 < buyWithItems.length && (
              <span className="my-[60px] mx-1 text-[28px] text-[#565959] font-semibold">
                +
              </span>
            )}
          </div>
        ))}

        {/* Add all to cart button */}
        <div className="flex flex-col ml-3 h-32 items-center justify-center">
          <div className="flex items-baseline">
            <span className="text-sm font-medium self-center mr-2">
              Total price:
            </span>
            <span className="text-xs mt-1 self-start mr-1">AED</span>
            <span className="text-lg font-medium">2,197.00</span>
          </div>
          <button className="w-full mt-0.5 rounded-full text-center text-sm text-nowrap px-24 py-1.5 cursor-pointer bg-[#ffd814] hover:bg-[#F7CA00] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#F0B800]">
            Add all 3 to Cart
          </button>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="m-4 my-4 border-b-[1px] border-[#BBBFBF]" />

      {/* Product Details */}
      <div className="px-[18px] space-y-[5.5px]">
        <h2 className="text-[21px] font-bold">Product details</h2>
        <div className="px-[18px]">
          <ul className="text-sm space-y-[5.5px]">
            <li>
              <span className="font-bold">Batteries :</span> 1 Lithium Ion
              batteries required. (included)
            </li>
            <li>
              <span className="font-bold">
                Is Discontinued By Manufacturer :
              </span>{" "}
              No
            </li>
            <li>
              <span className="font-bold">Product Dimensions :</span> 4.83 x
              7.01 x 3.51 cm; 68.95 g
            </li>
            <li>
              <span className="font-bold">Date First Available :</span> 18
              September 2024
            </li>
            <li>
              <span className="font-bold">Manufacturer :</span> Bose
            </li>
            <li>
              <span className="font-bold">ASIN :</span> B0D8BZDPXB
            </li>
            <li>
              <span className="font-bold">Item model number :</span> 888507-0100
            </li>
            <li>
              <span className="font-bold">Country of origin :</span> China
            </li>
            <li>
              <span className="font-bold">Best Sellers Rank:</span> #2,067 in
              Electronics (
              <span className="sideLink text-[#007185] hover:underline">
                See Top 100 in Electronics
              </span>
              ) <br /> #227 in{" "}
              <span className="sideLink text-[#007185] hover:underline">
                In-Ear Headphones
              </span>
            </li>
            <li className="flex space-x-1 items-end">
              <span className="font-bold">Customer reviews: </span>{" "}
              <span>4.2</span>
              <StarRating clickable={false} rating={4} />
              <ChevronDownIcon className="h-4 w-4 stroke-2" />
              <span className="text-sm pl-5 sideLink text-[#007185] hover:underline">
                389 ratings
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="m-4 my-2 border-b-[1px] border-[#BBBFBF]" />

      <div className="px-[18px]">
        <h2 className="text-[21px] mb-5 font-bold">
          What other items do customers buy after viewing this item?
        </h2>
        <Carousel />
      </div>

      {/* Horizontal Line */}
      <div className="m-4 my-4 border-b-[1px] border-[#BBBFBF]" />

      <div className="px-[18px] mb-6">
        <SearchReviews />
      </div>

      {/* Horizontal Line */}
      <div className="m-4 my-4 border-b-[1px] border-[#BBBFBF]" />

      <div className="px-[18px] mb-6">
        <Reviews />
      </div>

      <BottomSign />
    </div>
  );
};

export default page;
