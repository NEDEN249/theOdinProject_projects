import { render_header } from "./header.js";
import { create_todo, create_todo_container } from "./generate_todo.js"
import { create_todo_object } from "./create_todo.js"
import { render_middle_div } from "./middle.js";
import { form } from "./form.js";
import './style.css';

const container = document.getElementById("container");
const todo_form = form();
render_header();
const middle = render_middle_div();
middle.appendChild(todo_form);
const todo_container = create_todo_container(middle);
middle.appendChild(todo_container);
todo_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById('todo-title').value;
    let description = document.getElementById('todo-description').value;
    let dueDate = document.getElementById('todo-dueDate').value;
    let priority = document.getElementById('todo-priority').value;
    if (title == '' || description == '' || dueDate == '' || priority == ''){
        alert('Please fill in all the fields');
    }
    else{
        todo_container.appendChild(create_todo(create_todo_object(title, description, dueDate, priority)));
        todo_form.reset();
    }
});
//render_footer_div
todo_container.appendChild(create_todo(create_todo_object('Implement Projects', 'Have a general project that is automatically selected, but have the ability to add projects by clicking a button -> prompted to give project a name and it should appear on the side bar -> clicking on the project makes it active so any new to-dos are added to that project until you swap to another that is, you should associate to-dos with the project that was active during the time they were created', 'dueDate', 'priority')));
export { container }