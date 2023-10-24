import { content, createHTMLelement } from './index';

const home_text = {
    title : '^ Koffee Cat Cafe ^',
    intro : 'Welcome to Koffee Cat Cafe! We are a cafe that serves coffee with feline companionship. Come and vibe with us if you love cats!',
    location: '127 Neo Zone, Seoul, South Korea', 
    opening_hours: ['Sunday: 10am - 5pm', 'Monday: 8am - 8pm', 'Tuesday: 8am - 8pm', 'Wednesday: 8am - 8pm', 'Thursday: 10am - 10pm', 'Friday: 8am - 8pm' , 'Saturday: 10am - 5pm']
};

function render_home(){
    const home = createHTMLelement('div', 'home', null);

    const home_title = createHTMLelement('h1', 'home-title', home_text.title);

    const home_intro_div = createHTMLelement('div', 'home-intro-div', null);
    const home_intro = createHTMLelement('p', 'home-intro', home_text.intro);
    home_intro_div.appendChild(home_intro);

    const home_opening_hours_div = createHTMLelement('div', 'home-opening-hours-div', null);
    const home_opening_hours_title = createHTMLelement('h2', 'home-opening-opening-hours-title', 'Opening Hours');
    home_opening_hours_div.appendChild(home_opening_hours_title);
    for(let i = 0; i < home_text.opening_hours.length; i++){
        const home_opening_hours = createHTMLelement('p', 'home-opening-hours', home_text.opening_hours[i]);
        home_opening_hours_div.appendChild(home_opening_hours);
    }

    const home_location_div = createHTMLelement('div', 'home-location-div', null);
    const home_location = createHTMLelement('p', 'home-location', home_text.location);
    const home_location_title = createHTMLelement('h2', 'home-location-title', 'Location');
    home_location_div.appendChild(home_location_title);
    home_location_div.appendChild(home_location);

    home.appendChild(home_title);
    home.appendChild(home_intro_div);
    home.appendChild(home_opening_hours_div);
    home.appendChild(home_location_div);
    
    content.appendChild(home);
}

export { render_home };