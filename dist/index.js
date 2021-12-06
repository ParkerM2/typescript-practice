"use strict";
// basic types
let id = 5;
let company = 'Company';
let isPublished = true;
let x = 'hello world';
let age; // if not a number will through error
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello world'];
// tuple ? = a finite ordered list (sequence) of elements
// a n-tuple is a sequence (or ordered list) of n elements, where n is a non-negative integer
let person = [1, 'Brad', false];
// tuple array
let employee;
employee = [
    [1, 'Parker'],
    [1, 'Parker'],
    [1, 'Parker'],
    [1, 'Parker'],
];
// union (string or number)
let pid = 22;
// Enum set of named constants
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
// objects
const user = {
    id: 1,
    name: 'John'
};
let cid = 1;
let customerId = cid;
// functions
// parameters must be a type, as well as the returned value
function addNum(x, y) {
    return x + y;
}
console.log(addNum(4, 1));
