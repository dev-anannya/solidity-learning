const { ethers } = require("hardhat");

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.waitForDeployment();

  console.log("Counter deployed at:", counter.target);

  let count = await counter.getCount();
  console.log("Initial count:", count.toString());

  console.log("Incrementing...");
  let tx = await counter.increment();
  await tx.wait();

  count = await counter.getCount();
  console.log("After increment:", count.toString());

  console.log("Incrementing...");
  let tx1 = await counter.increment();
  await tx.wait();

  count = await counter.getCount();
  console.log("After increment:", count.toString());

  console.log("Decrementing...");
  tx1 = await counter.decrement();
  await tx.wait();

  count = await counter.getCount();
  console.log("After decrement:", count.toString());

  console.log("Decrementing...");
  tx1 = await counter.decrement();
  await tx.wait();

  count = await counter.getCount();
  console.log("After decrement:", count.toString());

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
