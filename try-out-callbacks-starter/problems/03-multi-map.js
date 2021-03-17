/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/
//Understand
//  in: value, a number and a cb
//  out: a new value, which is the old value, modified by running cb n times
//
//Plan
//STEP 1: define the parameters
//  set an output value
//  iterate through using a standard for loop with middle term i < n
//  inside the for loop perform cb on the original value
//Do
//Improve


let multiMap = function(value, n, cb) {

  for (let i = 0; i < n; i++) {   // modifying n times

    return cb(value);             //modifying the value

  }

};
let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
