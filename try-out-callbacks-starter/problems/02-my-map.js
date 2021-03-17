/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/
//Understand
////in: arrayIn, cb
////out: newArray of elements modified by using the cb on each element of arrayIn
//Plan
////take in the arrayIn and the cb
////create a new array variable
////loop through the arrayIn
////apply cb to the elements of arrayIn
////.push into new array
////return newArray
//Do
////
//Improve

////Here is our Function
let myMap = function(arr, cb) {
    let modArray = [];

    for ( let i = 0 ; i < arr.length ; i++) {
        let modification = cb(arr[i]);
        modArray.push(modification);
    }
    return modArray;
};



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myMap;
