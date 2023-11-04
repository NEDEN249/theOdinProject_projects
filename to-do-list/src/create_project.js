const projects = (() => {
    let project_array = [];
    
    class Project {
        constructor(title, id) {
            this.title = title;
            this.todos = [];
            this.id = id;
        }
    }

    function create_project(title){
        let project = new Project(title, project_array.length+1);
        project_array.push(project);
    }

    function addTodo(index, todo){
        project_array[index].todos.push(todo);
    }

    function removeTodo(project_id, index){
        //alert(project_array[project_id].todos.length);
        project_array[project_id].todos.splice(index, 1);
        //alert(project_array[project_id].todos.length);
    }

    function removeProject(project_id){
        //alert(project_array.length);
        project_array.splice(project_id, 1);
        //alert(project_array.length);
    }

    function editTodo(project_id, index, title, description, dueDate, priority){
        project_array[project_id].todos[index].title = title;
        project_array[project_id].todos[index].description = description;
        project_array[project_id].todos[index].dueDate = dueDate;
        project_array[project_id].todos[index].priority = priority;
    }

    return { project_array, create_project, addTodo, removeTodo, removeProject, editTodo }
})();

export { projects };

