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

//so I think use projects.create_project(title) to create a project, this will be stored in project array
//then use projects.project_array to access the project array -> this will be used to render the sidebar
//project_array -> projects -> todos
//requires reworking of to-do's
//will need to rework later on when I add local storage
