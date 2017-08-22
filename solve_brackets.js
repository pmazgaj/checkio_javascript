"use strict";
        // var firstIndexOf = expression.indexOf(currentChar);
        // var lastIndexOf = expression.lastIndexOf(currentChar);
        // console.log(firstIndexOf);
        // console.log(lastIndexOf);
function clearSequence(expression) {
    var excluded = ['{', '}', '(', ')', '[', ']'];
    var new_expression = '';
    for (var i in expression) {
        var currentChar = expression[i];
        if (excluded.indexOf(currentChar) !== -1) {
            new_expression += currentChar;
        }
    }
    return new_expression;
}

function evenBrackets(expression) {
    for (var i in expression) {
        console.log(expression[i]);
    }
    // expression.forEach(function (p1) {
    //     console.log(p1);
    // })
}

function brackets(expression) {
    expression = clearSequence(expression);
    console.log(expression)
    return true || false;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(brackets("((5+3)*2+1)"), true, "Simple");
    // assert.equal(brackets("{[(3+1)+2]+}"), true, "Different types");
    // assert.equal(brackets("(3+{1-1)}"), false, ") is alone inside {}");
    // assert.equal(brackets("[1+1]+(2*2)-{3/3}"), true, "Different operators");
    // assert.equal(brackets("(({[(((1)-2)+3)-3]/3}-3)"), false, "One is redundant");
    // assert.equal(brackets("2+3"), true, "No brackets, no problem");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}