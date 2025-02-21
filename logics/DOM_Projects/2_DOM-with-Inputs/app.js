let form = document.getElementById('form')
console.log(form);

form.addEventListener('submit', function(e){
    e.preventDefault()

    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let result = document.getElementById('result')

    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = `<span style="color: red">Enter a Valid number Please!</span>`
    }else{
        let sum = num1 + num2
        result.innerHTML = `<span> The sum is: ${sum}</span>`
        console.log(result);
    }
    

    // console.log(result);
    
    
})
