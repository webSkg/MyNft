require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/PEPjsi9JZ0MABjrDbTak057PJpCZAoSf" ,
      accounts: [`3212f5070994e8e24bc1e313ae987515dfcffb261aed8ea51ee813a8b5de276e`],
    },
  },
};