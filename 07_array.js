let myArray = [1, 2, 3,4, 5]

// myArray.push(6)         // Add value at the end of Array
// myArray.pop()           // Remove value at the end of Array

// myArray.unshift(0)      // Add value at the start of Array
// myArray.pop()           // Remove value at the end of Array

// console.log(myArray.includes(10))
// console.log(myArray.indexOf(2))

// let newArray = myArray.join();       // convert Array into String
// console.log(newArray)

// let sliceOfArray = myArray.slice(0, 3) 
// console.log(sliceOfArray)

// let spliceOfArray = myArray.splice(0, 3)
// console.log(spliceOfArray)

// console.log(myArray)


// ********************************************************************************

let  books = ["English", "Urdu", "Computer", "Chemistry", "Physices"]
let  favirateBooks = ["ICT", "Oops", "Programming"]

// let concateBooks = books.concat(favirateBooks)         // Concate Operator
// let concateBooks = [...books, ...favirateBooks]        // Spread Operator

// console.log(concateBooks)



let numberArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10]] ]
// console.log(numberArray);
// let flat_the_array = numberArray.flat(Infinity)          // The flate ..spearde out all value

// console.log(flat_the_array);



console.log(Array.isArray("Ilyas"));          // Check is Array is Avilable
console.log(Array.from("Ilyas"));             // Convert into Array
console.log(Array.from({name: "Ilyas"}));     // Chech it


let number1 = 100;
let number2 = 200;
let number3 = 300;

console.log(Array.of(number1, number2, number3))       // of ..Convert these all values into Array
 