import React from "react";
import Product from "./Product";

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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product: Products) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
