require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  etherscan: {
    apiKey:"SXVDCI59WIW2VE28MJFN3SC6D9Q4AJN95Y"
  },
  networks: {
    mumbai: {
      chainId: 80001,
      // from?: string;
      gas: "auto" ,
      gasPrice: "auto" ,
      // gasMultiplier?: number;
      url: "https://polygon-mumbai.blockpi.network/v1/rpc/public",
      // timeout?: number;
      // httpHeaders?: { [name: string]: string };
      accounts: [""]
    }
  }
};
