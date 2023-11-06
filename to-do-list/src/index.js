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
//current_project is equal to the projects who is currently selected by the user
let current_project = null;

//create a default project
if (projects.project_array.length === 0){ //if there are no projects in the array then create a default project, else a default project must already exist
    projects.create_project('General');
    current_project = projects.project_array[0];
    project_div.appendChild(createHTMLelement('p', 'project-element', projects.project_array[0].title));
}

//TESTING

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
        const index = current_project.id-1;
        //alert(current_project.title + ' ' + current_project.id)
        projects.addTodo(index, create_todo_object(title, dueDate, priority, description));
        current_project = projects.project_array[index];
        todo_container.appendChild(create_todo(create_todo_object(title, dueDate, priority, description)));
        document.getElementById('todo-form').reset();
    }
})

project_creator.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById('project-title').value;
    if (title == ''){
        alert('Please fill in all the fields');
    }
    else{
        projects.create_project(title);
        project_div.appendChild(createHTMLelement('p', 'project-element', title));
        const del = project_div.appendChild(createHTMLelement('button', 'project-delete', '🗑️'));
        del.addEventListener('click', (e) => {
            projects.removeProject(projects.id-1);
            e.target.previousSibling.remove();
            e.target.remove();
        });
        document.getElementById('project-form').reset();
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
})

function display_todos(project){
    removePreviousSelection();
    project.todos.forEach((todo) => {
        todo_container.appendChild(create_todo(todo));
    })
}

//render_footer_div
export { container, middle, display_todos }