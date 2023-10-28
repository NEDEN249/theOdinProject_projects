//takes in the users todo data and generates an object containing the data 
function create_todo_object(title, description, dueDate, priority){
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
}

export { create_todo_object }