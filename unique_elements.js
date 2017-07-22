"use strict";

function nonUniqueElements(data) {
    var len_of_data = data.length;
    var objects_till_now = [];

    console.log("Len: " + len_of_data);
    console.log(data);
    for (var i=0; i < len_of_data; i++)
    {

        var elem = data[i];
        var in_list = objects_till_now.indexOf(elem);
        // console.log(in_list);
        if(in_list === -1) {
        // console.log("Elem " + elem + " not in list yet");
        objects_till_now.push(elem);

        }
        else
        {
        console.log("Elem " + elem + " was already in list");

        }

        // console.log(elem);

    }
    console.log(objects_till_now);
    return objects_till_now;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
