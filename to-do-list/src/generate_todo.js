//generates a todo 
import { createHTMLelement } from "./html_element_creator";
import { middle, display_todos } from "./index";
import { projects } from "./create_project";
import { edit_form } from "./edit_form";
import { create_todo_object } from "./create_todo";


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
    //alert(data.title + ' ' + data.description + ' ' + data.dueDate + ' ' + data.priority);
    button_details.addEventListener('click', (e) => {
        //alert(data.title + ' ' + data.description + ' ' + data.dueDate + ' ' + data.priority);
        if (document.getElementById('overlay-details') != null){
            document.getElementById('overlay-details').remove();
        }
        middle.appendChild(show_details(data.title, data.dueDate, data.priority, data.description));
        document.getElementById('overlay-details').classList.add('is-visible');
    });

    const delete_button = createHTMLelement('a', 'delete-button', 'Delete');
    todo_div.appendChild(delete_button);
    delete_button.addEventListener('click', (e) => {
        projects.project_array.forEach((project) => {
            project.todos.forEach((todo, index) => {
                if (todo.title === e.target.parentNode.childNodes[0].textContent){
                    projects.removeTodo(project.id-1, index);
                }
            });
        });
        todo_div.remove();
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

    const edit = createHTMLelement('a', 'edit-todo', 'Edit');
    edit.setAttribute('href', '#edit-form');
    edit.addEventListener('click', (e) => {
        document.getElementById('overlay-details').remove();
        projects.project_array.forEach((project) => {
            project.todos.forEach((todo, index) => {
                if (todo.title === e.target.parentNode.childNodes[0].childNodes[0].textContent){
                    const edit = edit_form();
                    middle.appendChild(edit);
                    let title = document.getElementById('edit-title');
                    let description = document.getElementById('edit-description');
                    let dueDate = document.getElementById('edit-dueDate');
                    let priority = document.getElementById('edit-priority');
                    title.value = todo.title;
                    description.value = todo.description;
                    dueDate.value = todo.dueDate;
                    priority.value = todo.priority;
                    alert(description.value);
                    edit.addEventListener('submit', (f) => {
                        f.preventDefault();
                        projects.editTodo(project.id-1, index, title.value, description.value, dueDate.value, priority.value);
                        //delete the targeted todo from the DOM
                        let todo_container = document.getElementById('todo-container');
                        todo_container.appendChild(create_todo(create_todo_object(title.value, dueDate.value, priority.value, description.value)));  
                        display_todos(project);
                    });
                }
            });
        });
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
    wrapper.appendChild(edit);
    wrapper.appendChild(content);

    overlay_details.appendChild(wrapper);

    return overlay_details;
}

export { create_todo, create_todo_container, show_details }