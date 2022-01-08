require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/G8Iox5_mNwvMDckVTaA5GgDxsnpulJHx',
      accounts: ['099ca20904db2af019cd860f9c9597982dcbed812e2cc7af9828a5f4b3b9f10d'],
    },
  },
};