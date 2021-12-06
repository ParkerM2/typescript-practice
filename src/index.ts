// basic types
let id: number = 5;
let company: string = 'Company';
let isPublished: boolean = true;
let x: any = 'hello world';
let age: number; // if not a number will through error

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'hello world'];

// tuple ? = a finite ordered list (sequence) of elements
// a n-tuple is a sequence (or ordered list) of n elements, where n is a non-negative integer
let person: [number, string, boolean] = [1, 'Brad', false]

// tuple array
let employee: [number, string][];
employee = [
    [1, 'Parker'],
    [1, 'Parker'],
    [1, 'Parker'],
    [1, 'Parker'],
];

// union (string or number)
let pid: string | number = 22;

// Enum set of named constants
enum Direction1 {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}

// objects
const user:
    {
    id: number,
    name: string
    } = {
    id: 1,
    name: 'John'
};

let cid: any = 1;

let customerId = cid as number;

// functions

// parameters must be a type, as well as the returned value
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(4,1))
