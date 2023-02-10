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
let realChart;
let selectedList = [];

$(function(){
    $('#devise-chart-multiselect').select2({
        theme: "bootstrap-5",
        closeOnSelect: false
    }).on('change', function(){
        let choice = $(this).find('[aria-selected="true"]:last-of-type');
        selectedList.push(choice.prevObject[0].value);
    });
})

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

function formatIntegerToString(integer){
    let result = integer.toString();
    if ( result.length == 1 ){
        result = "0" + result;
    }else{
        result = result;
    }
    return result;
}

function dataAccordingToDate(dataRates, startDate, endDate, devise){
    let array      = [];
    let first      = startDate.substring(5, 7);
    let firstMonth = parseInt(first);
    let end        = endDate.substring(5, 6);
    let startYear  = startDate.substring(0, 4);
    let startDay   = startDate.substring(8, 10);
    let date1      = new Date(startDate);
    let date2      = new Date(endDate);
    for (let i = 0; i <= numberOfMonthBetweenTwoDates(date1, date2); i++){
        if (new Date(`${startYear}-${formatIntegerToString(firstMonth)}-${startDay}`) > date2 == true){
            array.push(dataRates.rates[endDate][devise]);
        }else{
            array.push(dataRates.rates[`${startYear}-${formatIntegerToString(firstMonth)}-${startDay}`][devise]);
        }
        firstMonth++;
        if (firstMonth > 12 ){
            firstMonth = 1;
            startYear++;
            startYear = startYear.toString();
        };
    }
    return array;
}

function uniqValueArray(value, index, self){
    return self.indexOf(value) === index;
}

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
    const DEVISE       = selectedList.filter(uniqValueArray).join(",");
    const BASE         = document.getElementById('base-chart').value;
    let titleChart     = document.getElementById('title-timeseries');
    console.log('je passe dans le click et ');

    titleChart.innerHTML = `Taux de change basé sur ${BASE}`;

    fetch(`https://api.apilayer.com/exchangerates_data/timeseries?start_date=${startDateAPI}&end_date=${endDateAPI}&base=${BASE}&symbols=${DEVISE}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        let rates = result["rates"];
        exampleChart.destroy();
        if(realChart != undefined){
            realChart.destroy();
            realChart = new Chart(myChart, {
            type: 'line',
            data: {
                labels: labels(startDate, endDate, startMonth),
                datasets: [{
                    label: `${DEVISE} : masquez moi`,
                    data: dataAccordingToDate(result, startDateAPI, endDateAPI, DEVISE),
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
        }else{
            realChart = new Chart(myChart, {
                type: 'line',
                data: {
                    labels: labels(startDate, endDate, startMonth),
                    datasets: [{
                        label: `${DEVISE} : masquez moi`,
                        data: dataAccordingToDate(result, startDateAPI, endDateAPI, DEVISE),
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
        }
    })
    .catch(error => console.log('error', error));
})
