# Truffle project bundle

This project bundle is designed to help developers easily deploy and test Solidity smart contracts using the Truffle framework.

## Getting Started
1. Install Truffle: `npm install -g truffle`
2. Clone this repository: `git clone https://github.com/bllagoje/truffle-project-bundle.git`
3. Navigate to the project directory: `cd truffle-project-bundle`
4. Install project dependencies: `npm install`
5. Start a local Blockchain using Truffle Develop: `truffle develop`
6. Compile and migrate the smart contracts: `truffle compile` and `truffle migrate`
7. Run the test suite: `truffle test`

## File Structure
- `contracts/`: Contains the Solidity smart contracts.
- `migrations/`: Contains the Truffle migration files.
- `test/`: Contains the test suite for the smart contracts.
- `truffle-config.js`: Truffle configuration file.

## Deployment
To deploy the contracts on a live network, you will need to configure the appropriate network settings in truffle-config.js and use the truffle migrate command.

## Built With
Truffle - A development environment, testing framework, and asset pipeline for Ethereum.

----

### Other Truffle commands
```
truffle init                                            # creates empty Truffle project
truffle compile                                         # compiles all smart contracts
truffle develop                                         # starts Ganache development blockchain locally
truffle migrate --reset --network network_name          # deploys contracts to the specified network
truffle test --network network_name                     # runs tests on the specified network
truffle console --network network_name                  # starts a console for the specified network to interact with the smart contracts
truffle run coverage                                    # creates solidity coverage report
truffle help                                            # prints the help message
truffle run verify ContractName --network network_name  # automatically verifies smart contracts on Etherscan on the specified network

```

