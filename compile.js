const solc = require('solc'); 
const { readFileSync } = require('fs');

const params = {
  language: "Solidity",
  sources: {
    'MultiAuth': {
      content: readFileSync('./contracts/MultiAuth.sol', 'utf-8')
    }
  },
    settings: {
      outputSelection: {
        "*": {
          "*": [ "abi", "evm.bytecode" ]
        }
      }
    }
};

const compiled = JSON.parse(solc.compileStandardWrapper(JSON.stringify(params)));
//console.log(compiled)

// check the result
module.exports = compiled

