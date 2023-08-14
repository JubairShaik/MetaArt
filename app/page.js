import Image from "next/image";
import { Banner, TopSellers } from "@/components";

export default function Home() {
  return (
    <div className="flex justify-center  sm:px-6 p-12 ">
      <div className="w-full minmd:w-4/5 ">
        <Banner
          name={
            <>
              Discover, collect, and sell <br /> extraordinary NFTs
            </>
          }
          paraentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
        />

        <div>
          <TopSellers />
        </div>
      </div>
    </div>
  );
}
