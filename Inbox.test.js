const ganache = require('ganache');
const Web3 = require('web3');
const assert = require('assert');
const mocha = require('mocha');

const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["hi there!"] })
        .send({ from: accounts[0], gas: '1000000' });

});

describe('deploys a contract', () => {
    it('deploy', () => {
        console.log(inbox);
    });
});
