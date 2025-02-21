//  ---------------------------------------------- Array and Array Methods 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.push(20)
// numbers.pop()
// console.log(numbers);

// numbers.shift()
// numbers.unshift(0)
// console.log(numbers);

// console.log(numbers);
// let SliceMethod = numbers.slice(1, 5)
// console.log("Slice Method", SliceMethod);


// let SpliceMethod = numbers.splice(1, 6)
// console.log("Splice Method", SpliceMethod);
console.log(numbers);


// ------------------------------------------- Array concatination

let RGB = ['Red', 'Green', 'Blue'];
let RGBA = ['Red', 'Green', 'Blue', 'Alpha'];

let all_Colors = RGB.concat(RGBA)
let all_New_Colors = [...RGB, ...RGBA] 

// console.log(all_Colors);
// console.log(all_New_Colors);


// -------------------------------------------------------

// let num = [1, [2, 3, 4], 5, [6, 7, [8]], 9, 10]
// console.log(num);

// let newNum = num.flat(Infinity)
// console.log(newNum);

// ------------------------------------------------------- Multiple valibales to Array

let name = "Muhammad"
let age = 21
let Edu = "BSCS"

let newArray = Array.of(name, age, Edu)

console.log(newArray);

// ----------------------------------------------------------- Single variable to Array

let myName = "Muhammad Ilyas"

console.log(Array.isArray(myName));
console.log(Array.from(myName));




