"use strict";

function nonUniqueElements(data) {
    var data =  [3, 4, 5, 6];
    var rambo = [10, 20, 30, 40];

    function roman(rambo) {

        data.forEach(function (number, iterator, argument, argument_2) {
            console.log(number);
            console.log(rambo[iterator]);
            console.log(argument);
            console.log(argument_2);
        })
    }
    roman(rambo);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
