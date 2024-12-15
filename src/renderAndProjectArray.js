const taskTitle = document.querySelector("#projectTitle");
const addTaskbtn = document.querySelector("#addTask")
const dialog = document.querySelector("#projectDialog");


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
            addTaskbtn.style.display = 'block'
            renderTasks();
        })

        projectStack.append(pTile);
    })
}

function setCurrentProject(p){
    currentProject = p;
}

function setProjectArray(p){
    projectArray = p;
}

function renderTasks(){
    taskStack.textContent = ` `;
    (currentProject.tasks).forEach(t => {

        const fullTask = document.createElement("div");
        fullTask.className = "fullTask"

        const deleteBtn = document.createElement("div");
        deleteBtn.className = "delete"

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

            saveLocal(projectArray);

            // localStorage.setItem(saved,projectArray);
            renderStatus();
        })

        deleteBtn.addEventListener('click',()=>{
            const deleteAtIndex = (currentProject.tasks).indexOf(t);
            (currentProject.tasks).splice(deleteAtIndex,1);
            renderTasks()
            saveLocal(projectArray);

        })

        newTaskDiv.append(taskName);
        newTaskDiv.append(taskStatus);

        fullTask.append(newTaskDiv);
        fullTask.append(deleteBtn);

        taskStack.append(fullTask);

        
    });
}

function saveLocal(projectArray){
    localStorage.setItem('saved',JSON.stringify(projectArray));
}

function getLocal(){
    if(localStorage.getItem('saved')){
        projectArray = JSON.parse(localStorage.getItem('saved'))
        renderProjects();
        return true
    }else{
        return false
    }
}

export {projectArray,renderProjects,currentProject,renderTasks,setCurrentProject,saveLocal,getLocal,setProjectArray}