 
// run browserify on the js file before opening html file
var $ = require("jquery")
var Web3 = require('web3')
var EthereumTransaction = require('ethereumjs-tx').Transaction
var url = 'https://rinkeby.infura.io/v3/58a0ff4ba47f4f02b2d26a0941ac20c6'
// var web3 = new Web3 (url)
var Contract = require('web3-eth-contract');
var address = '0x65D3EDff9b04fe8E8DEF70a6B7C6Aa16234aFD4E'
web3.eth.defaultAccount = address;

window.addEventListener('load', async () => {
	// Modern dapp browsers...
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		try {
			// Request account access if needed
			await ethereum.enable();
			// Acccounts now exposed
			web3.eth.sendTransaction({/* ... */});
		} catch (error) {
			// User denied account access...
		}
	}
	// Legacy dapp browsers...
	else if (window.web3) {
		window.web3 = new Web3(web3.currentProvider);
		// Acccounts always exposed
		web3.eth.sendTransaction({$("#message").val()});
	}
	// Non-dapp browsers...
	else {
		console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
	}
});


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


var contractAddress ='0x14650E680FE87CD661a31793C15bd104840ac5E6'
var contract = new Contract(jsonInterface, contractAddress);

console.log(contract)

// message button
$(function(){
    // jQuery methods go here...
    $("#setMessageButton").on("click",function () {
        console.log($("#message").val())
        contract.methods.setMessage($("#message").val()).send({from: address}).then(console.log);
    });
  });


  

