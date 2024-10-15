import React from "react";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return response;
};

interface Products {
  title: string;
}

const ProductFeed = async () => {
  const products = await fetchProducts();

  return (
    <div>
      {products.map((prod: Products) => (
        <p>{prod.title}</p>
      ))}
    </div>
  );
};

export default ProductFeed;
