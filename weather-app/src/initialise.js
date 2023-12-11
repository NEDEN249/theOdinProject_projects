import { container, formContainer} from './index';
import { locationForm } from './locationForm';

function initialise(){
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
    const footer = document.createElement('div');
    footer.id = 'footer';
    const me = document.createElement('a');
    me.id = 'me';
    me.textContent = 'Made by: Nathan Eden';
    me.href = 'https://github.com/NEDEN249';
    footer.appendChild(me);
    container.appendChild(footer);
}