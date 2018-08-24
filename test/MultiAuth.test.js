const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');


const provider = ganache.provider();
const web3 = new Web3(provider);

//get output of the compilers  
const {contracts} = require('../compile');
let auth;
let accounts;

beforeEach( async ()=> {

    // Get list of all accounts       
    accounts = await web3.eth.getAccounts();
    console.log(accounts)

    auth = await new web3.eth.Contract(contracts.MultiAuth.MultiAuth.abi)
        .deploy({data:contracts.MultiAuth.MultiAuth.evm.bytecode.object, arguments:[[accounts[1],accounts[2]],accounts[3]]})
        .send({from:accounts[0], gas: '1000000', value: '2000000000'});
    
});

describe('MultiAuth',()=>{
    it(' Deployment and log ', async ()=>{
        console.log(auth);
    });
 
});
