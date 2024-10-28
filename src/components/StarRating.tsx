"use client";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const StarRating = () => {
  const [selectedStars, setSelectedStars] = useState<number>(4);
  const [hoveredStars, setHoveredStars] = useState<number | null>(null);

  const handleStarClick = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
  };

  const handleMouseEnter = (starIndex: number) => {
    setHoveredStars(starIndex + 1);
  };

  const handleMouseLeave = () => {
    setHoveredStars(null);
  };

  return (
    <div className="flex">
      {[0, 1, 2, 3, 4].map((index) => (
        <StarIcon
          key={index}
          className={`w-5 h-5 cursor-pointer transition-all duration-100 ${
            (
              hoveredStars !== null
                ? index < hoveredStars
                : index < selectedStars
            )
              ? "fill-orange-400 text-orange-400"
              : "text-gray-300"
          }`}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default StarRating;
