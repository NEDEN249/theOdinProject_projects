//import statements here
import { content, createHTMLelement } from './index';


function render_navbar() {
    const nav_bar = ["Home", "Menu", "Contact"];
    const ul = document.createElement('ul');
    ul.classList.add('nav-ul');
    nav_bar.forEach((item) =>
        ul.appendChild(createHTMLelement('li', 'nav-li', item))
    );

    const nav = document.createElement('nav');
    nav.classList.add("nav-nav");
    nav.appendChild(ul);
    content.appendChild(nav);
}

export { render_navbar };