"use strict";
function add(num1, num2) {
    return num1 + num2;
}
var input1 = document.querySelector('#input-1');
var input2 = document.querySelector('#input-2');
var button = document.querySelector('button');
var resultContainer = document.querySelector('#result');
button.addEventListener('click', function () {
    var result = add(+input1.value, +input2.value);
    resultContainer.textContent = result.toString();
});
