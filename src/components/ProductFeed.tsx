import React from "react";

interface Products {
  title: string;
}

const ProductFeed = async () => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return (
    <div>
      {products.map((prod: Products) => (
        <p>{prod.title}</p>
      ))}
    </div>
  );
};

export default ProductFeed;
