import { projects } from "./create_project.js";
//takes in the users todo data and generates an object containing the data 
function create_todo_object(title, description, dueDate, priority, current_project_id){
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    }
}

export { create_todo_object }