/**
 * Step 1: Verify 'crypto-js' module is installed for your project
 * After verifying it is installed, move on to Step 2. No code needs to be written here.
 */

/**
 * Step 2: Import from crypto-js module the sha265 library
 */

// Write your code here

/**
 * Variables: Do not change variable values to be able to answer the quiz
 */

//  import sha256 from 'crypto-js/sha256';
//  import hmacSHA512 from 'crypto-js/hmac-sha512';
//  import Base64 from 'crypto-js/enc-base64';
 
//  const message, nonce, path, privateKey; // ...
//  const hashDigest = sha256(nonce + message);
//  const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));

	var AES = require("crypto-js/aes");
    var SHA256 = require("crypto-js/sha256");

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

/**
 * Step 3: Add code to the `generate hash function
 * Function that generate the SHA256 Hash
 * @param {*} obj 
 */

function generateHash(obj) {

	// Write your code here
	return SHA256(obj);
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(JSON.stringify(dataObject))}`);

/**
 * Run your application using `node app.js`
 */
