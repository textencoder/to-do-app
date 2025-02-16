import { projectArr } from "../../logic/create";

const buildTaskMain = (index, task) => {
    const taskMain = document.createElement('main');
    taskMain.id = "task-main";
  
    document.querySelector('#app').append(taskMain);

    buildTaskInfo(index, task);
  }   

  const buildTaskInfo = (index, task) => {
    const taskInfo = document.createElement('section');
    taskInfo.classList.add('task-info');
  
    const taskDesc = document.createElement('p');
    const priority = document.createElement('div');
    const dueDate = document.createElement('h4');

    taskDesc.textContent = "description: " + projectArr[index].toDoList[task].description;
    priority.textContent = "priority: " + projectArr[index].toDoList[task].priority;
    dueDate.textContent = "due date: " + projectArr[index].toDoList[task].dueDate;
  
    taskInfo.append(taskDesc, priority, dueDate)

    document.querySelector('#task-main').append(taskInfo);
  }
  
  
  export default buildTaskMain;