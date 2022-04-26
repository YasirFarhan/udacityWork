const SampleToken = artifacts.require("sampleToken");

module.exports = function (deployer) {
  deployer.deploy(SampleToken,1000000);
};
