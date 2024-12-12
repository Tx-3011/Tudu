import { currentProject } from "./renderAndProjectArray";
import { renderTasks } from "./renderAndProjectArray";
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
    
    addTaskBtn.addEventListener('click',taskCreation)
    
}

function task(taskName){
    this.taskName = taskName;
}
export{createTask};