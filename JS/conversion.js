//manage fixer to have all currencies in the choice list
let deviseInput  = document.getElementById('devise-input');
let deviseChart  = document.getElementById('devise-chart');
let deviseOutput = document.getElementById('devise-output');
let myHeaders = new Headers();
myHeaders.append("apikey", "g5abhnyuIjiV7oWQhZO6J7j7CJV3ac5h");

let requestOptions = {
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
        deviseChart.insertAdjacentHTML('afterbegin', `<option class="input-group-text" value=${i}>${symbols[i]}</option>`);
        deviseOutput.insertAdjacentHTML('afterbegin', `<option class="input-group-text" value=${i}>${symbols[i]}</option>`);
    }
  })
  .catch(error => console.log('error', error));

//manage the request to have the conversion
let convertButton = document.getElementById('convert-button');
let priceOutput   = document.getElementById('price-output');

convertButton.addEventListener('click', () => {
  let priceInput   = document.getElementById('price-input').value;
  let deviseInput  = document.getElementById('devise-input').value;
  let deviseOutput = document.getElementById('devise-output').value; 

  myHeaders = new Headers();
  myHeaders.append("apikey", "g5abhnyuIjiV7oWQhZO6J7j7CJV3ac5h");

  let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
  };

  fetch(`https://api.apilayer.com/fixer/convert?to=${deviseOutput}&from=${deviseInput}&amount=${priceInput}`, requestOptions)
    .then(response => response.json())
    .then(result =>
      { console.log(result.message);
        if (result.message.includes("You have exceeded") ){
          console.log("je suis dans la première condition");
          fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${deviseOutput}&from=${deviseInput}&amount=${priceInput}`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (Object.keys(result).includes("message")){
                alert("Nous sommes désolés mais nous sommes victimes de notre succès");
              } else {
                priceOutput.value = result["result"];
              }
            })
        } else {
          priceOutput.value = result["result"];
        }
      })
    .catch(error => console.log("error", error));
})
