// Call API
let myHeaders = new Headers();
myHeaders.append("apikey", "g5abhnyuIjiV7oWQhZO6J7j7CJV3ac5h");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// script to construct and display charts
const myChart  = document.getElementById('myChart');
const BUTTON   = document.getElementById('rates-button');
const MONTHS   = {
    1: 'JANVIER',
    2: 'FEVRIER',
    3: 'MARS',
    4: 'AVRIL',
    5: 'MAI',
    6: 'JUIN',
    7: 'JUILLET',
    8: 'AOUT',
    9: 'SEPTEMBRE',
    10: 'OCTOBRE',
    11: 'NOVEMBRE',
    12: 'DECEMBRE'
}

function numberOfMonthBetweenTwoDates(date1, date2){
    let startMonth = date1.getMonth();
    let startYear  = date1.getYear();
    let endMonth   = date2.getMonth();
    let endYear    = date2.getYear();
    let result     = ((endYear - startYear) * 12 + (endMonth - startMonth));
    
    return result;
};

function labels(date1, date2, startMonth){
    let array = [];
    let m = startMonth;
    for (let i = 0; i <= numberOfMonthBetweenTwoDates(date1, date2); i++){
        console.log(m);
        array.push(MONTHS[m]);
        m++
        if(m > 12){
            m = 1
        }else{
            m = m 
        };
    };
    return array;
};

// display default chart
const exampleChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: Object.values(MONTHS),
        datasets: [{
            label: `devise`,
            data: [],
            borderColor: 'red',
            backgroundColor: '#f8c0b4'
        }]
    },
    options: {
        transitions: {
            show: {
                animations: {
                    x: {
                        from: 0
                    },
                    y: {
                        from: 0
                    }
                }
            },
            hide: {
                animations: {
                    x: {
                        to: 0
                    },
                    y: {
                        to: 0
                    }
                }
            }
        }
    }
})

BUTTON.addEventListener('click', ()=>{
    const startDate    = new Date(document.getElementById('start-date').value);
    const startDateAPI = document.getElementById('start-date').value;
    const endDateAPI   = document.getElementById('end-date').value
    const endDate      = new Date(document.getElementById('end-date').value);
    const startMonth   = startDate.getMonth() + 1;
    const startYear    = startDate.getFullYear();
    const endMonth     = endDate.getMonth() + 1;
    const endYear      = endDate.getFullYear();
    const DEVISE       = document.getElementById('devise-chart').value;

    fetch(`https://api.apilayer.com/exchangerates_data/fluctuation?start_date=${startDateAPI}&end_date=${endDateAPI}&symbols=${DEVISE}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        let rates = result["rates"];
        console.log(result);
        exampleChart.destroy();
        const realChart = new Chart(myChart, {
        type: 'line',
        data: {
            labels: labels(startDate, endDate, startMonth),
            datasets: [{
                label: `${DEVISE} : masquez moi`,
                data: [rates[DEVISE].start_rate, rates[DEVISE].end_rate],
                borderColor: 'red',
                backgroundColor: '#f8c0b4'
            }]
        },
        options: {
            transitions: {
                show: {
                    animations: {
                        x: {
                            from: 0
                        },
                        y: {
                            from: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        x: {
                            to: 0
                        },
                        y: {
                            to: 0
                        }
                    }
                }
            }
        }
        })
    })
    .catch(error => console.log('error', error));
})
