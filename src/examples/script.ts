console.log('Hello, welcome to tsc');

// function add(num1: number, num2: number): number {
//     return num1 + num2
// }

const input1 = document.querySelector('#input-1')! as HTMLInputElement;
const input2 = document.querySelector('#input-2')! as HTMLInputElement
const resultContainer = document.querySelector('#result')!
const btn = document.querySelector('button')!

let number;

btn.addEventListener('click', () => {
    const input1Value = input1.value
    const input2Value = input2.value
    const result = add(Number(input1Value), Number(input2Value))
    resultContainer.textContent = result.toString();
})

