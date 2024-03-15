// let x = 'Laurel';
// let y = 'Hardy';
// let z = y;
// y = x;
// x = z

// console.log(x);


// ...........................

// function hello() {
//     return 'Hello World';
// }


// ...........................

// function a() {
//     return 'Hello a!'
// }

// function b() {
//     return 'Hello b!'
// }


// ...........................

// function greet() {
//     return 'Haydo!'
// }
// let salutation = greet();


// ...........................

// function echo(param) {
//     return param
// }

// ...........................

// function greet(name) {
//     return 'Hello' + name;
// }
// greet(Ilyas)

// ...........................

// function log() {
//     console.log('Hello Console!');
// }

// ...........................

// function log(name) {
//     console.log(name);
// }
// log("Muhammad Ilyas")

// ...........................

// function shout(param){
//     let result = param + param
//     console.log(result);
//     return result
// }
// shout(Fire)


// ...........................

let a = 'Tic';
a = a + 'Tac';
a = a + a;

console.log(a);

// ...........................

function length(name) {
    return name.length;
}
length("sun")


// ...........................

function toCase(param) {
    return param.toLowerCase() + "-" + param.toUpperCase()
}

// ...........................

function shotcut(num1 , num2) {
    return num1  + num2
}

// ...........................

function firstChar(num1) {
    let Trimmer = num1.trim()
    return Trimmer.charAt(0)
}


// ...........................

function firstWord(num){
    return num.substr(1)
}

// ...........................

function normalize(date) {
    let newDate1 = date.replace('-', '/');
    newdate2 = newDate1.replace('-', '/');
    return newdate2
}