import Image from "next/image";
import amazonLogo from "../app/assets/amazon_logo_white.png";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  MapPinIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Top navigation container */}
      <div className="flex justify-between items-center bg-amazon_blue">
        <div className="mt-1.5 px-1.5 flex-shrink-0">
          <Link href={`/`}>
            <Image
              alt="amazon logo"
              src={amazonLogo}
              height={40.5}
              className="cursor-pointer m-1.5 pt-[6px] pr-2 pl-1.5"
            />
          </Link>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex flex-grow focus-within:bg-amazon_search_focus-focus rounded-lg p-[3px]">
          <div className="flex items-center justify-center cursor-pointer select-none bg-[#E6E6E6] text-[#555555] hover:bg-[#D4D4D4] hover:text-black px-1.5 border-r border-gray-300 rounded-l-md">
            <span className="text-xs font-semibold px-1">All</span>
            <span className="text-xl self-end">🢓</span>
          </div>

          <input
            type="text"
            placeholder="Search Amazon.ae"
            className="h-10 flex-grow focus:outline-none px-2.5"
          />

          <button className="btn bg-[#febd69] hover:bg-[#F3A847] rounded-r-md text-white px-0.5">
            <MagnifyingGlassIcon className="h-10 p-2 text-black" />
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center text-white text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello George Mekhael </p>
            <p className="font-bold md:text-sm">Accounts & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>

          <div className="flex items-center link">
            <span className="absolute right-4 top-0 md:right-10 bg-yellow-600 h-4 w-4 text-center rounded-full text-black font-bold leading-[14px]">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-bold md:text-sm hidden md:inline mt-2">Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom navigation container */}
      <div className="flex items-center text-sm bg-amazon_blue-light space-x-3 px-2 pb-2 pt-1 text-white">
        <p className="flex items-center font-semibold">
          <Bars3Icon className="h-6 stroke-2 mr-0.5" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline">Electronics</p>
        <p className="link hidden lg:inline">Food & Groceries</p>
        <p className="link hidden lg:inline">Prime</p>
        <p className="link hidden lg:inline">Buy Again</p>
        <p className="link hidden lg:inline">Shopper Toolkit</p>
        <p className="link hidden lg:inline">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
