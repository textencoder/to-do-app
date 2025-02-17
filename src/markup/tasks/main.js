import { projectArr } from "../../logic/create";
import { priorityObj } from "../modules/priorityObj.js"

const buildTaskMain = (index, task) => {
    const taskMain = document.createElement('main');
    taskMain.id = "task-main";
  
    document.querySelector('#app').append(taskMain);

    buildTaskInfo(index, task);
  }   

  const buildTaskInfo = (index, task) => {
    const taskInfo = document.createElement('section');
    taskInfo.classList.add('task-info');
  
    const taskDescLabel = document.createElement('label');
    const taskDesc = document.createElement('p');
    const priorityLabel = document.createElement('label');
    const priority = document.createElement('div');
    const dueDateLabel = document.createElement('label');
    const dueDate = document.createElement('h4');

    priority.classList.add('priority');
    priority.style.color = priorityObj[projectArr[index].toDoList[task].priority];
    
    taskDescLabel.textContent = 'Description';
    taskDesc.textContent = projectArr[index].toDoList[task].description;
    priorityLabel.textContent = "Priority";
    priority.textContent = '•' + projectArr[index].toDoList[task].priority;
    dueDateLabel.textContent = "Due Date"
    dueDate.textContent = projectArr[index].toDoList[task].dueDate;
  
    taskInfo.append(taskDescLabel, taskDesc, priorityLabel, priority, dueDateLabel, dueDate)

    document.querySelector('#task-main').append(taskInfo);
  }
  
  
  export default buildTaskMain;