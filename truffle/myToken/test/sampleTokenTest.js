var assert = require('assert');

const SampleToken = artifacts.require("sampleToken")

contract("sampleToken", account => {
    // console.log(account)

    before(async () => {

        sampleToken = await SampleToken.deployed()
    })

    it("gives the owner of the token 1M tokens", async () => {
        let balance = await sampleToken.balanceOf(account[0])
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, '1000000', 'Balance should be 1M tokens for contract creator')
    })

    it("can transfer tokens between accounts", async () => {
        let amount = web3.utils.toWei('1000', 'ether')
        await sampleToken.transfer(account[1], amount)

        let balance = await sampleToken.balanceOf(account[1])
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, '1000', '100 tokens transfered to accoount 1')
    })


})