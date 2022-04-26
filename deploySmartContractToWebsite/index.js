 
 var Web3 = require('web3')
 var url = 'HTTP://127.0.0.1:7545' // 8545 if using ganache-cli
 var web3 = new Web3 (url)
//  web3.eth.getAccounts().then(accounts=>console.log(accounts));


var Contract = require('web3-eth-contract');
var address ='0xe61AFA21F2876c3c915D0358D16096fc1b8CE291'

// set provider for all later instances to use
Contract.setProvider('http://localhost:7545');

var contract = new Contract(jsonInterface, address);

 // Connect a the web3 provider
 if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

// Set a default account
web3.eth.defaultAccount = web3.eth.accounts[0];

// Get the contract address
var jsonInterface = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMessage",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
var RemixContract = web3.eth.contract(jsonInterface);

// Get the contract abi
var myMessage = RemixContract.at(address');

console.log(myMessage);
