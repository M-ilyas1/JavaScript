function greeting(){
    return "Hello";
}
console.log(greeting());

function greetingBoy(name){
    return `Hello ${name}! How are you?`;
}
console.log(greetingBoy("Ali"));

// __________________________________________

function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(10, 20));


// __________________________________________


function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(22));

function isEvenOdd(number){
    if(number % 2 === 0){
        return `${number} Even Number`;
    }else{
        return `${number} Odd Number`;
    }
}
console.log(isEvenOdd(22));


function isOddEven(num){
    return num % 2 === 0 ? `${num} is Even a Number` : `${num} is Odd a Number`;
}
console.log(isOddEven(22.3));

// __________________________________________

function calculator(number1, number2, operator){
    if(operator === "+"){
        return number1 + number2;
    }
    else if(operator === "-"){
        return number1 - number2;
    }
    else if(operator === "*"){
        return number1 * number2;
    }
    else if(operator === "/"){
        return number1 / number2;
    }
    else{
        return "Invalid Operator";
    }
}
console.log(calculator(12, 3, "/"));

// __________________________________________

