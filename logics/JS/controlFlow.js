function checkNumber(num) {
    if(num >0){
        return (`The given number ${num} - is Negative Number`);
    }else if(num < 0){
        return (`The given number ${num} - is Postive Number`);
    }else{
        return (`The given number ${num} - is Zero`);
    }
}

// console.log(checkNumber(-9));
// console.log(checkNumber(0));
// console.log(checkNumber(2));


function checklargest(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return console.log(`The largest number is ${num1}`);
    }else if(num2 > num1 && num2 > num3){
        return console.log(`The largest number is ${num2}`);
    }else{
        return console.log(`The largest number is ${num3}`);
    }
}
// checklargest(10,1,5)


function isPass(marks){
    if (marks >= 40 && marks <= 100) {
        return `Congratulation you're Pass, Your marks are ${marks}`
    }else if(marks < 40 && marks > 0){
        return `Sorry you're Fail, Your marks are ${marks}`
    }else{
        return `Enter valid marks (Greater then 0 and Less then 100)`
    }
}
// console.log(isPass(2222));


function isEvenOdd(num) {
    if(num % 2 == 0){
        return `Then Given number ${num} is Even`
    }else{
        return `Then Given number ${num} is Odd`
    }
}
// console.log(isEvenOdd(13));
// console.log(isEvenOdd(12));


let marks = 10;

switch (true){
    case (marks >= 80 && marks <= 100):
        console.log(`Congratulations! you got a A+`)
        break;
    case (marks >= 70 && marks <= 79):
        console.log(`Congratulations! you got a A`)
        break;    
    case (marks >= 60 && marks <= 69):
        console.log(`Congratulations! you got a B`)
        break;    
    case (marks >= 50 && marks <= 59):
        console.log(`Congratulations! you got a C`)
        break;    
    case (marks >= 40 && marks <= 49):
        console.log(`Congratulations! you got a D`)
        break;    
    case (marks >= 0 && marks < 40):
        console.log(`Sorry you're Fail, Your marks are ${marks}`)
        break;
    default:
        console.log(`Enter a Valid marks`)
}


// Nullish Coalescing Operator (??) and Ternary Operator

let number = undefined ?? 4
let chekNumber = (number > 10) ? `Good`: `Bad`;

// console.log(chekNumber);





