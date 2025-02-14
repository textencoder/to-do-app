import ToDo from "./todo.js";
import Project from "./project.js";

let projectArr = [];

function addProjectToMemory(project) {
    projectArr.push(project);
}
function addToDo(project, toDo) {
    projectArr[project].toDoList.push(toDo);
}

const project1 = new Project("Deep Clean", 
                            new ToDo('sweep floor', 'use swiffer to clean up debris and mop floor', null, 'high'),
                            new ToDo('wash dishes', 'rinse and run dishwasher', null, 'high'));
const project2 = new Project("To Do App",
                            new ToDo('project module', 'create project class', null, 'high'), 
                            new ToDo('toDo module', 'create toDo class', null, 'high'))

addProjectToMemory(project1)
addProjectToMemory(project2)

addToDo(0, new ToDo('take out garbage', 'dispose of trash and replace with new bag', null, 'high'))

addToDo(1, new ToDo('create module', 'import classes and interconnect', null, 'high'))

console.log(projectArr)