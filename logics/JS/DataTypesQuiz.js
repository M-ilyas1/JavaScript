let name = "ali"
// console.log(typeof(name));

let isLoggIn = true;
// console.log(typeof(isLoggIn));

let num1 = 10;
// console.log(typeof(toString(num1)));

let num2 = "123"
let inNum = Number(num2)
// console.log(typeof(inNum));

let value1 = null
console.log(typeof(value1));   // ------>

let value2 = undefined;
// console.log(typeof(value2));

// console.log(typeof("Hello") === typeof(42));

// console.log(5 + "5");

// console.log(true + false);


let array = []
// console.log(typeof array);

let object = {}
// console.log(typeof object);

let num3 = 10.3
// console.log(Math.floor(num3));

let ispresent = true
let isPresent = Number(ispresent)
// console.log(isPresent);

let float = 3.14;
// console.log(typeof(float));

console.log(isNaN("Hello"));  // ------->
console.log(isNaN("123"));

// console.log("10" - 3);    // -------->

// console.log(null === undefined);




function Add() {
    return 2 + 4 
}
Add()

// console.log(typeof(Add()));

let bigData = BigInt(13123124124214123412421412412412n)
// console.log(typeof(bigData));

let unique = Symbol("foo")
// console.log(typeof(unique));

let toNum = Number("Hello")
// console.log(typeof toNum);

let stdData = {
    name: "Ali",
    class: "10th",
    age: 17
}
// console.log(JSON.stringify(stdData));

let json = '{"name":"Ali","class":"10th","age":17}'
// console.log(JSON.parse(json));


let arry = [1, 2, 3, 4, 5, 6]
// console.log(Array.isArray(arry));

let obj = {a: 1, b: 2, c: 3}
// console.log(Array.isArray(obj));


// console.log([] + {});
// console.log({} + []);










