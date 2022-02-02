// const { artifacts } = require("truffle");

// eslint-disable-next-line no-undef
const Marketplace = artifacts.require("Marketplace");

module.exports = function(deployer) {
  deployer.deploy(Marketplace);
};
