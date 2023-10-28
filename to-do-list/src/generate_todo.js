//generates a todo 
import { createHTMLelement } from "./html_element_creator";
import { middle_div } from "./middle";

function create_todo_container(middle_div){
    const todo_container = createHTMLelement('div', 'todo-container', null);
    middle_div.appendChild(todo_container);
    return document.getElementById('todo-container');
}

function create_todo(data){
    const todo_div = createHTMLelement('div', 'todo-div', null);

    const todo_title = createHTMLelement('p', 'todo-title', 'Task: ' + data.title);
    todo_div.appendChild(todo_title);

    const todo_description = createHTMLelement('p', 'todo-description', 'Desc: ' + data.description);
    todo_div.appendChild(todo_description);

    const todo_dueDate = createHTMLelement('p', 'todo-dueDate', 'Due on: ' + data.dueDate);
    todo_div.appendChild(todo_dueDate);

    const todo_priority = createHTMLelement('p', 'todo-priority', 'Priority: ' + data.priority);
    todo_div.appendChild(todo_priority);

    return todo_div;
}

export { create_todo, create_todo_container }