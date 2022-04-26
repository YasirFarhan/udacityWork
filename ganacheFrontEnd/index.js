 
// run browserify on the js file before opening html file
var $ = require("jquery")
var Web3 = require('web3')
var EthereumTransaction = require('ethereumjs-tx').Transaction
var url = 'HTTP://127.0.0.1:7545'
var web3 = new Web3 (url)
var Contract = require('web3-eth-contract');
// var address ='0xA97D2C83459670A16B872aD643AFa31fb0CAE5a1'
var address = '0x6A0f4619a5E1D85F0A27e7A4cCc68C310B6b116a'

web3.eth.defaultAccount = address;

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

$(function(){
    // jQuery methods go here...
    $("#setMessageButton").on("click",function () {
        console.log($("#message").val())
        contract.methods.setMessage($("#message").val()).send({from: address}).then(console.log);
    });
  });

