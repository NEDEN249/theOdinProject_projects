import { formatDate } from "./data";

function displayCurrentLocationData(currentData, container){
    const currentContainer = document.createElement('div');
    currentContainer.id = 'current-location-container';
    const location = document.createElement('h2');
    location.id = 'location';
    location.textContent = currentData[0][0] + ', ' + currentData[0][1];
    const date = document.createElement('h3');
    date.id = 'date';
    date.textContent = formatDate(new Date());
    currentContainer.appendChild(location);
    currentContainer.appendChild(date);
    container.appendChild(currentContainer);
}

function displayCurrentWeatherData(currentData, container){
    console.log(currentData);
    const currentDetailsContainer = document.createElement('div');
    currentDetailsContainer.id = 'current-details-weather-container';
    const currentTemperatureContainer = document.createElement('div');
    currentTemperatureContainer.id = 'current-temperature-container';
    const temperature = document.createElement('h3');
    temperature.id = 'current-temperature';
    temperature.textContent = currentData[1].temperature + '°';
    const condition = document.createElement('h3');
    condition.id = 'condition';
    condition.textContent = currentData[1].condition;
    const feelsLike = document.createElement('h3');
    feelsLike.id = 'feels-like';
    feelsLike.textContent = 'Feels like: ' + currentData[1].feelslike + '°';
    const humidity = document.createElement('h3');
    humidity.id = 'humidity';
    humidity.textContent = 'Humidity: ' + currentData[1].humidity + '%';
    const windSpeed = document.createElement('h3');
    windSpeed.id = 'wind-speed';
    windSpeed.textContent = 'Wind speed: ' + currentData[1].windSp + ' km/h';
    const windDirection = document.createElement('h3');
    windDirection.id = 'wind-direction';
    windDirection.textContent = 'Wind direction: ' + currentData[1].windDir;
    const uv = document.createElement('h3');
    uv.id = 'uv';
    uv.textContent = 'UV Index: ' + currentData[1].uv;
    currentTemperatureContainer.appendChild(temperature);
    currentTemperatureContainer.appendChild(condition);
    currentDetailsContainer.appendChild(feelsLike);
    currentDetailsContainer.appendChild(humidity);
    currentDetailsContainer.appendChild(windSpeed);
    currentDetailsContainer.appendChild(windDirection);
    currentDetailsContainer.appendChild(uv);
    container.appendChild(currentTemperatureContainer);
    container.appendChild(currentDetailsContainer);
}

function displayForecastWeatherData(forecastData, container){
    console.log(forecastData);
    const forecastContainer = document.createElement('div');
    forecastContainer.id = 'forecast-weather-container';
    const today = new Date();
    const nextTwoDays = new Date(today.setDate(today.getDate() + 2));
    let day = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday', 
        5: 'Friday',
        6: 'Saturday'
    }
    day = day[nextTwoDays.getDay()];
    let forecastDays = ['Today', 'Tomorrow', day];
    for (let i = 0; i < forecastData.length; i++){
        const forecastDay = document.createElement('div');
        forecastDay.id = 'forecast-day';
        const date = document.createElement('h3');
        date.id = 'forecast-date';
        date.textContent = forecastDays[i];
        const minimumTemperature = document.createElement('h3');
        minimumTemperature.id = 'minimum-temperature';
        minimumTemperature.textContent = 'Min: ' + forecastData[i].minTemp + '°';
        const maximumTemperature = document.createElement('h3');
        maximumTemperature.id = 'maximum-temperature';
        maximumTemperature.textContent = 'Max: ' + forecastData[i].maxTemp + '°';
        const rain = document.createElement('h3');
        rain.id = 'rain';
        rain.textContent = 'Rain: ' + forecastData[i].rain + '%';
        const humidity = document.createElement('h3');
        humidity.id = 'humidity';
        humidity.textContent = 'Humidity: ' + forecastData[i].humidity+ '%';
        forecastDay.appendChild(date);
        forecastDay.appendChild(minimumTemperature);
        forecastDay.appendChild(maximumTemperature);
        forecastDay.appendChild(rain);
        //forecastDay.appendChild(humidity);
        forecastContainer.appendChild(forecastDay);
    }
    container.appendChild(forecastContainer);
}

function displayCurrentHourlyData(currentHourData, container){
    console.log(currentHourData);
    const hourlyContainer = document.createElement('div');
    hourlyContainer.id = 'hourly-weather-container';
    for (let i = 0; i < currentHourData.length; i++){
        const hourly = document.createElement('div');
        hourly.id = 'hourly';
        const time = document.createElement('h3');
        time.id = 'time';
        time.textContent = currentHourData[i].time + ':00';
        const rain = document.createElement('h3');
        rain.id = 'rain';
        rain.textContent = 'Rain: ' + currentHourData[i].rain + '%';
        const temperature = document.createElement('h3');
        temperature.id = 'temperature';
        temperature.textContent = currentHourData[i].temperature + '°';
        hourly.appendChild(time);
        hourly.appendChild(rain);
        hourly.appendChild(temperature);
        hourlyContainer.appendChild(hourly);
    }
    container.appendChild(hourlyContainer);
}

export { displayCurrentLocationData, displayCurrentWeatherData, displayForecastWeatherData, displayCurrentHourlyData }