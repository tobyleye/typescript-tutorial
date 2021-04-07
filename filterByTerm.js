"use strict";
function filterByTerm(input, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("inputArr cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        if (arrayElement.url) {
            return arrayElement.url.match(regex);
        }
        return "wow i love typescript already";
    });
}
var obj1 = { url: 'python' };
var obj2 = { url: 'golang' };
var obj3 = { url: 'java' };
var arrOfLinks = [obj1, obj2, obj3];
var searchTerm = "java";
filterByTerm(arrOfLinks, searchTerm);
