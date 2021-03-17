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
//1.2 Use .split on value
//2: Using .map, take an array and apply n to it
//3. return our array
//4. .join the array into a string

//  iterate through using a standard for loop with middle term i < n
//  inside the for loop perform cb on the original value
//Do
//Improve
// console.log(value, n, cb);


let multiMap = function(value, n, cb) {
 let split = value.split("");

  let valueArray = split.map(function(split[0]){
    return cb(value);
  })
};


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



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
