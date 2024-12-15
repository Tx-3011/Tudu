import { currentProject,projectArray,saveLocal } from "./renderAndProjectArray";
import { renderTasks } from "./renderAndProjectArray";
const taskInput = document.querySelector("#taskNameInput")
const addTaskBtn = document.querySelector("#taskSubmitBtn");
const dialog = document.querySelector("#taskDialog");
const taskStack = document.querySelector("#taskStack");
const cbox = document.querySelector("#priority");


function createTask(){

    if(currentProject){     
        dialog.showModal();
    }else{
        alert("Cannot create a Task without selecting a Project")
    }

    function taskCreation(){

        event.preventDefault();
        let taskName = taskInput.value;
        let newTask = new task(taskName);
        if(cbox.checked){
            newTask.priority = 1;
        }

        (currentProject.tasks).push(newTask)



        renderTasks();
        saveLocal(projectArray)

        addTaskBtn.removeEventListener('click',taskCreation);
        dialog.close();

        
    }
    
    addTaskBtn.addEventListener('click',taskCreation)
    
}

function task(taskName){
    this.taskName = taskName;
    this.status = 0;
    this.priority = 0;
}
export{createTask};