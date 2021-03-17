/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/
// understand
// accept an array and a call back
// iterate through the array
    // normal for loop
    // as we're going through the for loop do the call back
// does not need to return a value



// plan
// do
    //for loop
    //declare an element as arr[i]
    //invoke the function on that element
// improve


let myForEach = function(arr, cb) { //accept an array and a call back
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        cb(el);
    }
    
};

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myForEach;
