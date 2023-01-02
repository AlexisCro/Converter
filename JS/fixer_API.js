//manage fixer to have all currencies in the choice list
let deviseInput  = document.getElementById('devise-input');
let deviseOutput = document.getElementById('devise-output');
let myHeaders = new Headers();
myHeaders.append("apikey", "g5abhnyuIjiV7oWQhZO6J7j7CJV3ac5h");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.json())
  .then(result =>  {
    let symbols = result.symbols;
    for(i in symbols){
        deviseInput.insertAdjacentHTML('afterbegin', `<option class="input-group-text" value=${i}>${symbols[i]}</option>`);
        deviseOutput.insertAdjacentHTML('afterbegin', `<option class="input-group-text" value=${i}>${symbols[i]}</option>`);
    }
  })
  .catch(error => console.log('error', error));

// let myHeaders = new Headers();
//myHeaders.append("apikey", "g5abhnyuIjiV7oWQhZO6J7j7CJV3ac5h");

/*var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};*/

/*fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
  .then(response => response.json())
  .then(result => {
    for(i in result.symbols){
        deviseInput.insertAdjacentHTML('afterbegin', `<option class="input-group-text" value=${i}>${i}</option>`)
    }
  })
  .catch(error => {
    console.log('error', error)
    if(error !== 'null'){
        alert("Désolé, nous sommes victimes de notre succès et nous ne pouvons plus lancer de requête pour le moment. ");
    }
  });*/

//manage the request to have the conversion 
let convertButton = document.getElementById('convert-button');
let priceOutput   = document.getElementById('price-output');

convertButton.addEventListener('click', () => {
    let priceInput   = document.getElementById('price-input').value;
    let deviseInput  = document.getElementById('devise-input').value;
    let deviseOutput = document.getElementById('devise-output').value;
    let myHeaders    = new Headers();
    
        
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
