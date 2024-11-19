import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import amazonPrime from "../assets/prime.png";
import StarRating from "@/components/StarRating";
import { sideBarData } from "./SideBarData";

const primeData = {
  title: "Amazon Prime",
  data: ["| Ships from UAE", "| International Shipping"],
};
const SideBar = () => {
  return (
    <div>
      <span className="text-sm font-bold">{primeData.title}</span>

      <div className="-space-y-4">
        {primeData.data.map((text, index) => (
          <label key={index} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox accent-[#007185] rounded transform scale-125"
            />

            <span className="flex items-center mb-1 text-sm">
              <Image
                alt="amazon logo"
                src={amazonPrime}
                height={28}
                className="cursor-pointer mt-1"
              />
              <span className="sideLink">{text}</span>
            </span>
          </label>
        ))}
      </div>

      <div>
        {sideBarData.map(({ title, data }) => (
          <div key={title}>
            <span className="text-sm font-bold">{title}</span>
            <div className="mt-0.5 mb-2">
              {data.map(({ type, text }, index) => (
                <div key={index}>
                  <label className="flex items-center">
                    {type == "check" && (
                      <input
                        type="checkbox"
                        className="form-checkbox accent-[#007185] rounded transform scale-125"
                      />
                    )}

                    {type == "backArrow" && (
                      <ChevronLeftIcon className="h-4 w-4 stroke-2 -ml-1" />
                    )}

                    <span
                      className={`text-sm sideLink ${
                        type == "check" && "pl-2"
                      } ${type == "sub-category-title" && "pl-3.5 font-bold"} ${
                        type == "sub-category" && "pl-7"
                      }`}
                    >
                      {text}
                    </span>

                    {type === "rating" && (
                      <>
                        <StarRating clickable={true} />
                        <span className="text-xs sideLink ml-1 mb-0.5 font-semibold">
                          & Up
                        </span>
                      </>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
