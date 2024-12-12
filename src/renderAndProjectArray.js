const taskTitle = document.querySelector("#projectTitle");
let projectArray = [];
let currentProject;

function renderProjects(){

    projectStack.textContent = ``;

    projectArray.forEach((p) =>{
        let pTile = document.createElement("div");
        pTile.className = "project";
        pTile.textContent = p.projectName;

        pTile.addEventListener('click',()=>{
            taskTitle.textContent = `${p.projectName} :`
            currentProject = p;
            renderTasks();
        })

        projectStack.append(pTile);
    })
}

function renderTasks(){
    taskStack.textContent = ` `;
    (currentProject.tasks).forEach(t => {
        const newTaskDiv = document.createElement("div");
        const taskName = document.createElement("div");
        const taskStatus = document.createElement("div");

        newTaskDiv.className = "task"
        taskName.className = "taskName"
        taskStatus.className = "taskStatus"

        taskName.textContent = t.taskName;

        newTaskDiv.append(taskName);
        newTaskDiv.append(taskStatus);
        taskStack.append(newTaskDiv);
        
    });
}

export {projectArray,renderProjects,currentProject,renderTasks}