const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = "0x476E2664665774f600d9b3DF96EAE6BE25Ba0DD3";

  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.attach(contractAddress);

  let count = await counter.getCount();
  console.log("Initial count:", count.toString());

  console.log("Incrementing...");
  let tx = await counter.increment();
  await tx.wait();
  console.log("Tx hash:", tx.hash);

  count = await counter.getCount();
  console.log("After increment:", count.toString());

  console.log("Incrementing again...");
  tx = await counter.increment();
  await tx.wait();
  console.log("Tx hash:", tx.hash);

  count = await counter.getCount();
  console.log("After second increment:", count.toString());

  console.log("Decrementing...");
  tx = await counter.decrement();
  await tx.wait();
  console.log("Tx hash:", tx.hash);

  count = await counter.getCount();
  console.log("After decrement:", count.toString());

  console.log("Decrementing again...");
  tx = await counter.decrement();
  await tx.wait();
  console.log("Tx hash:", tx.hash);

  count = await counter.getCount();
  console.log("After second decrement:", count.toString());

  console.log("Trying to decrement below 0 (should fail)...");
  try {
    tx = await counter.decrement();
    await tx.wait();
  } catch (error) {
    console.log("Error as expected:", error.message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
