function add(num1: number, num2: number): number {
    return num1 + num2;
}

const input1: HTMLInputElement = document.querySelector('#input-1')! 
const input2: HTMLInputElement = document.querySelector('#input-2')!
const button = document.querySelector('button')!
const resultContainer = document.querySelector('#result')!

button.addEventListener('click', () => {
    const result = add(+input1.value, +input2.value)
    resultContainer.textContent = result.toString()
})
