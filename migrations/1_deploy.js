const Greeter = artifacts.require('Greeter');

// Export:
module.exports = (deployer) => {
  deployer.deploy(Greeter, 'Hello, world!');
};
