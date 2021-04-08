function add(num1, num2) {
    return num1 + num2;
}
var input1 = document.querySelector('#input-1');
var input2 = document.querySelector('#input-2');
var resultContainer = document.querySelector('#result');
var btn = document.querySelector('button');
btn.addEventListener('click', function () {
    var input1Value = input1.value;
    var input2Value = input2.value;
    var result = add(Number(input1Value), Number(input2Value));
    resultContainer.textContent = result.toString();
});
