"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN_ONLY"] = 0] = "ADMIN_ONLY";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["WRITE_ONLY"] = 2] = "WRITE_ONLY";
})(Role || (Role = {}));
;
var person = {
    name: 'helloworld',
    age: 50,
    hobbies: ['dancing', 'coding'],
    role: Role.ADMIN_ONLY
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.WRITE_ONLY) {
    console.log('write only roles');
}
function combine(p1, p2) {
    if (typeof p1 === "number" && typeof p2 === "number") {
        return p1 + p2;
    }
    return p1.toString() + p2.toString();
}
console.log(combine(25, 33));
console.log(combine('Ana', 'kendrick'));
