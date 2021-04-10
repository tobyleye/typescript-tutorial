function add(num1: number, num2: number): number {
    return num1 + num2
}

function map(arr: Array<any>, cb: (a: any, b: number) => any) {
    let result = []
    for (let i=0; i<arr.length; i++) {
        result.push(
            cb(arr[i], i)
        )
    }
    return result;
}

const names = ['Sunday', 'tobi', 'tola']

const upperNames = map(names, (name) => {
    return name.toUpperCase()
})

function generateError(message: string, errorCode: number): never {
    throw { message, errorCode };
}

generateError('Why did you do this to me', 500)
console.log('Upper case: ', upperNames);


