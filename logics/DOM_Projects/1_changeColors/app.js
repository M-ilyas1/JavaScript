
let body = document.querySelector('body')
// console.log(body);

let button = document.querySelectorAll('.button')
// console.log(button);
button.forEach((item) => {
    item.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id
        console.log(e.target.id);
    })
})




// let body = document.querySelector("body");
//         let displayText = document.createElement("h5")
//         displayText.style.textAlign = "center"
//         body.appendChild(displayText)

//         let buttons = document.querySelectorAll(".button")
//         buttons.forEach((button) => {
//             // console.log(button);
//             button.addEventListener('click', function(e) {
//                 // console.log(e.target);
//                 let color = e.target.id;
//                 // if(e.target.id == button.id){
//                     body.style.backgroundColor = color;
//                     // console.log(color);
//                     // }
//                     displayText.innerText = `You Clicked on ${color} Color`;                 
//             })
            
//         })
//         // console.log(button);
        