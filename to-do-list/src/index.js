import { render_header } from "./header.js";
import { create_todo, create_todo_container } from "./generate_todo.js"
import { create_todo_object } from "./create_todo.js"
import { render_middle_div } from "./middle.js";
import { form } from "./form.js";
import { render_sidebar_div } from "./sidebar.js";
import { projects } from "./create_project.js";
import { createHTMLelement } from "./html_element_creator.js";
import { project_form } from "./project_form.js";
import './style.css';

const container = document.getElementById("container");
const todo_form = form();
const project_creator = project_form();
render_header();
const middle = render_middle_div();
middle.appendChild(todo_form);
middle.appendChild(project_creator);
const todo_container = create_todo_container(middle);
const projects_container = render_sidebar_div();
middle.appendChild(projects_container);
middle.appendChild(todo_container);
const project_div = document.getElementById('project-div');
//current_project is equal to the projects index inside of the project_array
let current_project = null;

//below has created a project and added a todo to it and then rendered it to todo_container
//it is functional but now -> display projects, allow user to create projects and allow user to swap between projects
projects.create_project('Default');
projects.project_array[0].todos.push(create_todo_object('Implement Projects', 'ITS WORKING', 'dueDate', 'priority'));
project_div.appendChild(createHTMLelement('p', 'project-element', projects.project_array[0].title))
projects.create_project('test');
projects.project_array[1].todos.push(create_todo_object('Test', 'Test', 'Test', 'Test'));
projects.project_array[1].todos.push(create_todo_object('Test', 'Test', 'Test', 'Test'));
projects.project_array[1].todos.push(create_todo_object('Test', 'Test', 'Test', 'Test'));
project_div.appendChild(createHTMLelement('p', 'project-element', projects.project_array[1].title))

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
        const index = current_project.id - 1;
        projects.addTodo(index, create_todo_object(title, description, dueDate, priority));
        todo_container.appendChild(create_todo(create_todo_object(title, description, dueDate, priority)));
    }
});

project_creator.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById('project-title').value;
    if (title == ''){
        alert('Please fill in all the fields');
    }
    else{
        projects.create_project(title);
        project_div.appendChild(createHTMLelement('p', 'project-element', title));
        //project_index.push([{title : index}])
    }
});

//removes the previous selection of to-dos
function removePreviousSelection(){
    let todos = document.getElementById("todo-container");
    let child = todos.lastElementChild;
    while (child){
        todos.removeChild(child);
        child = todos.lastElementChild;
    }
}

//when clicking on project it then finds the project with the same name in projects_array and logs is to-dos
project_div.addEventListener('click', (e) => {
    let project_title = e.target.innerText;
    projects.project_array.forEach((project) => {
        if (project.title === project_title){
            current_project = project;
            display_todos(project);
        }
    })
});

function display_todos(project){
    removePreviousSelection();
    project.todos.forEach((todo) => {
        todo_container.appendChild(create_todo(todo));
    })
}

//render_footer_div
todo_container.appendChild(create_todo(create_todo_object('Implement Projects', 'Have a general project that is automatically selected, but have the ability to add projects by clicking a button -> prompted to give project a name and it should appear on the side bar -> clicking on the project makes it active so any new to-dos are added to that project until you swap to another that is, you should associate to-dos with the project that was active during the time they were created', 'dueDate', 'priority')));
export { container, current_project }