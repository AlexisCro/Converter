// init the fluctuations via exchange_rates
let startDate   = document.querySelector('#start-date');
let endDate     = document.querySelector('#end-date');
let ratesButton = document.querySelector('#rates-button');

endDate.value = new Date().toLocaleString();
console.log(new Date().toLocaleString());

ratesButton.addEventListener('click', ()=>{
  console.log(endDate.value);
});


/*
let myHeaders = new Headers();
myHeaders.append("apikey", "g5abhnyuIjiV7oWQhZO6J7j7CJV3ac5h");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/fluctuation?start_date={start_date}&end_date={end_date}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  */
