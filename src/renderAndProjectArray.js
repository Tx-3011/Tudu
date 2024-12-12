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

function setCurrentProject(p){
    currentProject = p;
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

        if(t.priority == 1){
            taskName.style.color = "#E2C807"
        }

        function renderStatus(){

            if(t.status == 0){
                taskStatus.style.backgroundColor = "#FC5130"
            }else if(t.status == 1){
                taskStatus.style.backgroundColor = "#50A563"
            }

        }

        renderStatus();

        taskStatus.addEventListener('click',()=>{

            if(t.status == 1){
                t.status = 0;
            }else if(t.status == 0){
                t.status = 1;
            }

            renderStatus();
        })

        newTaskDiv.append(taskName);
        newTaskDiv.append(taskStatus);
        taskStack.append(newTaskDiv);

        
    });
}

export {projectArray,renderProjects,currentProject,renderTasks,setCurrentProject}