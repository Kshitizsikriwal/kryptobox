
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/TWLNJq67nEWzojjnL-NwRp3ovCSBl9yL',
      accounts: ['4f519de03562b508da3034737dd2ea71a2d830befd7def36b7606a224cf135e6'],
    },
  },
};