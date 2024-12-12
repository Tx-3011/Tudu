import "./styles.css"
import { createProject } from "./addProject";
import { projectArray,renderProjects } from "./renderAndProjectArray";
import { createTask } from "./addTask";


const projectStack = document.querySelector("#projectStack");
const taskStack = document.querySelector("#taskStack");
const addProjectbtn = document.querySelector("#addProject")
const addTaskbtn = document.querySelector("#addTask")


const dialog = document.querySelector("#projectDialog");


addProjectbtn.addEventListener("click",()=>{
    createProject();
})


addTaskbtn.addEventListener('click',()=>{
    createTask();
})




