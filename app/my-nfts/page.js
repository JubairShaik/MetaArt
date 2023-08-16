"use client"







import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

import { NFTCard, Loader, Banner, SearchBar } from '@/components';


import images from "@/public/assets"











export default function Page() {

   const [nfts, setNfts] = useState([]);
   const [nftsCopy, setNftsCopy] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [activeSelect, setActiveSelect] = useState('Recently added');







    return(
        <div className="w-full flex justify-start items-center flex-col min-h-screen">
         <div className="w-full flexCenter flex-col">


        <Banner name="Your Nifty NFTs" 
           paraentStyles="flexCenter mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 "
           childStyles="md:text-4xl sm:text-2xl xs:text-xl  text-center"
        />



        <div className="flexCenter flex-col -mt-20 z-0">
          <div className="flexCenter w-40 h-40 sm:w-36 sm:h-36 p-1 bg-nft-black-1 rounded-full">
            <Image src={images.creator1} className="rounded-full" objectFit="cover" />
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-2xl mt-6">Address</p>
          {/* {shortenAddress(currentAccount)} */}
        </div>

      </div>
      {(!isLoading && nfts.length === 0 && nftsCopy.length === 0)
        ? (
          <div className="flexCenter sm:p-4 p-16">
            <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">No NFTs owned</h1>
          </div>
        )
        : (
          <div className="sm:px-4 p-12 w-full minmd:w-4/5 flexCenter flex-col">
            <div className="flex-1 w-full flex flex-row sm:flex-col px-4 xs:px-0 minlg:px-8">
              <SearchBar activeSelect={activeSelect} setActiveSelect={setActiveSelect} handleSearch={onHandleSearch} clearSearch={onClearSearch} />
            </div>
            <div className="mt-3 w-full flex flex-wrap">
              {nfts.map((nft) => <NFTCard key={nft.tokenId} nft={nft} onProfilePage />)}
            </div>
          </div>
        )}
    </div>
    )
}