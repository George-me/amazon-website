import Image from "next/image";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

const itemCards = [
  {
    cardTitle:
      "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio, Over-the-Ear Headphones with Mic, Up to 24 Hours of Battery Life, Black 2023",
    img: "https://m.media-amazon.com/images/I/51ZR4lyxBHL._AC_AA360_.jpg",
    price: "AED 1,149.00",
    listPrice: "AED1,699.00",
  },
  {
    cardTitle:
      "New Bose QuietComfort Wireless Noise Cancelling Earbuds, Lifestyle Bluetooth Earbuds with Active Noise Cancellation, Up to 8.5 Hours of Battery Life, Black",
    img: "https://m.media-amazon.com/images/I/51-FK1DFxBL._AC_AA360_.jpg",
    price: "AED 579.00",
    listPrice: "AED699.00",
  },
  {
    cardTitle:
      "Bose QuietComfort Ultra Wireless Noise Cancelling Earbuds, Bluetooth Noise Cancelling Earbuds with Spatial Audio and World-Class Noise Cancellation, Black 2023",
    img: "https://m.media-amazon.com/images/I/512mPubhJdL._AC_AA360_.jpg",
    price: "AED 748.85",
    listPrice: "AED1,199.00",
  },
];

const ShoppingCart = () => {
  return (
    <div className="flex p-[18px] bg-[#EAEDED] space-x-5">
      {/* Left Column */}
      <div className="flex-1">
        <div className="bg-white p-5">
          <h2 className="font-semibold text-[28px]">Shopping Cart</h2>
          <div className="mb-4 -mt-3 text-right">
            <span className="text-sm">Price</span>
            {/* Horizontal Line */}
            <div className="border-b-[1px] border-[#BBBFBF] opacity-60" />
          </div>
          {/* Item Cards */}
          {itemCards.map(({ cardTitle, img, price, listPrice }, index) => (
            <div>
              <div key={index} className="flex p-3 gap-2">
                {/* Left Section */}
                <Image
                  src={img}
                  width={192}
                  height={192}
                  alt="item-image"
                  className="self-center w-[192px] h-[192px] mb-1 object-contain rounded-xl active:ring active:ring-[#007185] active:ring-offset-[1.5px] cursor-pointer"
                />
                {/* Middle Section */}
                <div className="space-y-3">
                  <span className="text-lg font-semibold leading-tight line-clamp-2">
                    {cardTitle}
                  </span>
                  <div className="text-xs space-y-1">
                    <div className="text-[#007600] font-semibold">In Stock</div>
                    <div>Eligible for FREE delivery</div>
                    <div>
                      <span className="font-bold">Color:</span> Black
                    </div>
                  </div>
                  <div className="flex  gap-3 items-baseline">
                    <button className="flex items-center justify-between mb-2.5 rounded-lg border border-[#D5D9D9] shadow-sm text-left text-[13px] pl-[11px] py-1 cursor-pointer bg-[#F0F2F2] hover:bg-[#E3E6E6] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#F0F2F2]">
                      Qty: 1
                      <ChevronDownIcon className="h-4 w-4 mx-2 stroke-2" />
                    </button>
                    <span className="border-l border-[#BBBFBF] text-[#007185] hover:underline text-xs px-3 sideLink">
                      Delete
                    </span>
                    <span className="border-l border-[#BBBFBF] text-[#007185] hover:underline text-xs px-3 sideLink">
                      Save for later
                    </span>
                    <span className="border-l border-[#BBBFBF] text-[#007185] hover:underline text-xs px-3 sideLink">
                      Share
                    </span>
                  </div>
                </div>
                {/* Right Section */}
                <div className="text-nowrap space-y-1 text-right">
                  <div className="space-x-1.5">
                    <span className="text-white px-1.5 py-1 font-bold text-[11px] bg-[#cc0c39]">
                      32% off
                    </span>
                    <span className="text-xs font-bold text-[#cc0c39]">
                      Limited time deal
                    </span>
                  </div>
                  <div className="text-lg font-bold">{price}</div>
                  <div className="text-xs">
                    List Price:{" "}
                    <span className="line-through">{listPrice}</span>
                  </div>
                </div>
              </div>
              {/* Horizontal Line */}
              <div className="border-b-[1px] border-[#BBBFBF] opacity-60" />
            </div>
          ))}
          <div className="text-lg mb-3 text-right">
            Subtotal (3 items): <span className="font-bold">AED 2,476.85</span>
          </div>
        </div>
        <div className="text-xs py-4">
          The price and availability of items at Amazon.ae are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. <br /> Do you have a gift
          card or promotional code? We'll ask you to enter your claim code when
          it's time to pay.
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-shrink-0 w-[305px]">
        <div className="bg-white p-5">
          <div className="flex gap-2.5 mb-4">
            <div className="bg-[#067d62] h-5 flex text-white px-[3px] py-0.5 rounded-full">
              <CheckIcon className="inline h-[14px] w-[14px] stroke-2" />
            </div>
            <span className="text-xs text-[#067d62]">
              Your order qualifies for FREE Shipping
              <div className="text-black pr-2">
                Choose this option at checkout. See details
              </div>
            </span>
          </div>
          <div className="text-lg pr-[121px] mb-1">
            Subtotal (3 items): <span className="font-bold">AED 2,476.85</span>
          </div>
          <button className="mb-2 w-full rounded-full text-center text-sm py-1.5 cursor-pointer bg-[#ffd814] hover:bg-[#F7CA00] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#F0B800]">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
