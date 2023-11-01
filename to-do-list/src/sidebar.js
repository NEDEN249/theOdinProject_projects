import { createHTMLelement } from "./html_element_creator";

function render_sidebar_div(){
    const sidebar = createHTMLelement('div', 'sidebar-div', null);
    const sidebar_title = createHTMLelement('h2', 'sidebar-title', 'Projects');
    const project_div = createHTMLelement('div', 'project-div', null);
    const add_project = createHTMLelement('a', 'add-button', '+');
    add_project.setAttribute('href', '#new-project');
    sidebar.appendChild(sidebar_title);
    sidebar.appendChild(add_project);
    sidebar.appendChild(project_div);
    return sidebar;
}

//when clicking on the project, read the name -> this is project_id -> use that to grab the correct project from project_array and proceed to loop through and display each to-do which is stored in project.todos
function display_projects(projects, project_id){

}


export { render_sidebar_div }