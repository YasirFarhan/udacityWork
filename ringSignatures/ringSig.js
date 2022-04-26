var lrs = require("lrs"); // linkeable ring signatures

var alice = lrs.gen();
var bob = lrs.gen();
var eve = lrs.gen();


var group = [alice, bob, eve].map((m) => m.publicKey);
var signed1 = lrs.sign(group, alice, "Group Signing");

var verified = lrs.verify(group, signed1, "Group Signing");
console.log("The sign has been verified as " + verified);

var signed2 = lrs.sign(group, alice, "Signing again");
var compared = lrs.link(signed1, signed2);

function compareSigns() {
    if (compared) {
        console.log('Both signatures are from the same person');
    } else {
        console.log('Both signatures are  not from the same person');
    }
}


compareSigns();
















function print(data) {
    console.log(data);
}

print(group);