 
// run browserify no the js file before opening html file
 var Web3 = require('web3')
 var url = 'HTTP://127.0.0.1:7545'
 var web3 = new Web3 (url)
var Contract = require('web3-eth-contract');
var address ='0x9025C8F671A3baBaab2A6D4fecA48DC1FfE27308'
Contract.setProvider(url);


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
var contract = new Contract(jsonInterface, address);

console.log(contract)



	