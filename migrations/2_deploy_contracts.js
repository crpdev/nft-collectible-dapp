const RandomGraphToken = artifacts.require("RandomGraphToken");
const SimpleExchange = artifacts.require("SimpleExchange");

module.exports = function(deployer) {
  deployer.deploy(RandomGraphToken);
  deployer.deploy(SimpleExchange);
};
