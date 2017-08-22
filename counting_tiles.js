/**
 * Created by Paweł Rak on 2017-07-27.
 */
"use strict";
// DONE TODO Calculate Area of given circle (via its radius)
// DONE TODO Calculate length of outer square (via its radius)
// DONE TODO Calculate Area of outer square (via circle radius)
// TODO Calculate Area of inner square (via circle radius)
// TODO Each tile equals to 1 x 1 m
// TODO Calculate

function getInnerSquareArea(radius){
    return Math.PI * radius * radius;
}

function getOuterSquareArea(radius){
    // console.log(Math.ceil(radius));
    var length = radius === Math.trunc(radius) ? radius * 2 : (Math.ceil(radius) * 2);
    // console.log(length);
    return length * length;
}

function getCircleArea(radius){
    return Math.PI * radius * radius;
}

function countingTiles(radius){
    var circleArea = getCircleArea(radius);
    var outerSquareArea = getOuterSquareArea(radius);
    var difference = 0;
    console.log(circleArea);
    console.log(outerSquareArea);
    difference = outerSquareArea - circleArea;
    console.log(difference);
    getOuterSquareArea(radius);
    return [0, 0]
}

var assert = require('assert');

if (!global.is_checking) {
    // assert.deepEqual(countingTiles(2.9), [4, 12], "N=2");
    // assert.deepEqual(countingTiles(3), [16, 20], "N=3");
    // assert.deepEqual(countingTiles(2.1), [4, 20], "N=2.1");
    assert.deepEqual(countingTiles(2.5), [12, 20], "N=2.5");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
