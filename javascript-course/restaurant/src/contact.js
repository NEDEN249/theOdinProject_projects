import { content, createHTMLelement } from './index';

const contact_details = {
    name: 'Koffee Cat Cafe',
    email: 'thisEmailIsNottPawsible@cat.com',
    phone_number: '123456789',
    address: '127 Neo Zone, Seoul, South Korea'
}

function render_contact(){
    const contact_div = createHTMLelement('div', 'contact-div', null);
    
    const contact_title = createHTMLelement('h1', 'contact-title', '^ Contact Us ^');

    const contact_details_div = createHTMLelement('div', 'contact-details-div', null);
    const contact_details_name = createHTMLelement('p', 'contact-details-name', contact_details.name);
    const contact_details_email = createHTMLelement('p', 'contact-details-email', contact_details.email);
    const contact_details_phone_number = createHTMLelement('p', 'contact-details-phone-number', contact_details.phone_number);
    const contact_details_address = createHTMLelement('p', 'contact-details-address', contact_details.address);
    contact_details_div.appendChild(contact_details_name);
    contact_details_div.appendChild(contact_details_email);
    contact_details_div.appendChild(contact_details_phone_number);
    contact_details_div.appendChild(contact_details_address);
    
    contact_div.appendChild(contact_title);
    contact_div.appendChild(contact_details_div);
    content.appendChild(contact_div);

    contact_title.classList.add('title');
}

export { render_contact };