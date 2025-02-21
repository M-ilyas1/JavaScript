function addition(a, b){
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }else{
        return "Enter the value only number"
    }
}
// console.log(addition(1, 5));

function useLoggIn(userName){
    if(!userName){
        console.log("Enter a User Name");
    }else{
        return `${userName} is LoggIn`        
    }
}
// console.log(useLoggIn("Ali"));


let num1 = 20;
let num2 = 2;
const divider = (num1, num2) => (num1 / num2)
console.log(divider(num1, num2));
// console.log(divider(30,3));


let userData = {
    userName: "Muhammad",
    isLoggIn: true,
    address: "lahore"
}

function loggIn(userData){
    if(userData === undefined){
        console.log("Enter a user Data Please");
    }else{
        return `${userData.userName} from ${userData.address} is LoggIn recentlly`
    }
}
// console.log(loggIn(userData));


let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function calculator(data, operator){
    if(typeof(data == "number") && operator == "add"){
        return data[0] + data[2]
    }else if(operator == "sub"){
        return data[8] - data[6]
    }
    else{
        return "Enter a valid Operator"
    }
}
// console.log(calculator(numbers, "add"));
// console.log(calculator(numbers, "sub"));



// ++++++++++++++++++++++++++++++++++++++++++++

// console.log(sub(2, 10));
function sub(a, b) {
    return a - b;
}

let add = function add(a, b) {
    return a + b;
}
// console.log(add(1, 2))


// +++++++++++++++++++++++++++++++++++++++++++++


const multiplication = (a, b) => {
    return a * b
}
// console.log(multiplication(2, 30))


let data = {
    id: 1,
    name: "Abbas",
    description: "I'm good front end developer",
    isLoggIn: true,
    device: ['Mobile', 'Laptop', 'Desktop'],
    loggInSate: function(){
        return `${this.name} is loggIn in the device ${this.device[1]}`
    },
    userAbout: function() {
        return `My name is ${this.name} and, ${this.description}`
    }
}
// console.log(data.loggInSate());
// console.log(data.userAbout());



function func({ name, age}, city, ...subjects){                                                                 
    return  `My name is ${name}, I'm ${age} Year Old and I'm from ${city}. I study subjects in UNI like ${subjects.join(", ")}`

}

console.log(func({name: "Muhammad", age: 21}, "Gilgit", "DSA", "IT", "DLD"))