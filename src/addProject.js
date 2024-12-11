const addProjectbtn = document.querySelector("#addProject");
const dialog = document.querySelector("#projectDialog");
const submit = document.querySelector("#pDialogSubmit");
const pTextBox = document.querySelector("#projectNameInput")

function createProject(){

    dialog.showModal();
    dialog.style.display = "flex";

    let pName = "";

    submit.addEventListener('click',()=>{

        event.preventDefault();

        pName = pTextBox.value;
        console.log(pName);

        
        dialog.style.display = "none";

        
    })

    


    function project(projectName){
        this.projectName = projectName;
        this.tasks = []
    }

    let newProject = new project(pName);
    return newProject;



}

export {createProject};




