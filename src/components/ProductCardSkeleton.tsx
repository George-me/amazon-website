import { StarIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const ProductCardSkeleton = () => {
  return (
    <div className="relative flex flex-col animate-pulse rounded-[4px] overflow-hidden bg-white m-1 z-30 border">
      <div className="relative bg-black opacity-[0.11] pt-[26px] px-2 mb-5">
        <div className="my-2 pt-[26px] px-2 mb-2 cursor-pointer self-center object-contain h-52 w-full" />
      </div>

      <div className="px-2 mb-2 space-y-2.5">
        <div className="h-4 bg-black opacity-[0.11] rounded" />
        <div className="h-4 bg-black opacity-[0.11] rounded" />
        <div className="h-4 bg-black opacity-[0.11] rounded" />
        <div className="h-4 w-2/3 bg-black opacity-[0.11] rounded" />

        {/* Star Rating */}
        <div className="pt-1">
          <div className="flex items-end">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((index) => (
                <StarIcon
                  key={index}
                  className={"w-5 h-5 cursor-pointer text-black opacity-[0.2]"}
                />
              ))}
            </div>
          </div>
          <div className="h-[14px] w-2/4 mt-2 bg-black opacity-[0.11] rounded" />
        </div>

        <div className="mt-2 mb-1">
          <div className="h-7 w-2/5 mt-2 bg-black opacity-[0.11] rounded" />
        </div>

        <div className="h-[14px] w-full mt-1 bg-black opacity-[0.11] rounded" />
        <div className="h-[14px] w-2/4 mt-1 bg-black opacity-[0.11] rounded" />
        <div className="h-[14px] w-3/4 mt-1 bg-black opacity-[0.11] rounded" />
        <div className="h-[14px] w-5/6 mt-1 bg-black opacity-[0.11] rounded" />

        {/* Add to Cart Button */}
        <div className="bg-black opacity-[0.11] w-24 h-8 mt-2 p-1.5 px-2.5 text-[13px] rounded-full" />

        <div className="h-[14px] w-2/4 mt-1 bg-black opacity-[0.11] rounded" />
        <div className="h-[14px] w-3/4 mt-1 bg-black opacity-[0.11] rounded" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
