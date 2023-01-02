let convertButton = document.getElementById('convert-button');
let priceOutput  = document.getElementById('price-output');

convertButton.addEventListener('click', () => {
    let priceInput   = document.getElementById('price-input').value;
    let deviseInput  = document.getElementById('devise-input').value;
    let deviseOutput = document.getElementById('devise-output').value;
    let myHeaders    = new Headers();
    
    myHeaders.append("apikey", "g5abhnyuIjiV7oWQhZO6J7j7CJV3ac5h");
        
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    
    fetch(`https://api.apilayer.com/fixer/convert?to=${deviseOutput}&from=${deviseInput}&amount=${priceInput}`, requestOptions)
        .then(response => response.json())
        .then(result => priceOutput.value = result["result"])
        .catch(error => console.log('error', error))
})
