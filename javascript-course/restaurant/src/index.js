import { render_navbar } from './navbar';
import { render_footer } from './footer';
import { render_home } from './home';
import { render_menu } from './menu';
import './style.css';

const content = document.getElementById('content');

function createHTMLelement(type, id, content){
    const element = document.createElement(type); //creates a new element of type type 
    if (id){ //creates a new element with the id attribute if id is passed
        element.id = id;
    }
    if(content){ //adds the content to the element if content is passed
        element.innerHTML = content;
    }
    return element; //returns the element
}

function home_page()
{
    render_navbar();
    render_home();
    render_footer();
}

function menu_page(){
    render_navbar();
    render_menu();
    render_footer();
}

//home_page();
menu_page();


document.addEventListener('click', (e) => {
    const event = e.target.innerText;
    if (event === 'Home'){
        content.innerHTML = '';
        home_page();
    }
    else if (event === 'Menu'){
        content.innerHTML = '';
        menu_page();
    }
    else if (event === 'Contact'){
        content.innerHTML = '';
        render_navbar();
        render_footer();
    }
});

export { createHTMLelement, content };