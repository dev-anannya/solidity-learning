# Counter Smart Contract

A simple Ethereum smart contract that implements a basic counter with increment, decrement, reset, and getter functions. Built using Solidity and Hardhat.

## Features

- Increment the counter by 1
- Decrement the counter by 1 (won't go below zero)
- Reset the counter to zero
- Retrieve the current count
- Emits events on count changes

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- A wallet private key with Sepolia testnet ETH for deployment
- Alchemy or Infura API key for Sepolia RPC URL

## Setup

1. Clone this repository:

   ```bash
   git clone <your-repo-url>
   cd Counter
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a .env file in the root folder with the following variables:

    ```env
    SEPOLIA_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/your-api-key"
    PRIVATE_KEY="your-wallet-private-key"
    ```
Note: Never commit your .env file to version control.

## Project Structure

```contracts/Counter.sol```: The main Solidity contract.

```scripts/deploy.js```: Script to deploy the contract to Sepolia.

```scripts/interact.js```: Script to interact with the deployed contract.

```test/Counter.test.js```: Hardhat tests for the contract.

```hardhat.config.js```: Hardhat configuration file.

## Testing

Run the tests locally using Hardhat's built-in network:

```bash
npm install
```
All tests should pass, verifying the contract functionality.

## Deployment
To deploy the contract on the Sepolia testnet:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```
After deployment, the console will display the contract address.

## Interaction
Use ```scripts/interact.js``` to call contract functions on a local or deployed contract.

Run the script:

```bash
npx hardhat run scripts/interact.js --network sepolia 
```

## Notes
Make sure your wallet has enough Sepolia ETH. You can get test ETH from faucets such as:

https://sepoliafaucet.com/

https://faucet.paradigm.xyz/

Gas fees on Sepolia are minimal but vary depending on network conditions.

Keep your private key safe and do not share it publicly.

## License
MIT License

