enum Role { ADMIN_ONLY, READ_ONLY, WRITE_ONLY };

const person = {
    name: 'helloworld',
    age: 50,
    hobbies: ['dancing', 'coding'],
    role: Role.ADMIN_ONLY
}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.WRITE_ONLY) {
    console.log('write only roles');
}

function combine(p1: number | string, p2: number | string) {
    if (typeof p1 === "number" && typeof p2 === "number") {
        return p1 + p2
    }
    return p1.toString() + p2.toString()
}


console.log(combine(25, 33))
console.log(combine('Ana', 'kendrick'))