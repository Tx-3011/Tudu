import "./styles.css"
import { createProject } from "./addProject";

const projectStack = document.querySelector("#projectStack");
const taskStack = document.querySelector("#taskStack");
const addProjectbtn = document.querySelector("#addProject")
const addTaskbtn = document.querySelector("#addTask")

const projectArray = [];

const dialog = document.querySelector("#projectDialog");


addProjectbtn.addEventListener("click",()=>{
    let project = createProject();
    projectArray.push(project);

    renderProjects();
})

function renderProjects(){
    projectArray.forEach((p) =>{
        let pTile = document.createElement("div");
        pTile.className = "project";
        pTile.textContent = p.projectName;

        projectStack.append(pTile);
    })
}


