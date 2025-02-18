import ToDo from "./todo.js";
import Project from "./project.js";

let projectArr = [];

function addProjectToMemory(project) {
    projectArr.push(new Project(project));
    //setStorage()
}
function addToDo(project, ...toDo) {
    projectArr[project].toDoList.push(new ToDo(...toDo));
    //setStorage()
}

function setStorage() {
    for (let project of projectArr) {
        localStorage.setItem(JSON.stringify(project.title), JSON.stringify(project.toDoList));
    }
}
/*
const project1 = "Deep Clean";
const project2 = "To Do App";
const project3 = "Go Out Today";

addProjectToMemory(project1)
addProjectToMemory(project2)
addProjectToMemory(project3)

addToDo(0, 'sweep floor', 'use swiffer to clean up debris and mop floor', new Date().toDateString(), 'high', 'In Progress'),
addToDo(0, 'wash dishes', 'rinse and run dishwasher', new Date().toDateString(), 'low', 'Completed');
addToDo(1, 'project module', 'create project class', new Date().toDateString(), 'low', 'Completed'), 
addToDo(1, 'toDo module', 'create toDo class', new Date().toDateString(), 'high', 'Completed');
addToDo(2, 'get dressed', 'its a cold world bundle up', new Date().toDateString(), 'medium', 'Completed'), 
addToDo(2, 'go to store', 'buy some goofy juice', new Date().toDateString(), 'high', 'In Progress')

addToDo(0, 'take out garbage', 'dispose of trash and replace with new bag', new Date().toDateString(), 'high', 'In Progress')
addToDo(1, 'create module', 'import classes and interconnect', new Date().toDateString(), 'medium', 'In Progress')
addToDo(2, 'help mom', 'no room for fake plants', new Date().toDateString(), 'low', 'Completed')

console.log(projectArr)
*/

export { projectArr, addProjectToMemory, addToDo, setStorage };