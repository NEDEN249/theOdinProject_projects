import './style.css';
import { forecastData, currentData, currentHourData, getWeatherData } from './data'
import { locationForm } from './locationForm';
import { displayCurrentWeatherData } from './displayWeatherData';

getWeatherData('Perth');
const container = document.getElementById("container");
const formContainer = document.createElement('div');
formContainer.appendChild(locationForm());
container.appendChild(formContainer);
const currentDataContainer = document.createElement('div');
currentDataContainer.id = 'current-data-container';
container.appendChild(currentDataContainer);
const forecastDataContainer = document.createElement('div');
forecastDataContainer.id = 'forecast-data-container';
container.appendChild(forecastDataContainer);
const currentHourDataContainer = document.createElement('div');
currentHourDataContainer.id = 'current-hour-data-container';
container.appendChild(currentHourDataContainer);
const form = document.getElementById('location-form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     forecastData = [], currentData = [], currentHourData = [];
//     const locationInput = document.getElementById('location-input');
//     getWeatherData(locationInput.value);
//     locationInput.value = '';
//     displayCurrentWeatherData(currentHourData);
// });

export { container, currentDataContainer, forecastDataContainer, currentHourDataContainer }