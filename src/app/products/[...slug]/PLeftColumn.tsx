"use client";
import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ItemImages } from "@prisma/client";
import axios from "axios";
import blank from "../../assets/blank.png";

interface Props {
  item_asin: string;
}

const PLeftColumn = ({ item_asin }: Props) => {
  const [select, setSelect] = useState(0);

  const {
    data: itemImages,
    error: error2,
    isLoading: isLoadingItemImages,
  } = useQuery<ItemImages[]>({
    queryKey: ["itemImages", item_asin],
    queryFn: () =>
      axios.get(`/api/items/images/${item_asin}`).then((res) => res.data),
    retry: 5,
  });

  return (
    <div className="flex min-w-[350px]" id="left-column">
      <div className="flex-shrink-0" id="vertical-image-selection">
        {itemImages ? (
          itemImages.map(({ item_images_url }, index) => (
            <Image
              key={index}
              src={item_images_url}
              width={40}
              height={41}
              alt="product images"
              onMouseEnter={() => setSelect(index)}
              className={`w-10 h-10 object-contain ${
                select === index &&
                "outline outline-[3px] outline-[#007185] outline-offset-2"
              } mb-2 rounded-lg border border-[#888c8c] cursor-pointer`}
            />
          ))
        ) : (
          // Skeleton
          <div>
            <div className="animate-pulse bg-black opacity-[0.11] w-10 h-10 mb-2 rounded-lg border border-[#888c8c] cursor-pointer" />
            <div className="animate-pulse bg-black opacity-[0.11] w-10 h-10 mb-2 rounded-lg border border-[#888c8c] cursor-pointer" />
            <div className="animate-pulse bg-black opacity-[0.11] w-10 h-10 mb-2 rounded-lg border border-[#888c8c] cursor-pointer" />
            <div className="animate-pulse bg-black opacity-[0.11] w-10 h-10 mb-2 rounded-lg border border-[#888c8c] cursor-pointer" />
            <div className="animate-pulse bg-black opacity-[0.11] w-10 h-10 mb-2 rounded-lg border border-[#888c8c] cursor-pointer" />
          </div>
        )}
      </div>

      {itemImages ? (
        <Image
          src={itemImages?.[select].item_images_url || blank}
          width={468}
          height={468}
          alt="product images"
          className="object-contain w-[468px] h-[468px] ml-1 min-w-[306px] object-top"
        />
      ) : (
        // Skeleton
        <div className="animate-pulse bg-black opacity-[0.11] rounded-lg w-[468px] h-[468px] ml-1 min-w-[306px] object-top" />
      )}
    </div>
  );
};

export default PLeftColumn;
