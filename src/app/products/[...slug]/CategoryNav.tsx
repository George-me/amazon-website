import React from "react";

const CategoryNav = () => {
  return (
    <div className="text-xs px-4 mt-2">
      <span className="hover:underline cursor-pointer">Electronics </span>
      <span>{" > "}</span>
      <span className="hover:underline cursor-pointer">
        Headphones, Earbuds & Accessories
      </span>
      <span>{" > "}</span>
      <span className="hover:underline cursor-pointer">
        Headphones & Earbuds
      </span>
    </div>
  );
};

export default CategoryNav;
