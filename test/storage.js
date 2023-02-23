const {expect}  = require("chai");

describe("NumberStorage Smart Contract", function(){
    it("Should set the value of storedNumber value to the value passed in", async function(){
        const NumberStorage = await ethers.getContractFactory("NumberStorage");
        const numberStorage = await NumberStorage.deploy();
        await numberStorage.setNumber(21)
        console.log(await numberStorage.storedNumber())
        expect(await numberStorage.storedNumber()).to.equal(21)
    })
})