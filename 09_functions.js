function userLoggInMessage(userName = "Flok") {
    if(!userName){
        console.log("Please Enter a User Name");
    }
    else{
        console.log(`Wellcome ${userName} You are LoggIn`);
    }
}
// userLoggInMessage()




function calculateCardNumber(...num) {               // (...num) Three dots are called rest Operator
    return num
}
// console.log(calculateCardNumber(10, 30, 50, 80, 100));




// *************************** Handle Object with Function ************************

let data = {
    productName: 'Car',
    productPrice: '500,000'
}

function handleObject(obj) {
    console.log(`Product Name is ${obj.productName} and its Prices id ${obj.productPrice}`)
}

// handleObject(data);             // Use this I you Want to handle Object from out site of Function

handleObject({
    productName: 'Car',
    productPrice: '500,000'
})



// *************************** Handle Array with Function ************************

let array = [100, 200, 300, 400, 500]

function handleArray(getArray){
    return getArray[2]
}
// console.log(handleArray(array));
console.log(handleArray([100, 200, 300, 400, 500]));