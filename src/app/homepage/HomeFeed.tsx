import React from "react";
import Image from "next/image";
import banner1 from ".././assets/banner_1.jpg";
import HomeCardSmall from "./HomeCardSmall";
import { homeSCardData } from "./HomeSCardData";
import HomeCardLarge from "./HomeCardLarge";
import { homeLCardData } from "./HomeLCardData";
import BottomSign from "../products/BottomSign";
import Carousel from "@/components/Carousel";

const HomeFeed = async () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 px-2.5">
      {homeSCardData
        .slice(0, 8)
        .map(({ cardTitle, items, bottomButton }, index) => (
          <HomeCardSmall
            key={index}
            cardTitle={cardTitle}
            items={items}
            bottomButton={bottomButton}
          />
        ))}

      {/* <Image className="md:col-span-full px-2.5" alt="banner" src={banner1} /> */}

      <HomeCardLarge
        cardTitle={homeLCardData[0].cardTitle}
        topButton={homeLCardData[0].topButton}
        imgs={homeLCardData[0].imgs}
      />

      <HomeCardLarge
        cardTitle={homeLCardData[1].cardTitle}
        topButton={homeLCardData[1].topButton}
        imgs={homeLCardData[1].imgs}
      />

      {homeSCardData
        .slice(8, 12)
        .map(({ cardTitle, items, bottomButton }, index) => (
          <HomeCardSmall
            key={index}
            cardTitle={cardTitle}
            items={items}
            bottomButton={bottomButton}
          />
        ))}

      <HomeCardLarge
        cardTitle={homeLCardData[2].cardTitle}
        topButton={homeLCardData[2].topButton}
        imgs={homeLCardData[2].imgs}
      />

      <HomeCardLarge
        cardTitle={homeLCardData[3].cardTitle}
        topButton={homeLCardData[3].topButton}
        imgs={homeLCardData[3].imgs}
      />

      <HomeCardLarge
        cardTitle={homeLCardData[4].cardTitle}
        topButton={homeLCardData[4].topButton}
        imgs={homeLCardData[4].imgs}
      />
      <HomeCardLarge
        cardTitle={homeLCardData[5].cardTitle}
        topButton={homeLCardData[5].topButton}
        imgs={homeLCardData[5].imgs}
      />

      <div className="bg-white col-span-full pt-3 px-5 mt-2 mx-2.5">
        <Carousel />
        <BottomSign />
      </div>
    </div>
  );
};

export default HomeFeed;
