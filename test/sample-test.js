const { expect } = require('chai');
const hre = require("hardhat");

describe("Engine contract", function () {
    it("Depending on the input, it should show the correct result of the bitwise operation: &", async function () {
        //We set the value of possible input
        input1=1;
        input2=3;
        input3=5;
        input4=13;
        input5=50;
        input6=200;
        const Engine = await hre.ethers.getContractFactory("Engine");
        const hardhatEngine = await Engine.deploy();
        //We set the output expected of each bitwise operation in function of the inputs
        expect(await hardhatEngine.operator(input1,input2)).to.equal(1);
        expect(await hardhatEngine.operator(input1,input3)).to.equal(1);
        expect(await hardhatEngine.operator(input1,input4)).to.equal(1);
        expect(await hardhatEngine.operator(input1,input5)).to.equal(0);
        expect(await hardhatEngine.operator(input1,input6)).to.equal(0);
        expect(await hardhatEngine.operator(input2,input3)).to.equal(1);
        expect(await hardhatEngine.operator(input2,input4)).to.equal(1);
        expect(await hardhatEngine.operator(input2,input5)).to.equal(2);
        expect(await hardhatEngine.operator(input2,input6)).to.equal(0);
        expect(await hardhatEngine.operator(input3,input4)).to.equal(5);
        expect(await hardhatEngine.operator(input3,input5)).to.equal(0);
        expect(await hardhatEngine.operator(input3,input6)).to.equal(0);
        expect(await hardhatEngine.operator(input4,input5)).to.equal(0);
        expect(await hardhatEngine.operator(input4,input6)).to.equal(8);
        expect(await hardhatEngine.operator(input5,input6)).to.equal(0);

    });
  });


describe("Game", function () {
    it("Depending on the input, it should show the correct boolean that indicates if the input corresponds to the outcome of the function", async function () {
        //We set the value of one possible input
        input1=1;
        //We set the value of the two possible outcome
        const outcome1=false;
        const outcome2=true;

        const Game = await hre.ethers.getContractFactory("Game");
        const hardhatGame = await Game.deploy();
        //We set the output expected of each bitwise operation in function of the inputs
        expect(await hardhatGame.gameResults(input1)).to.emit(outcome1);
        expect(await hardhatGame.gameResults(input1)).to.emit(outcome2);

    });
  });




