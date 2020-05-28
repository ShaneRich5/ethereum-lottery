const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode } = require('./compile');

const provider = new HDWalletProvider(process.env.MNEMONIC, process.env.ENDPOINT);
const web3 = new Web3(provider);

const deploy = async () => {
    const [account, ...rest] = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', account);

    const result = await new web3.eth.Contract(abi)
        .deploy({ data: `0x${bytecode}` })
        .send({ gas: '1000000', from: account });

    console.log('Contract deployed to', result.options.address);

};

deploy();