"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import amazonPrime from "../app/assets/prime.png";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
}

const Min_rating = 1;
const Max_rating = 5;

const Product = ({
  product: { id, title, price, description, category, image },
}: Props) => {
  const [rating, setRating] = useState(0);
  const [prime, setPrime] = useState(false);

  useEffect(() => {
    setRating(
      Math.floor(Min_rating + Math.random() * (Max_rating - Min_rating + 1))
    );
    setPrime(Math.random() < 0.5);
  }, []);

  return (
    <div key={id} className="relative flex flex-col bg-white m-5 p-10 z-30">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        alt={title}
        height={286}
        width={242}
        objectFit="contain"
        className="self-center object-contain h-72 w-full"
      />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill(null)
          .map((_, index) => (
            <StarIcon key={index} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <p className="mb-5 font-semibold">${price}</p>

      <div className="flex flex-col mt-auto">
        {prime && (
          <div className="flex space-x-2 items-center mb-2">
            <Image src={amazonPrime} alt="prime" className="w-14" />
            <p className="text-xs text-gray-500">Free Next Day Delivery</p>
          </div>
        )}

        <button className="button">Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
