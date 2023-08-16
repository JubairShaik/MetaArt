"use client"


import { useState } from 'react'


import { SearchBar, NFTCard }from "@/components"
 
import { makeId } from '@/utils/makeId';




const HotBids = () => {



    const [activeSelect, setActiveSelect] = useState('Recently added');

    // const onClearSearch = () => {
    //     if (nfts.length && nftsCopy.length) {
    //       setNfts(nftsCopy);
    //     }
    //   };

    const onHandleSearch = (value) => {

        const filteredNfts = nfts.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));
        if (filteredNfts.length) {
          setNfts(filteredNfts);
        } else {
          setNfts(nftsCopy);
        }
      };



  return (
   


    <div className="mt-10">
    <div className="flexBetween mx-4 ms:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
      <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4">Hot NFTs</h1>
      <div className="flex-2 sm:w-full flex flex-row sm:flex-col">
        <SearchBar activeSelect={activeSelect} setActiveSelect={setActiveSelect} handleSearch={onHandleSearch} 
        />
        {/* clearSearch={onClearSearch} */}
       
      </div>
    </div>

    <div className="mt-3 w-full flex flex-wrap justify-center md:justify-center">
      {[1,2,3,4,5,5,6,7,8,9,10].map((nft) => (<NFTCard 
      key={nft.tokenId} 
    //   nft={nft}
      nft={{
        nft,
        name:`Nifty Nft ${nft}`,
        seller:`0x${makeId(2)}...${makeId(2)}`,
        price:`${nft * 30}`,
        owner:`0x${makeId(3)}...${makeId(4)}`
      }}
     
       />)) }
    </div>


  </div>

  )
}

export default HotBids