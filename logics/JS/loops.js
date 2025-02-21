// ================================For Loop================================

for (let i = 0; i < 5; i++) {
    // console.log("The num is ", element);
}

for (let i = 0; i < 4; i++) {
    // console.log(`This is  Outer loop and number is ************ ${i}`);
    for (let j = 0; j < 3; j++){
        // console.log(`This is Inner Loop and its number is ============ ${j}`); 
        for (let h = 0; h <= 3; h++) {
            // console.log(`This is Innnerrr Loop ------------ ${h}`);
        }
    }
}

for (let i = 0; i <= 10; i++){
    // console.log(`The table of ---------- ${i}`);   
    for (let j = 1; j < 10; j++) {
        // console.log(i,  " * ", j, " = ", i*j);
    }
}



// break and continue

let mydata = ["Meat", "Fish", "Egg", "Milk", "Bread", "Cheese", "Butter"]

for (let i = 0; i < mydata.length; i++) {
    if(mydata[i] === "Bread"){
        // console.log("Bread is Detected");
        // break
        continue
    }
    // console.log(mydata[i]);
}




// ================================While / Do While Loop================================

let name = "muhammad";
let i = 0
while (i < 10) {
    // console.log(`${i} - ${name}`);
    i++ 
}


let a = 0;

do{
    // console.log(a);
    a++
}while(a <= 5)
    
    
    
// ================================ For of ================================



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const newArr in arr) {
    if(newArr == 5){
        // console.log("5 is Detected");
        break
    }else{
        // console.log(newArr);
    }
    
};


let maps = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
])
maps.set("e", 10)

for (const [key, value] of maps) {
    // console.log(key); 
}



// ================================ For in ================================

let myObj = {
    name: "Muhammad Ilyas",
    age: 21
}

for (const key in myObj) {
    // console.log(key, ":-" ,myObj[key]);
}


let programmingLanguages = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "C#", "Java"];

for (const key in programmingLanguages) {
    // console.log(key, "-", programmingLanguages[key]);
}



// ================================ Foreach ================================


let PL = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "C#", "Java"];

PL.forEach((item, index) => {
    // console.log(`${index}:- ${item}`);
})



let studentsData = [
    {
        name: "Muhammad Ilyas",
        age: 21
    },
    {
        name: "Ali",
        age: 20
    },
    {
        name: "Abbas",
        age: 18
    }
]

studentsData.forEach((item, index) => {
    // console.log(item.name);
    if(index == 0){
        // console.log(`Student name is ${item.name} and his Age is ${item.age}`);
    }
})


let books = ["IT", "The Hobbit", "The Rings", "The Code", "The Symbol", "Hunger Games"]

books.forEach((item, index) => {
    if(item == "IT" || index == 0){
        // console.log(item);
    }
})



// ================================ Filter ================================

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNum = myNums.filter( (item) => {
    if (item < 6) {
        return item 
    }
})
// console.log(newNum);


let uniData = [
    { name: "Ilyas", age: 21, department: "IT", semister: "4th" },
    { name: "Ali", age: 20, department: "CS", semister: "3rd" },
    { name: "Abbas", age: 18, department: "SE", semister: "5th" },
    { name: "Israr", age: 21, department: "AI", semister: "last"},
    { name: "Ajmal", age: 14, department: "CS", semister: "3rd" },
]

let filterData = uniData.filter( (item) => {
    return (item.department == "IT") || ( item.semister == "3rd")
})
// console.log(filterData);


// ================================ Map ================================

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers = numbers.map( (item) => item * 10)
// console.log(newNumbers);



// ================================ Reduce ================================


let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reduceMethod = num.reduce((acc, curr_value) => {
    console.log(`accumulator: ${acc} and CurrentValue: ${curr_value}`);
    return acc + curr_value 
}, 2)


console.log(reduceMethod);


let shoppingCart = [
    {
        itemName: "T-Shirt",
        price: 200,
    },
    {
        itemName: "Cote",
        price: 400,
    },
    {
        itemName: "Jacket",
        price: 1200,
    },
    {
        itemName: "Shoes",
        price: 800,
    },
]

let totalPrice = shoppingCart.reduce((acc, itemprice) => acc + itemprice.price, 0)
console.log(totalPrice);
