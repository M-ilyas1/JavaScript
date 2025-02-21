// Stack Memory

let name = "Muhammad"
let myName = name;
myName = "Muhammad Ilyas"

console.log(name);
console.log(myName);

// Heap Memory

let obj1 = {
    name: "Muhammad",
    age: 21
}

let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.name = "Muhammad Ilyas";
console.log(obj1.name);
console.log(obj2.name);

