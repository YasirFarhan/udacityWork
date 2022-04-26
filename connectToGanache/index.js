var Web3 = require('web3')
var EthereumTransaction = require('ethereumjs-tx').Transaction //https://ethereum.stackexchange.com/questions/84357/typeerror-ethereumtransaction-is-not-a-constructor
var url = new Web3('HTTP://127.0.0.1:7545')
var web3 = new Web3(url)

// list all accoounts from ganache i.e the provided url
// web3.eth.getAccounts().then(accounts=>console.log(accounts));

var sendingAddress = '0x9025C8F671A3baBaab2A6D4fecA48DC1FfE27308'
var receivingAddress = '0x2ae6289f9eA4bd7d4C56FDbE5a08d4b80C75806E'
var gasPrice = 20000000
var gasLimit = 30000
var value = 100000000
var data = "0x" // https://ethereum.stackexchange.com/questions/80205/cannot-convert-string-to-buffer-tobuffer-only-supports-0x-prefixed-hex-strings
//  check balance of the accounts
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

//  create a transactions

var rawTransaction = {
    nonce: 5,
    from: sendingAddress,
    to: receivingAddress,
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    value: value, // in wei
    data: data 
}

//  sign the transaction with the HEX valaue of the private key of the sender
var privateKeySender = 'c3563e86487874a3ff085a862e8f8ad565ce1cf8786e120a54799437dab3f699'
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction)
