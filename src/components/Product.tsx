import React from "react";

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

const Product = ({
  product: { id, title, price, description, category, image },
}: Props) => {
  return (
    <div key={id}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
