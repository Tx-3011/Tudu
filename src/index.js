import "./styles.css"
import { createProject } from "./addProject";
import { setProjectArray,renderProjects,renderTasks,getLocal } from "./renderAndProjectArray";
import { createTask } from "./addTask";


const projectStack = document.querySelector("#projectStack");
const taskStack = document.querySelector("#taskStack");
const addProjectbtn = document.querySelector("#addProject")
const addTaskbtn = document.querySelector("#addTask")


const dialog = document.querySelector("#projectDialog");

let isNotEmpty = getLocal();

if(!isNotEmpty){
    createProject()
    addTaskbtn.style.display = 'block'

}



addProjectbtn.addEventListener("click",()=>{
    createProject();
    addTaskbtn.style.display = 'block'
})


addTaskbtn.addEventListener('click',()=>{
    createTask();
})




