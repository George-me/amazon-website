import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Heading = () => {
  return (
    <div className="flex justify-between shadow-xl text-sm py-2 px-4 items-center">
      <span>1–24 of over 50,000 results</span>

      <div className="flex items-center space-x-1 bg-[#E3E6E6] border-[1.5px] border-gray-300 rounded-xl px-2  cursor-pointer text-sm">
        <span className="text-[11px]">Sort by: Bestselling</span>
        <ChevronDownIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Heading;
