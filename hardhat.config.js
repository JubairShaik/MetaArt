// npm i @nomicfoundation/hardhat-toolbox --save-dev --force


const fs = require('fs');

require("@nomicfoundation/hardhat-toolbox");
// import helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";


const privateKey = fs.readFileSync(".secret").toString().trim()



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // networks:{
  //   hardhat:{
  //     chainId:1337
  //   },
  // },
  networks:{
    rinkeby:{
      // This network ID is specific to the Rinkeby testnet.
      chainId:4,
      // This URL points to the Rinkeby testnet RPC endpoint.
      url:"https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    },
  },
  solidity: "0.8.19",
};
