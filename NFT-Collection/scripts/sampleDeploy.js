const hre = require("hardhat");

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://YOUR-METADATA-CID";
  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  // here we deploy the contract
  const lw3PunksContract = await hre.ethers.deployContract("LW3Punks", [
    metadataURL,
  ]);

  await lw3PunksContract.waitForDeployment();

  // print the address of the deployed contract
  console.log("LW3Punks Contract Address:", lw3PunksContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
