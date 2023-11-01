//generates a todo 
import { createHTMLelement } from "./html_element_creator";
import { middle } from "./index"

function create_todo_container(middle_div){
    const todo_container = createHTMLelement('div', 'todo-container', null);
    middle_div.appendChild(todo_container);
    return document.getElementById('todo-container');
}

function create_todo(data){
    const todo_div = createHTMLelement('div', 'todo-div', null);

    const todo_title = createHTMLelement('p', 'todo-title', data.title);
    todo_div.appendChild(todo_title);

    const todo_dueDate = createHTMLelement('p', 'todo-dueDate', 'Due on: ' + data.dueDate);
    todo_div.appendChild(todo_dueDate);

    const todo_priority = createHTMLelement('p', 'todo-priority', 'Priority: ' + data.priority);
    todo_div.appendChild(todo_priority);

    const button_details = createHTMLelement('a', 'detail-button', 'Details');
    todo_div.appendChild(button_details);
    alert(data.title + ' ' + data.description + ' ' + data.dueDate + ' ' + data.priority);
    button_details.addEventListener('click', (e) => {
        alert(data.title + ' ' + data.description + ' ' + data.dueDate + ' ' + data.priority);
        if (document.getElementById('overlay-details') != null){
            document.getElementById('overlay-details').remove();
        }
        middle.appendChild(show_details(data.title, data.dueDate, data.priority, data.description));
        document.getElementById('overlay-details').classList.add('is-visible');
    });

    return todo_div;
}

function show_details(title, dueDate, priority, description){
    const overlay_details = createHTMLelement('div', 'overlay-details', null);
    overlay_details.classList.add('overlay-details');

    const wrapper = createHTMLelement('div', 'wrapper', null);
    wrapper.classList.add('wrapper');

    let todo_title = createHTMLelement('h1', 'title', title);

    const close = createHTMLelement('a', 'close', 'X');
    close.setAttribute('href', '#');
    close.addEventListener('click', () => {
        document.getElementById('overlay-details').classList.remove('is-visible');
    });

    const content = createHTMLelement('div', 'form-content', null);
    content.classList.add('form-content');

    const container = createHTMLelement('div', 'form-container', null);
    container.classList.add('form-container');

    let todo_due_date = createHTMLelement('p', 'due-date', 'Due on: ' + dueDate);
    let todo_priority = createHTMLelement('p', 'priority', 'Priority: ' + priority);
    let todo_description = createHTMLelement('p', 'description', 'Description: ' + description);

    container.appendChild(todo_due_date);
    container.appendChild(todo_priority);
    container.appendChild(todo_description);

    content.appendChild(container);

    wrapper.appendChild(todo_title);
    wrapper.appendChild(close);
    wrapper.appendChild(content);

    overlay_details.appendChild(wrapper);

    return overlay_details;
}

export { create_todo, create_todo_container, show_details }