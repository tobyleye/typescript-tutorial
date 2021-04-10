"use strict";
console.log('Hello, welcome to tsc');
// function add(num1: number, num2: number): number {
//     return num1 + num2
// }
var input1 = document.querySelector('#input-1');
var input2 = document.querySelector('#input-2');
var resultContainer = document.querySelector('#result');
var btn = document.querySelector('button');
var number;
btn.addEventListener('click', function () {
    var input1Value = input1.value;
    var input2Value = input2.value;
    var result = add(Number(input1Value), Number(input2Value));
    resultContainer.textContent = result.toString();
});
