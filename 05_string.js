// ***************** String ******************

let name = "Muhammad Ilyas "
let age = 21;
console.log(`My name is ${name} and my age is ${age}`) // String interpoliation

let myName = new String("  Muhammad Ilyas      ");
console.log(myName.trim())

let url = "http://vgram.net/"

console.log(url.replace('vgram', 'vGram'));
console.log(url.includes('vGram'));
console.log(url.split('/'));