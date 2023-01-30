const myChart    = document.getElementById('myChart');
const MONTHS     = {
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

function labels(date1, date2){
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


// Ces variables sont à définir seulement au moment du clic sur bouton
const startDate  = new Date(document.getElementById('start-date').value);
const endDate    = new Date(document.getElementById('end-date').value);
const startMonth = startDate.getMonth() + 1;
const startYear  = startDate.getFullYear();
const endMonth   = endDate.getMonth() + 1;
const endYear    = endDate.getFullYear();

const lineChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: labels(startDate, endDate),
        datasets: [{
            data:[]
        }]
    }
})
