"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function map(arr, cb) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(cb(arr[i], i));
    }
    return result;
}
var names = ['Sunday', 'tobi', 'tola'];
var upperNames = map(names, function (name) {
    return name.toUpperCase();
});
function generateError(message, errorCode) {
    throw { message: message, errorCode: errorCode };
}
generateError('Why did you do this to me', 500);
console.log('Upper case: ', upperNames);
