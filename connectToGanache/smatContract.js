var Web3 = require('web3')
var EthereumTransaction = require('ethereumjs-tx').Transaction //https://ethereum.stackexchange.com/questions/84357/typeerror-ethereumtransaction-is-not-a-constructor
var url = new Web3('HTTP://127.0.0.1:7545')
var web3 = new Web3(url)

// list all accoounts from ganache i.e the provided url
// web3.eth.getAccounts().then(accounts=>console.log(accounts));

var sendingAddress = '0x9025C8F671A3baBaab2A6D4fecA48DC1FfE27308'
var receivingAddress = '0x2ae6289f9eA4bd7d4C56FDbE5a08d4b80C75806E'
//  check balance of the accounts
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

