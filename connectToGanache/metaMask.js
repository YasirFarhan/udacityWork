
//  with infura code is different than what it is for ganache. follow below link
// https://stackoverflow.com/questions/68731602/web3-sendsignedtransaction-through-infura-doesnt-appear-in-the-etherscan-transa

var Web3 = require('web3')
var EthereumTransaction = require('ethereumjs-tx').Transaction //https://ethereum.stackexchange.com/questions/84357/typeerror-ethereumtransaction-is-not-a-constructor
var url = new Web3('https://rinkeby.infura.io/v3/58a0ff4ba47f4f02b2d26a0941ac20c6')
var web3 = new Web3(url)

var sendingAddress = '0x65D3EDff9b04fe8E8DEF70a6B7C6Aa16234aFD4E'
var receivingAddress = '0x3f8789Af3C9A17b4fDd35CF09b7d18E2ceA7e0DF'
var gasPricex = 20000000
var gasLimitx = 30000
var valuex = 100000000
var data = '0x'
 // https://ethereum.stackexchange.com/questions/80205/cannot-convert-string-to-buffer-tobuffer-only-supports-0x-prefixed-hex-strings
//  check balance of the accounts
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

//  create a transactions
var rawTransaction = {
    from        :   web3.utils.toHex( sendingAddress ),
    to          :   web3.utils.toHex( receivingAddress ),
    gasPrice    :   web3.utils.toHex( web3.utils.toWei( '1' , 'gwei' ) ),
    gasLimit    :   web3.utils.toHex( 200000 ),
    value       :   web3.utils.toHex( web3.utils.toWei( '0.25' , 'ether' ) ),
    data        :   web3.utils.toHex( 'Hello World!' ),
    nonce       :   web3.utils.toHex(  web3.eth.getTransactionCount( 
                                      sendingAddress ,
                                      'pending'
                                     ) )
};


// //  sign the transaction with the HEX valaue of the private key of the sender
var privateKeySender = '6d921f280ae37c7ec5c5077ac9654ca1bf96d05898a0aa4da3b380da3ce6ced5'
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)



var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction)

console.log(rawTransaction)