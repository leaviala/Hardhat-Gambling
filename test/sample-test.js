const { expect } = require('chai')

describe("Token contract", function () {
    it("Depending on the input, it should show the correct result of the bitwise operation", async function () {
        input1=13
        input2=1
        const Engine = await ethers.getContractFactory("Engine");
        const hardhatEngine = await Engine.deploy();
      expect(await hardhatEngine.operator(input1,input2)).to.equal(1);
    });
  });