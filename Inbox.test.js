const ganache = require('ganache');
const Web3 = require('web3');
const assert = require('assert');
const mocha = require('mocha');

const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
let Initial_message = 'hi there!';
let change_message = 'i am subhankar';

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract((interface))
        .deploy({ data: bytecode, arguments: [Initial_message] })
        .send({ from: accounts[0], gas: '1000000' });

});

describe('deploys a contract', () => {
    it('deploy', () => {
        assert.ok(inbox.options.address);
    });
    it('Has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, Initial_message);
    });

    it('it can change the message', async () => {
        await inbox.methods.setMessage(change_message).send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, change_message);
    }
    )
});
