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

    return { project_array, create_project, addTodo }
})();

export { projects };

