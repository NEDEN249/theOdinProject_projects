import { createHTMLelement } from "./html_element_creator";

function project_form(){
    const overlay_project = createHTMLelement('div', 'new-project', null);
    overlay_project.classList.add('overlay-project')
    const wrapper = createHTMLelement('div', 'wrapper', null);
    wrapper.classList.add('wrapper');
    const title = createHTMLelement('h1', 'title', 'Please Fill in project details');
    const close = createHTMLelement('a', 'close', 'X');
    close.setAttribute('href', '#');
    const content = createHTMLelement('div', 'form-content', null);
    content.classList.add('form-content');
    const container = createHTMLelement('div', 'form-container', null);
    container.classList.add('form-container');
    const form = createHTMLelement('form', 'project-form', null);
    form.setAttribute('action', '');
    const title_label = createHTMLelement('label', 'title-label', 'Title');
    title_label.setAttribute('for', 'todo-title');
    const project_title = createHTMLelement('input', 'project-title', null);
    project_title.setAttribute('type', 'text');
    project_title.setAttribute('name', 'todo-title');
    const submit = createHTMLelement('button', 'submit', 'Submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.appendChild(title_label);
    form.appendChild(project_title);
    form.appendChild(submit);
    container.appendChild(form);
    content.appendChild(container);
    wrapper.appendChild(title);
    wrapper.appendChild(close);
    wrapper.appendChild(content);
    overlay_project.appendChild(wrapper);
    return overlay_project;
}

export { project_form }