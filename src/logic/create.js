import ToDo from "./todo.js";
import Project from "./project.js";

let projectArr = [];

function addProjectToMemory(project) {
    projectArr.push(new Project(project));
}
function addToDo(project, ...toDo) {
    projectArr[project].toDoList.push(new ToDo(...toDo));
}

/*
const project1 = new Project("Deep Clean", 
                            new ToDo('sweep floor', 'use swiffer to clean up debris and mop floor', null, 'high', 'In Progress'),
                            new ToDo('wash dishes', 'rinse and run dishwasher', null, 'low', 'Completed'));
const project2 = new Project("To Do App",
                            new ToDo('project module', 'create project class', null, 'low', 'Completed'), 
                            new ToDo('toDo module', 'create toDo class', null, 'high', 'Completed'));

const project3 = new Project("Go Out Today",
                            new ToDo('get dressed', 'its a cold world bundle up', null, 'medium', 'Completed'), 
                            new ToDo('go to store', 'buy some goofy juice', null, 'high', 'In Progress'))

addProjectToMemory(project1)
addProjectToMemory(project2)
addProjectToMemory(project3)

addToDo(0, new ToDo('take out garbage', 'dispose of trash and replace with new bag', null, 'high', 'In Progress'))
addToDo(1, new ToDo('create module', 'import classes and interconnect', null, 'medium', 'In Progress'))
addToDo(2, new ToDo('help mom', 'no room for fake plants', null, 'low', 'Completed'))

console.log(projectArr)
*/

export { projectArr, addProjectToMemory, addToDo };