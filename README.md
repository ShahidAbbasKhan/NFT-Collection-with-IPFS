## hardhat Setup Commands

### npm init --yes

### npm install --save-dev hardhat

### npx hardhat

### npm install --save-dev @nomicfoundation/hardhat-toolbox

### npm install dotenv

### npm install @openzeppelin/contracts (for openzepplin can use @uniswap etc if need to inherit)

### npx hardhat compile

### npx hardhat run scripts/deploy.js --network network-name (example)

### npx hardhat test test/testFile.js (running test exmaple)

### import "hardhat/console.sol"; in solidity to run "console.log()"

### npx hardhat run scripts/deploy.js --network <network-name> (deploying on live net)

### npm install --save-dev @nomicfoundation/hardhat-verify ( verify on etherscan)

### require("@nomicfoundation/hardhat-verify"); | import uses in Ts

### npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1" (command to varify contract)

### npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS (for more than 1 params)

## Test Cases in Ether.js and Mocha Chai
