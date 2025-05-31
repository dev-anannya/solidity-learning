const { expect } = require("chai");

describe("Counter Contract", function () {
  let Counter, counter, owner, addr1;

  beforeEach(async function () {
    Counter = await ethers.getContractFactory("Counter");
    [owner, addr1] = await ethers.getSigners();
    counter = await Counter.deploy();
    await counter.waitForDeployment();
  });

  it("should start with count 0", async function () {
    expect(await counter.getCount()).to.equal(0);
  });

  it("should increment count", async function () {
    await counter.increment();
    expect(await counter.getCount()).to.equal(1);
  });

  it("should decrement count", async function () {
    await counter.increment();
    await counter.decrement();
    expect(await counter.getCount()).to.equal(0);
  });

  it("should not decrement below 0", async function () {
    await expect(counter.decrement()).to.be.revertedWith("Counter: count cannot go below zero");
  });
});
