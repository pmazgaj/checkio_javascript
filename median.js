"use strict";

function median(data) {
    var len = data.length;
    var sorted_data = data.sort(function (a, b) {
        return a > b ? 1 : -1
    });
    var index = Math.floor(len / 2);
    data = ((len % 2 === 0) === true) ? (sorted_data[index] + sorted_data[index - 1]) / 2
        : sorted_data[index];
    return data;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
