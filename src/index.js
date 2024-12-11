import "./styles.css"
import { createProject } from "./addProject";
import { projectArray,renderProjects } from "./renderAndProjectArray";


const projectStack = document.querySelector("#projectStack");
const taskStack = document.querySelector("#taskStack");
const addProjectbtn = document.querySelector("#addProject")
const addTaskbtn = document.querySelector("#addTask")


const dialog = document.querySelector("#projectDialog");





addProjectbtn.addEventListener("click",()=>{
    createProject();
})





