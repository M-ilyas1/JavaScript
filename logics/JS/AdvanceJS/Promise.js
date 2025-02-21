// let apiIntegrate = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Task one is Complete');
//         resolve()
//     }, 1000);
// })
// apiIntegrate.then(() => {
//     console.log('Promis is Consumed');
    
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Task two is Complete');
//         resolve()
//     }, 1000);
// }).then(() => {
//     console.log('Promis is Consumed');  
// })


// const promisThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             name: "Muhammad Ilyas",
//             email: "mohammad@example.com",
//         })
//     }, 2000)
// })
// promisThree.then((userData) => {
//     console.log(userData);
    
// })


// const promisFourth = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({ name: "Muhammad Ilyas", email: "mohammad@example.com" })
//         }else{
//             reject('Sorry, You have a Error')
//         }
//     }, 1000)
// })
// promisFourth.then((userData) => {
//     console.log(userData);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log("Wooow"))





// let promisFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({ name: "Muhammad Ilyas", email: "mohammad@example.com", password: '123@', })
//         }else{
//             reject('Sorry, You have a Error')
//         }
//     }, 1000)
// })
// async function consumePromisFive() {
//     try {
//         let response = await promisFive
//         console.log(response);
//     } catch (error) {
//         console.log("You have Some Issue");
//     }
// }
// consumePromisFive()






async function firstAPI(apiData) {
    try {
        let api = await fetch(apiData);
        let toJSON = await api.json()
        console.log(toJSON);
    } catch (error) {
        console.log("Error" + error); 
    }
}
firstAPI('https://api.github.com/users/m-ilyas1')






fetch('https://api.github.com/users/m-ilyas1')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log("Error" + error))


