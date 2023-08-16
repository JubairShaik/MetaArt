import market from './NFTMarketplace.json';

export const MarketAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
export const MarketAddressABI = market.abi;  



//   Contract deployment: NFTMarketplace
//   Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
//   Transaction:         0x52f2e901450da592594431644e2186b2b9e7b1e612c4f33e008f89b9dfc25095
//   From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
//   Value:               0 ETH
//   Gas used:            3836272 of 30000000
//   Block #1:            0x35f80ae22e2aea4a07587fc79c351f364cdcc4df866cbd7cc26ea8f71786ea94



 
// const hre = require("hardhat");

// async function main() {
 
//   const NFTMarketplace = await hre.ethers.deployContract("NFTMarketplace");
//   const nftMarketplace = await NFTMarketplace.deploy()

//   await nftMarketplace.waitForDeployment();

//   //console(log)

//   console.log('NFT MARKETPLACE DEPLOYED INTO : ', nftMarketplace.address)
// }
 
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



// // , [unlockTime], {
// //   value: lockedAmount,
// // }


// // console.log(
//   //   `Lock with ${ethers.formatEther(
//   //     lockedAmount
//   //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   // );



//    // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   // const unlockTime = currentTimestampInSeconds + 60;
//   // const lockedAmount = hre.ethers.parseEther("0.001");