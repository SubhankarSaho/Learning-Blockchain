const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'struggle enroll squeeze easy tenant program slim work essay apart unit voice',
    'https://goerli.infura.io/v3/fa6701abc7954689b9853b412c56c3d4'
);

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('the account that we are deploying from is ', accounts[0]);

    const result = await new web3.eth.Contract((interface))
        .deploy({ data: bytecode, arguments: ["hi i am subhankar sahoo"] })
        .send({ from: accounts[0], gas: '1000000' });

    console.log("this is the adress where the contract is deployed to", result.options.address);


}

deploy();