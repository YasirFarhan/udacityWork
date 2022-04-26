const MerkleTree = require('merkletreejs');
const crypto = require('crypto');
const SHA256 = require('crypto-js/sha256')
//  this one does not work see merkle1.js

let leaves = ['a', 'b', 'c'],
    tree,
    layers,
    root,
    proof,
    verified;

function sha256(data) {
    return crypto.createHash('sha256').update(data).digest();
}

function createLeaves() {
    leaves = ['a', 'b', 'c'].map(x => sha256(x));
    console.log("Leaves");
    console.log(leaves);
}




function createTree() {
    tree = new MerkleTree(leaves, sha256);
}

function getLeaves() {
    leaves = tree.getLeaves()
    console.log("Leaves");
    console.log(leaves);
}

function getLayers() {
    layers = tree.getLayers();
    console.log("Layers");
    console.log(layers);
}

function getRoot() {
    root = tree.getRoot()
    console.log("Root");
    console.log(root);
}

function getProof() {
    proof = tree.getProof(leaves[2]);
    console.log("Proof");
    console.log(proof);
}


function verifyNode() {
    verified = tree.verify(proof, leaves[2], root);
    console.log("verified");
    console.log(verified);
}



createLeaves();
createTree();
getLeaves();
getLayers();
getRoot();
getProof();
verifyNode();



