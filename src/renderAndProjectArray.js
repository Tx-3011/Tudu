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
        })

        projectStack.append(pTile);
    })
}

export {projectArray,renderProjects,currentProject}