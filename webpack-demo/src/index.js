import _ from 'lodash';
import myName from './myName';

function component(){
    const element = document.createElement('div');
    //lodash, now important by this script below 
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName('Cody');

    return element;
}

document.body.appendChild(component());