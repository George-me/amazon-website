import React from "react";
import Product from "./Product";
import Image from "next/image";
import banner1 from "../app/assets/banner_1.jpg";

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductFeed = async () => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.slice(0, 4).map((product: Products) => (
        <Product key={product.id} product={product} />
      ))}

      <Image className="md:col-span-full" alt="banner" src={banner1} />

      {products.slice(5, products.length).map((product: Products) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
