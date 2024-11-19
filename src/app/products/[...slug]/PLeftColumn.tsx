"use client";
import { useState } from "react";
import Image from "next/image";

const productInfo = {
  imgUrl: [
    "https://m.media-amazon.com/images/I/51-FK1DFxBL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/510VFTAaV6L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71onMa9nOzL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/51zg9Kcow+L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/51c7sm7ckEL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71S6DMLJmfL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/51WfBlQ70EL._AC_SL1500_.jpg",
  ],
};

const PLeftColumn = () => {
  const [select, setSelect] = useState(0);

  return (
    <div className="flex min-w-[350px]" id="left-column">
      <div className="flex-shrink-0" id="vertical-image-selection">
        {productInfo.imgUrl.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={40}
            height={41}
            alt="product images"
            onMouseEnter={() => setSelect(index)}
            className={`w-10 h-10 object-contain ${
              select === index &&
              "outline outline-[3px] outline-[#007185] outline-offset-2"
            } mb-2 rounded-lg border border-[#888c8c] cursor-pointer`}
          />
        ))}
      </div>
      <Image
        src={productInfo.imgUrl[select]}
        width={468}
        height={468}
        alt="product images"
        className="object-contain w-[468px] h-[468px] ml-1 min-w-[306px] object-top"
      />
    </div>
  );
};

export default PLeftColumn;
