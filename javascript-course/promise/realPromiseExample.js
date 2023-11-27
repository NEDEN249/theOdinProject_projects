function fetchData() {
    return new Promise(function(resolve, reject) {
        fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[1].shortForecast));
            //.then(data => reject());
    })
}

function displayData(weatherData){
    console.log(weatherData)
}

function onError(errorCode){
    console.log(`Error: ${errorCode}`)
}

fetchData()
    .then(displayData)
    .catch(onError)
