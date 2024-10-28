"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import amazonbg1 from "../app/assets/1.jpg";
import amazonbg2 from "../app/assets/2.jpg";
import amazonbg3 from "../app/assets/3.jpg";
import amazonbg4 from "../app/assets/4.jpg";
import amazonbg5 from "../app/assets/5.jpg";

const Banner = () => {
  const banners = [amazonbg1, amazonbg2, amazonbg3, amazonbg4, amazonbg5];
  return (
    <div className="relative">
      <div className="absolute h-36 w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {banners.map((banner, index) => (
          <div key={index}>
            <Image src={banner} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
