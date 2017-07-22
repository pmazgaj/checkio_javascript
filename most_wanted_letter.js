/**
 * Created by Paweł Rak on 2017-07-14.
 */
"use strict";

function counter(character, lowered_data) {
    var counter = 0, i = 0;
    for (i; i < lowered_data.length; i++) {
        if (lowered_data[i] === character) {
            counter++;
        }
    }
    return counter;
}

function isLetter(string) {
    // console.log(string.charCodeAt(0));
    return string.length === 1 && string.match(/[a-z]/i);
}

function processData(map, counters, string) {
    var rademenez = 0;
    // console.log(string);
    for (var k = 0; k < string.length; k++) {
        var char = string[k];
        var reg = new RegExp(char, 'g');
        if (isLetter(char) === null) {
            string = string.replace(reg, '');
        }
    }
    // console.log(string);
    for (var i = 0; i < string.length; i++) {
        var character = string[i];
        var result = counter(character, string);

        var ascii_value = character.charCodeAt(0);
        console.log("Character " + character + "\nValue " + ascii_value);

        // if (i === 0){
        //     rademenez = ascii_value;
        // }
        // else if(ascii_value < rademenez)
        // {
        // rademenez = ascii_value;

        // console.log(ascii_value);
        // console.log(character);
        // }
        // if (){
        //     console.log(string.charCodeAt(0));
        //
        // }
        // console.log(result);
        // console.log(character);
        // if (rademenez < ascii_value)
        // {
        map[result] = character;
        // }
        counters.push(result);
    }
    // console.log(map);
    return [map, counters, string];
}

function mostWanted(data) {
    var map = {};
    var counters = [];
    var lowered_data = data.toLowerCase();
    var func = processData(map, counters, lowered_data);
    // lowered_data = func[2];
    // console.log(map);
    map = func[0];
    counters = func[1];
    // console.log(map);
    var max = Math.max.apply(null, counters);
    data = map[max];
    // console.log(data);
    return data;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    // assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    // assert.equal(mostWanted("One"), "e", "3rd example");
    // assert.equal(mostWanted("Oops!"), "o", "4th example");
    // assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
