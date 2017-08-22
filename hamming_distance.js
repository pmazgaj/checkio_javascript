// TODO - convert numbers to binary
// TODO - compare each number (single) to the same index (maybe string?)
// TODO - return sum of different numbers in each string

"use strict";

function toBinary(num) {
    num = (num >>> 0).toString(2);
    if (num.length !== 8)
    {

    }
}

function hammingDistance(n, m){
    var bin_n = toBinary(n);
    var bin_m = toBinary(m);

    console.log(bin_m);
    console.log(bin_n);
    return 0
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(hammingDistance(117, 17), 3, "First example");
    assert.equal(hammingDistance(1, 2), 2, "Second example");
    assert.equal(hammingDistance(16, 15), 5, "Third example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
