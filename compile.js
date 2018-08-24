const path = require('path');
const fs = require('fs');
const solc = require('solc'); 

const sourcePath = path.resolve(__dirname,'contracts','SimpleStorage.sol');

const source = fs.readFileSync(sourcePath,'utf8');

console.log(solc.compile(source,1));
