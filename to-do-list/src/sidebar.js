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

export { render_sidebar_div }