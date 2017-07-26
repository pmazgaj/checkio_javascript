/**
 * Created by Paweł Rak on 2017-07-21.
 */
/*
 * TODO
 * TODO 4. Get the [i][j] element from input array
 * TODO 5. If multiple elements found - take most top of it
 *
 *
 * */

"use strict";

function getSumElemsInObj(object) {
    var sum = 0;
    for (var i = 0; i < object.length; i++)
        // console.log(typeof object[i])
        sum += object[i];
    return sum;
}

function sumElementsInList(array) {
    var sum = 0;
    array.forEach(function (element) {
        sum += element;
    });
    return sum;
}

function transformArray(array) {
    return Object.keys(array[0]).map(function (c) {
        return array.map(function (r) {
            return r[c];
        });
    });
}

function getSumForLine(array) {
    var results = [];
    array.forEach(function (single_list) {
        results.push(sumElementsInList(single_list));
    });
    return results;
}

function getKeysFromNestedObject(sums) {
    var new_object;
    var elements = [];
    Object.keys(sums).forEach(function (key, obj) {
        new_object = sums[obj];
        Object.keys(new_object).forEach(function (p1) {
            elements.push(parseInt(p1));
        });
    });
    return Math.min.apply(null, elements);
}

function mergeSums(rows, columns) {
    var sums = [];
    rows.forEach(function (row, iterator) {
        columns.forEach(function (column, index) {
            var obj = {};
            var sum_row_column = row + column;
            obj[sum_row_column] = [iterator, index];
            sums.push(obj);
        });
    });
    var min = getKeysFromNestedObject(sums);
    var weakest_point = [];
    // console.log(min);
    var counter = 0;
    var temp_sum = 0;
    var current = 0;
    var points = [];
    sums.forEach(function (object, iterator) {
        // console.log(object);
        Object.keys(object).forEach(function (key, iterator) {
            // console.log(key);
            // console.log(object);
            // console.log(iterator);

            if (min.toString() === key) {
                counter += 1;
                weakest_point = object[key];
                points.push(weakest_point);

                current = getSumElemsInObj(weakest_point);

                if (counter === 1) {
                    temp_sum = current;
                }
                else if (current < temp_sum) {
                    temp_sum = current;
                }
                // console.log(temp_sum);
                // console.log(iterator);
                // console.log(so);
                // if ()
                // console.log(current);

                // console.log(weakest_point);
                // current = getSumElemsInObj(weakest_point);
                // if (counter > 1)
                // {
                //     Math.max.apply(null, object[key]);
                // }
                // console.log(key);
                // console.log(object[key]);

            }
        });
    });
    if(points.length < 2)
    {
        return weakest_point;
    }
    else {
        points.forEach(function (point) {
            var sum = point[0] + point[1];
            if (sum === temp_sum)
            {
            console.log(point);
            weakest_point = point;
            }
        });
    }
    return weakest_point;
    // console.log(temp_sum);
}

function weakPoint(matrix) {
    var transposed_matrix = transformArray(matrix);
    var row_sum = getSumForLine(matrix);
    var column_sum = getSumForLine(transposed_matrix);
    return mergeSums(row_sum, column_sum);
}

var assert = require('assert');

if (!global.is_checking) {
    // assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
    //                             [2, 9, 4, 1, 7],
    //                             [3, 8, 6, 2, 4],
    //                             [2, 5, 2, 9, 1],
    //                             [6, 6, 5, 4, 5]]
    //                             ), [3, 3], "Example");
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
        [2, 8, 1, 1, 7],
        [3, 8, 6, 2, 4],
        [2, 5, 2, 9, 1],
        [6, 6, 5, 4, 5]]
    ), [1, 2], "Two weak point");

    // assert.deepEqual(weakPoint([[1, 1, 1],
    //                             [1, 1, 1],
    //                             [1, 1, 1]]
    //                             ), [0, 0], "Top left");

}