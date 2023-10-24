import { content, createHTMLelement } from './index';

const menu_text = {
    Matcha_Latte : {
        name: 'Matcha Latte',
        price: '$5.00',
        description: 'A delicious matcha latte made with the finest matcha powder and milk.'
    },
    Americano : {
        name: 'Americano',
        price: '$3.00',
        description: 'A classic americano made with the finest coffee beans.'
    },
    Hot_Chocolate : { 
        name: 'Hot Chocolate',
        price: '$4.00',
        description: 'A classic hot chocolate made with chocolate powder and milk.'
    },
    Cake_of_the_Day : {
        name: 'Cake of the Day',
        price: '$5.00',
        description: 'A delicious cake made by our chef. Ask a Staff Member for more details.'
    },
}

function render_menu(){
    const menu = createHTMLelement('div', 'menu-div', null);

    const menu_title = createHTMLelement('h1', 'menu-title', 'Menu');

    const matcha_div = createHTMLelement('div', 'matcha-div', null);
    const matcha_name = createHTMLelement('h2', 'matcha-name', menu_text.Matcha_Latte.name);
    const matcha_price = createHTMLelement('p', 'matcha-price', menu_text.Matcha_Latte.price);
    const matcha_description = createHTMLelement('p', 'matcha-description', menu_text.Matcha_Latte.description);
    matcha_div.appendChild(matcha_name);
    matcha_div.appendChild(matcha_price);
    matcha_div.appendChild(matcha_description);
    
    const americano_div = createHTMLelement('div', 'americano-div', null);
    const americano_name = createHTMLelement('h2', 'americano-name', menu_text.Americano.name);
    const americano_price = createHTMLelement('p', 'americano-price', menu_text.Americano.price);
    const americano_description = createHTMLelement('p', 'americano-description', menu_text.Americano.description);
    americano_div.appendChild(americano_name);
    americano_div.appendChild(americano_price);
    americano_div.appendChild(americano_description);

    const hot_chocolate_div = createHTMLelement('div', 'hot-chocolate-div', null);
    const hot_chocolate_name = createHTMLelement('h2', 'hot-chocolate-name', menu_text.Hot_Chocolate.name);
    const hot_chocolate_price = createHTMLelement('p', 'hot-chocolate-price', menu_text.Hot_Chocolate.price);
    const hot_chocolate_description = createHTMLelement('p', 'hot-chocolate-description', menu_text.Hot_Chocolate.description);
    hot_chocolate_div.appendChild(hot_chocolate_name);
    hot_chocolate_div.appendChild(hot_chocolate_price);
    hot_chocolate_div.appendChild(hot_chocolate_description);

    const cake_div = createHTMLelement('div', 'cake-div', null);
    const cake_name = createHTMLelement('h2', 'cake-name', menu_text.Cake_of_the_Day.name);
    const cake_price = createHTMLelement('p', 'cake-price', menu_text.Cake_of_the_Day.price);
    const cake_description = createHTMLelement('p', 'cake-description', menu_text.Cake_of_the_Day.description);
    cake_div.appendChild(cake_name);
    cake_div.appendChild(cake_price);
    cake_div.appendChild(cake_description);

    menu.appendChild(menu_title);
    menu.appendChild(matcha_div);
    menu.appendChild(americano_div);
    menu.appendChild(hot_chocolate_div);
    menu.appendChild(cake_div);
   
    content.appendChild(menu);

    cake_div.classList.add('menu-div');
    hot_chocolate_div.classList.add('menu-div');
    americano_div.classList.add('menu-div');
    matcha_div.classList.add('menu-div');
}

export { render_menu }