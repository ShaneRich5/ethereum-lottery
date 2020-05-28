const path = require('path');
const solc = require('solc');
const fs = require('fs');

const lotteryPath = path.resolve(__dirname, 'contracts', 'lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'lottery.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

exports.abi = output.contracts['lottery.sol']['Lottery'].abi;
exports.bytecode = output.contracts['lottery.sol']['Lottery'].evm.bytecode.object;