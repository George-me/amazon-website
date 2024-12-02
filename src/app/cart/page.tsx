import Image from "next/image";
import ShoppingCart from "./ShoppingCart";
import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <div>
      <ShoppingCart />

      <div className="p-[20px]">
        <Carousel />
      </div>
    </div>
  );
};

export default page;
