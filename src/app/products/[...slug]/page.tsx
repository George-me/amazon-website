import Image from "next/image";
import CategoryNav from "./CategoryNav";
import PLeftColumn from "./PLeftColumn";
import PMColumn from "./PMColumn";
import PRightColumn from "./PRightColumn";

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
          <div className="flex">
            <div className="w-[213px]">
              <div className="relative flex justify-center py-2 rounded-xl">
                <Image src={img} width={140} height={140} alt="Buy it item" />

                {/* Grey background for product images */}
                <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-black opacity-[0.05] pointer-events-none" />

                <input
                  type="checkbox"
                  checked
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

            {index + 1 < buyWithItems.length && (
              <span className="my-[60px] mx-1 text-[28px] text-[#565959] font-semibold">
                +
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Horizontal Line */}
      <div className="m-4 my-4 border-b-[1px] border-[#BBBFBF]" />
    </div>
  );
};

export default page;
