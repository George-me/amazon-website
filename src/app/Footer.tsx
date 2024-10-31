import amazonLogo from "../app/assets/amazon_logo_white.png";
import Image from "next/image";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import ReactCountryFlag from "react-country-flag";

const footerLinks1 = [
  {
    title: "Get to Know Us",
    items: ["About Amazon", "Careers", "Amazon Science"],
  },
  {
    title: "Shop with Us",
    items: ["Your Account", "Your Orders", "Your Addresses", "Your Lists"],
  },
  {
    title: "Make Money with Us",
    items: [
      "Protect and build your brand",
      "Sell on Amazon",
      "Fulfillment by Amazon",
      "Supply to Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
    ],
  },
  {
    title: "Let Us Help You",
    items: [
      "Help",
      "Shipping & Delivery",
      "Returns & Replacements",
      "Recalls and Product Safety Alerts",
      "Amazon App Download",
    ],
  },
];

const footerLinks2 = [
  {
    title: "Amazon Advertising",
    line1: "Find, attract, and",
    line2: "engage customers",
  },
  {
    title: "Amazon Web Services",
    line1: "Scalable Cloud",
    line2: "SComputing Services",
  },
  {
    title: "Goodreads",
    line1: "Book reviews",
    line2: "& recommendations",
  },

  {
    title: "Audible",
    line1: "Download",
    line2: "Audio Books",
  },
  {
    title: "IMDb",
    line1: "Movies, TV",
    line2: "& Celebrities",
  },
  {
    title: "Alexa",
    line1: "Actionable Analytics",
    line2: "for the Web",
  },
  {
    title: "Shopbop",
    line1: "Designer",
    line2: "Fashion Brands",
  },
];

const Footer = () => {
  return (
    <div className="mt-[30px] bg-[#232F3E] text-white">
      <button className="w-full bg-[#37475a] p-[15px] text-[13px] hover:bg-[#485769] outline-none">
        Back to top
      </button>

      {/* 1st Footer */}
      <div className="flex my-10 space-x-[100px] justify-center text-nowrap">
        {footerLinks1.map(({ title, items }, index) => (
          <div key={index} className="px-2.5">
            <h2 className="font-bold">{title}</h2>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="text-sm my-2 link">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-gray-700" />

      <div className="flex my-7 justify-center space-x-20">
        <Image
          alt="amazon logo"
          src={amazonLogo}
          height={30}
          className="cursor-pointer mt-3"
        />

        <div className="flex space-x-2 items-center">
          <div className="flex items-center space-x-1 text-white border-[1.5px] border-gray-500 rounded-[4px] px-3 py-1.5 cursor-pointer text-sm">
            <GlobeAltIcon className="h-4 w-4" />
            <span>English</span>
            <ChevronDownIcon className="h-4 w-4" />
          </div>

          <div className="flex items-center space-x-1 text-white border-[1.5px] border-gray-500 rounded-[4px] px-3 py-1.5 cursor-pointer text-sm">
            <ReactCountryFlag
              className=""
              style={{
                width: "1.3em",
                height: "1.3em",
              }}
              countryCode="AE"
              svg
            />
            <span>United Arab Emirates</span>
          </div>
        </div>
      </div>

      {/* 2nd Footer */}
      <div className="bg-[#131A22] ">
        <div className="w-8/12 mx-auto">
          <div className="grid grid-cols-4 gap-4 gap-x-40 text-xs py-8 mt-8">
            {footerLinks2.map(({ title, line1, line2 }, index) => (
              <div
                key={index}
                className="text-nowrap link decoration-[#999999]"
              >
                <span>{title}</span>
                <p className="text-[#999999]">
                  {line1} <br /> {line2}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="flex flex-col text-xs justify-center pt-2.5 pb-8 gap-0.5 text-[#dddddd]">
          <div className="flex space-x-3 text-xs justify-center">
            <p className="link">Conditions of Use & Sale</p>
            <p className="link">Privacy Notice</p>
            <p className="link">Interest-Based Ads</p>
          </div>
          <div className="flex justify-center">
            ©1996–2024, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
