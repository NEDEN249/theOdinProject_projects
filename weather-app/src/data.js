import { displayCurrentLocationData, displayCurrentWeatherData, displayForecastWeatherData, displayCurrentHourlyData } from "./displayWeatherData";
import { create_current_weather_object, create_forecast_weather_object, createHourlyWeatherObject } from "./weatherObject";
import { container, currentDataContainer, forecastDataContainer, currentHourDataContainer } from "./index";

//contains the data for the weather conditions at the given time
let currentData = [];
//contains the data conditions as a whole for the current day and the next 2 days
let forecastData = [];
//contains the data conditions as a whole for each hour of the current day 
let currentHourData = [];

//asynchronous function that fetches the weather data from the weather api
async function getWeatherData(location) {
    //insert loading screen here
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=baa070e815f843288da152813232111&q=${location}&days=3&aqi=yes`, {mode: 'cors'})
    const data = await response.json();
    //remove loading screen here
    // forecastData.push([data.location.name, data.location.region]);
    currentData.push([data.location.name, data.location.region]);
    extractCurrentWeatherData(data.current);
    extractForecastWeatherData(data.forecast);
    extractHourlyWeatherData(data.forecast);
    //console.log(data.forecast);
    displayCurrentLocationData(currentData, currentDataContainer);
    displayCurrentWeatherData(currentData, currentDataContainer);
    displayForecastWeatherData(forecastData, forecastDataContainer);
    displayCurrentHourlyData(currentHourData, currentHourDataContainer);
}

//extracts the current weather data from the json file and stores it in the currentData array
function extractCurrentWeatherData(data){
    const temperature = data.temp_c;
    const uv = data.uv;
    const windSpeed = data.wind_kph;
    const windDirection = data.wind_dir;
    const condition = data.condition.text;
    const feelsLike = data.feelslike_c;
    const humidity = data.humidity;
    const date = data.is_day;
    const icon = data.condition.icon;
    currentData.push(create_current_weather_object(temperature, uv, windSpeed, windDirection, condition, feelsLike, humidity, date, icon));
}

//extracts the hourly weather data from the json file and stores it in the currentHourData array
function extractHourlyWeatherData(data){
    const currentTime = new Date().toLocaleTimeString();
    const currentHour = parseInt(currentTime.substring(0, 2));
    for (let i = currentHour; i < data.forecastday[0].hour.length; i++){
        let weather_data = {};
        let rain = data.forecastday[0].hour[i].chance_of_rain;
        weather_data["rain"] = rain;
        let temperature = data.forecastday[0].hour[i].temp_c;
        weather_data["temperature"] = temperature;
        weather_data["time"] = i;
        currentHourData.push(weather_data);
    }
    const remainingHours = currentHour + 1;
    console.log(remainingHours);
    for (let j = 0; j < remainingHours; j++){
        let weather_data = {};
        let rain = data.forecastday[1].hour[j].chance_of_rain;
        weather_data["rain"] = rain;
        let temperature = data.forecastday[1].hour[j].temp_c;
        weather_data["temperature"] = temperature;
        weather_data["time"] = j;
        currentHourData.push(weather_data);
    }
    //console.log(currentHourData);
}

//extracts the forecast weather data from the json file and stores it in the forecastData array
function extractForecastWeatherData(data){
    // console.log(data);
    // console.log(data.forecastday[1].day)
    for (let i = 0; i < data.forecastday.length; i++){
        let minimumTemperature = data.forecastday[i].day.mintemp_c;
        let maximumTemperature = data.forecastday[i].day.maxtemp_c;
        let rain = data.forecastday[i].day.daily_chance_of_rain;
        let humidity = data.forecastday[i].day.avghumidity;
        forecastData.push(create_forecast_weather_object(minimumTemperature, maximumTemperature, rain, humidity));
    }
    //console.log(forecastData);
}

//formats the date to a more readable format
function formatDate(date){
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString("en-US", options);
}

export { forecastData, currentData, currentHourData, getWeatherData, formatDate }