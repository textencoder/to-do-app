import { projectArr } from "../../logic/create";

const buildTaskHeader = (index, task) => {
    const taskHeader = document.createElement('header');
    taskHeader.id = 'task-header';
  
    const taskName = document.createElement('h1');
    taskName.textContent = projectArr[index].toDoList[task].title;
    taskHeader.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
          <line x1="19" y1="12" x2="5" y2="12">
          </line>
          <polyline points="12 19 5 12 12 5">
          </polyline>
          </svg>
    `
  
    taskHeader.appendChild(taskName);
  
    document.querySelector('#app').append(taskHeader);
  }
  
  export default buildTaskHeader;