import Image from "next/image";
import amazonLogo from "../app/assets/amazon_logo_white.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header>
      {/* Top navigation container */}
      <div className="flex items-center bg-amazon_blue">
        <div className="mt-1.5 px-1.5">
          <Image
            alt="amazon logo"
            src={amazonLogo}
            // width={150}
            height={40.5}
            className="cursor-pointer m-1.5 pt-0.5 pr-2 pl-1.5"
          />
        </div>

        {/* Search bar */}
        <div className="flex flex-grow focus-within:bg-amazon_search_focus-focus rounded-lg p-[3px]">
          <input
            type="text"
            className="h-10 flex-grow rounded-l-md focus:outline-none px-4"
          />

          <button className="btn bg-yellow-600 rounded-r-md text-white px-0.5">
            <MagnifyingGlassIcon className="h-10 p-2" />
          </button>
        </div>
      </div>

      {/* Bottom navigation container */}
      <div></div>
    </header>
  );
};

export default Header;
