require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const createProvider = (network) => {
  return () => {
    return new HDWalletProvider(process.env.MNEMONIC, `https://v3.${network}.infura.io/` + process.env.INFURA_API_KEY);
  };
};

module.exports = {
  compilers: {
    solc: {
      version: "0.5.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      network_id: "*",
      port: "8545",
    },
    kovan: {
      provider: createProvider("kovan"),
      gas: 4700000,
      network_id: "42", // eslint-disable-line camelcase
      skipDryRun: true,
    },
    rinkeby: {
      provider: createProvider("rinkeby"),
      gas: 4700000,
      network_id: "4", // eslint-disable-line camelcase
      skipDryRun: true,
    },
    ropsten: {
      provider: createProvider("ropsten"),
      gas: 4700000,
      network_id: "3", // eslint-disable-line camelcase
      skipDryRun: true,
    },
  },
};
