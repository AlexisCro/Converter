// init the fluctuations via exchange_rates

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