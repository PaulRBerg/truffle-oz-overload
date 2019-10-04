/* eslint-disable func-names */
/* global artifacts, contract, expect */
const BN = require("bn.js");

const Counter = artifacts.require("./Counter.sol");

contract("Counter", function(accounts) {
  beforeEach(async function() {
    this.counter = await Counter.new();
  });

  it("should increase the counter", async function() {
    const value = await this.counter.value();
    await this.counter.increase();
    const newValue = await this.counter.value();
    expect(newValue.toNumber()).to.be.equal(value.add(new BN(1)).toNumber());
  });

  /* Should fail, but it doesn't */
  it("should initialize the contract", async function() {
    // console.log("accounts[0]", accounts[0]);
    await this.counter.initialize(accounts[0], accounts[1]);
    // console.log("this.counter.methods", this.counter.methods);
  });
});
