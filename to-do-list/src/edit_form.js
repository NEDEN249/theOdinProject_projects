import { createHTMLelement } from "./html_element_creator";

function edit_form(){
    const overlay = createHTMLelement('div', 'edit-form', null);
    overlay.classList.add('overlay')
    const wrapper = createHTMLelement('div', 'wrapper', null);
    wrapper.classList.add('wrapper');
    const title = createHTMLelement('h1', 'title', 'Please Fill in the To-Do details');
    const close = createHTMLelement('a', 'close', 'X');
    close.setAttribute('href', '#');
    const content = createHTMLelement('div', 'edit-form-content', null);
    content.classList.add('edit-form-content');
    const container = createHTMLelement('div', 'edit-form-container', null);
    container.classList.add('edit-form-container');
    const form = createHTMLelement('form', 'todo-edit-form', null);
    form.setAttribute('action', '');
    const title_label = createHTMLelement('label', 'title-label', 'Title');
    title_label.setAttribute('for', 'todo-title');
    const todo_title = createHTMLelement('input', 'edit-title', null);
    todo_title.setAttribute('type', 'text');
    todo_title.setAttribute('name', 'edit-title');
    const description_label = createHTMLelement('label', 'description-label', 'Description');
    description_label.setAttribute('for', 'edit-description');
    const todo_description = createHTMLelement('input', 'edit-description', null);
    todo_description.setAttribute('type', 'text');
    todo_description.setAttribute('name', 'edit-description');
    const dueDate_label = createHTMLelement('label', 'dueDate-label', 'Due Date');
    dueDate_label.setAttribute('for', 'edit-dueDate');
    const todo_dueDate = createHTMLelement('input', 'edit-dueDate', null);
    todo_dueDate.setAttribute('type', 'date');
    todo_dueDate.setAttribute('name', 'edit-dueDate');
    const priority_label = createHTMLelement('label', 'priority-label', 'Priority');
    priority_label.setAttribute('for', 'todo-priority');
    const todo_priority = createHTMLelement('select', 'edit-priority', null);
    todo_priority.setAttribute('name', 'edit-priority');
    const option1 = createHTMLelement('option', 'high', 'High');
    option1.setAttribute('value', 'high');
    const option2 = createHTMLelement('option', 'medium', 'Medium');
    option2.setAttribute('value', 'medium');
    const option3 = createHTMLelement('option', 'low', 'Low');
    option3.setAttribute('value', 'low');
    const submit = createHTMLelement('button', 'submit', 'Submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.appendChild(title_label);
    form.appendChild(todo_title);
    form.appendChild(description_label);
    form.appendChild(todo_description);
    form.appendChild(dueDate_label);
    form.appendChild(todo_dueDate);
    form.appendChild(priority_label);
    form.appendChild(todo_priority);
    todo_priority.appendChild(option1);
    todo_priority.appendChild(option2);
    todo_priority.appendChild(option3);
    form.appendChild(submit);
    container.appendChild(form);
    content.appendChild(container);
    wrapper.appendChild(title);
    wrapper.appendChild(close);
    wrapper.appendChild(content);
    overlay.appendChild(wrapper);
    return overlay;
}

export { edit_form }