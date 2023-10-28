import { createHTMLelement } from "./html_element_creator";
import { container } from "./index";

function render_middle_div(){
    const middle_div = createHTMLelement('div', 'middle-div', null);
    const button_div = createHTMLelement('div', 'button-div', null);
    const add_button = createHTMLelement('a', 'add-button', '+');
    add_button.setAttribute('href', '#new-form');
    button_div.appendChild(add_button);
    middle_div.appendChild(button_div);
    container.appendChild(middle_div);
    return document.getElementById('middle-div');
}

export { render_middle_div }