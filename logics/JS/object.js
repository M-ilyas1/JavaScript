// let mySymbol = Symbol("Key");

// let obj = {
//     name: 'John',
//     age: 20,
//     city: 'New York',
//     isLogIn: true,
//     [mySymbol]: "My_key"
// }

// console.log(obj);
// console.log(obj.name);
// console.log(obj.isLogIn);
// console.log(obj[mySymbol]);



// --------------------------------------------

let studentData =  new Object();      // SingleTon oject
// let studentData =  {};             // Non-SigleTon Object   

studentData.id = 1;
studentData.name = "Muhammad"
studentData.dep = "CS"
studentData.Sem = "3rd"

// console.log(studentData);


let object1 = {
    id: 1,
    name: "Muhammd"
}
let object2 = {
    id: 2,
    name: "Ali"
}
let object3 = {
    id: 3,
    name: "Israr"
}

let allObj = Object.assign({}, object1, object2, object3)
// console.log(allObj);



console.log({} + []);
console.log(typeof [])
console.log([] + {})