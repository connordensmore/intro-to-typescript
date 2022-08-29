// Type Annotations
// let myName: string = "Connor";
// let isCool: boolean = true;
// let favNumber: number = 42;

// function add(a:number ,b:number) {
//     return a + b;
// }

// console.log(add(40, 2));

// Inferred Types
let myName = "Connor";
let isCool = true;
let favNumber = 42;

function add(a:number ,b:number) {
    return a + b;
}

console.log(add(40, 2));

// Union Types

const numberAndStrings = [4, 7, 29, "Connor", 5, "Jack"]
console.log(numberAndStrings);

let theAnswer: string | number = 42;
theAnswer = "42";



// Objects and Interfaces

// interface Person {
//     name: string;
//     favNumber: number;

// }

// function greet(person: Person) {
//     return `Hello ${person.name}`;
// }

// console.log(greet({
//     name: "Connor",
//     favNumber: 7
// }));

// Optional Properties

interface Person {
    name: string;
    favNumber: number;
    dogName?: string;
}

function greet(person: Person) {
    return `Hello ${person.name}`;
}

console.log(greet({
    name: "Connor",
    favNumber: 7
}));

function greetPersonandDog(person: Person) {
    if (person.dogName) {
        return `Hello ${person.name} and their dog ${person.dogName}`;
    }
    return greet(person);
}

console.log(greetPersonandDog({
    name: "Connor",
    favNumber: 7,
    dogName: "Suzy"
}));

// Classes

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
