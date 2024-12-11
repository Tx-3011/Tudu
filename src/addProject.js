const addProjectbtn = document.querySelector("#addProject");
const dialog = document.querySelector("#projectDialog");
const submit = document.querySelector("#pDialogSubmit");
const pTextBox = document.querySelector("#projectNameInput")

import { projectArray,renderProjects } from "./renderAndProjectArray";

function createProject(){

    function projectCreation(){

        event.preventDefault();
    
        pName = pTextBox.value;
        console.log(pName);
        dialog.close();
        
        // dialog.style.display = "none";
    
        let newProject = new project(pName);
        projectArray.push(newProject);
    
        console.log(projectArray);

        renderProjects();

        submit.removeEventListener('click',projectCreation)

    }    

    dialog.showModal();
    // dialog.style.display = "flex";

    let pName = "";

    submit.addEventListener('click',projectCreation)

    function project(projectName){
        this.projectName = projectName;
        this.tasks = []
    }
    

}

export {createProject};




