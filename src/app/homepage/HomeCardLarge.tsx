import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

// Define the props interface for HomeCardSmall
interface Props {
  cardTitle: string;
  imgs: string[];
  topButton: string;
}

const HomeCardLarge = ({ cardTitle, imgs, topButton }: Props) => {
  return (
    <div className="flex flex-col relative justify-between col-span-full bg-white my-2 mx-2.5 pt-5 pb-6 px-5 z-30">
      <div>
        <div className="flex items-baseline">
          <h2 className="text-xl font-bold mb-2.5">{cardTitle}</h2>
          <span className="text-[13px] sideLink text-[#007185] pl-4">
            {topButton}
          </span>
        </div>

        <div className="flex justify-between overflow-hidden transition-all duration-300 space-x-2.5">
          {imgs.map((img, index) => (
            <Link href="/products" key={index} className="flex-shrink-0">
              <Image
                src={img}
                alt="product image"
                height={200}
                width={200}
                className="object-contain h-[200px] w-[200px] cursor-pointer"
              />
            </Link>
          ))}
        </div>

        <button className="absolute flex items-center justify-center right-0 top-1/3 w-10 h-[100px] text-[13px] py-1 rounded-[3px] cursor-pointer bg-white border border-[#0f1111] hover:bg-[#F7FAFA] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#edfdff]">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default HomeCardLarge;
