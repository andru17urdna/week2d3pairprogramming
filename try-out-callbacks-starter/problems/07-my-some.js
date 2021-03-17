/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.


//
//
//





Examples:

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/
//Understand
// in: array callback
// out: boolean telling us if at any element returns true when passed into the cb
//Plan
//  iterate through the array
//  if statment telling us if cb(element) returns true
let mySome = function(arr, cb) {
    for(let i = 0; i < arr.length; i++) {

        let element = arr[i];
        if (cb(element, i) === true) {
            console.log('---------------' + cb(element));
            return true;
        }

    }
    return false;
};

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySome;
