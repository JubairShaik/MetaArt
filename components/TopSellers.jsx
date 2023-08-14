"use client";
import React from "react";
import { useState, useEffect, useRef, useContext } from "react";

import CreatorCard from "./CreatorCard";

import images from "@/public/assets";
import Image from "next/image";
import { makeId } from "@/utils/makeId";

import { right, left } from "@/public/assets";

const isScrollable = () => {
  const { current } = scrollRef;
  const { current: parent } = parentRef;
  setHideButtons(!(current?.scrollWidth >= parent?.offsetWidth));
};

const TopSellers = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  const [hideButtons, setHideButtons] = useState(false);

  console.log(makeId(4));

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div>
      <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
        Top Sellers
      </h1>
      <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
        <div
          className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
          ref={scrollRef}
        >
          {/* {topCreators.slice(0, 5).map((creator, i) => ( */}
          {[1, 2, 3, 4, 5, 6].map((creator, i) => (
            <CreatorCard
              // key={creator.seller}
              key={i}
              rank={i + 1}
              creatorImage={images[`creator${i + 1}`]}
              // creatorName={shortenAddress(creator.seller)}
              // creatorEths={creator.sum}
              createrName={`0x${makeId(3)}...${makeId(4)}`}
              creatorEths={10 - i * 0.5}
            />
          ))}

          {!hideButtons && (
            <>
              <div
                onClick={() => handleScroll("left")}
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
              >
                <Image
                  src={images.right}
                  layout="fill"
                  objectFit="contain"
                  className="filter invert"
                  alt="left-arrow"
                  // className={(theme === 'light') ? 'filter invert' : ''}
                />
              </div>
              <div
                onClick={() => handleScroll("right")}
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
              >
                <Image
                  src={images.right}
                  layout="fill"
                  objectFit="contain"
                  className="filter invert"
                  alt="right-arrow"
                  // className={(theme === 'light') ? 'filter invert' : ''}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default TopSellers;
