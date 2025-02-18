import { projectArr } from "../../logic/create";
import { statusObj } from "../modules/statusObj";

const buildTaskFooter = (index, task) => {
    const taskFooter = document.createElement('footer');
    taskFooter.id = 'task-footer';
    const newTaskBtn = document.createElement('button');
    let taskStatus = projectArr[index].toDoList[task].status;
    newTaskBtn.innerHTML = taskStatus == 'In Progress' ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    newTaskBtn.innerHTML += taskStatus;
    newTaskBtn.style.background = statusObj[taskStatus]
  
    taskFooter.append(newTaskBtn);
  
    document.querySelector('#app').append(taskFooter);

    document.querySelector('#task-footer button').addEventListener('click', () => {
        if (taskStatus == 'In Progress') {
                projectArr[index].toDoList[task].status = 'Completed';
                document.querySelector('#task-footer').remove()
                buildTaskFooter(index, task);
                
        } else if (taskStatus == 'Completed') {
                projectArr[index].toDoList[task].status = 'In Progress';
                document.querySelector('#task-footer').remove()
                buildTaskFooter(index, task);
        }
    })
  }


  
  export default buildTaskFooter;