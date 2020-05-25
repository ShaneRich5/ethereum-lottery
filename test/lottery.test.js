const assert = require('assert')
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { abi, bytecode } = require('../compile');

describe('Lottery Contract', () => {
    it('deploys a contract', async () => {
        const accounts = await web3.eth.getAccounts();

        const lottery = await new web3.eth.Contract(abi)
            .deploy({ data: bytecode })
            .send({ from: accounts[0], gas: '1000000' });

        assert.ok(lottery.options.address);
    });
});