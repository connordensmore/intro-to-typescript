// Type Annotations
// let myName: string = "Connor";
// let isCool: boolean = true;
// let favNumber: number = 42;
// function add(a:number ,b:number) {
//     return a + b;
// }
// console.log(add(40, 2));
// Inferred Types
var myName = "Connor";
var isCool = true;
var favNumber = 42;
function add(a, b) {
    return a + b;
}
console.log(add(40, 2));
// Union Types
var numberAndStrings = [4, 7, 29, "Connor", 5, "Jack"];
console.log(numberAndStrings);
var theAnswer = 42;
theAnswer = "42";
function greet(person) {
    return "Hello ".concat(person.name);
}
console.log(greet({
    name: "Connor",
    favNumber: 7
}));
function greetPersonandDog(person) {
    if (person.dogName) {
        return "Hello ".concat(person.name, " and their dog ").concat(person.dogName);
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
