import { currentProject } from "./renderAndProjectArray";
const taskInput = document.querySelector("#taskNameInput")
const addTaskBtn = document.querySelector("#taskSubmitBtn");
const dialog = document.querySelector("#taskDialog");
const taskStack = document.querySelector("#taskStack");


function createTask(){

    dialog.showModal();

    function taskCreation(){
        
        event.preventDefault();
        let taskName = taskInput.value;

        let newTask = new task(taskName);
        (currentProject.tasks).push(newTask)

        renderTasks();

        addTaskBtn.removeEventListener('click',taskCreation);
        dialog.close();
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

    
    
    
    addTaskBtn.addEventListener('click',taskCreation)
    
}

function task(taskName){
    this.taskName = taskName;
}
export{createTask};