import { projectArr } from "../../logic/create";
import { priorityObj } from "../modules/priorityObj.js";

const buildProjectMain = (index) => {
  const projectMain = document.createElement('main');
  projectMain.id = "project-main";

  document.querySelector('#app').append(projectMain);

  if (index == null) {
    return;
  } else {
    for (let i=0;i<projectArr.length;i++) {
      buildTaskTile(index, i)
    }
  }
  
}   

const buildTaskTile = (index, item) => {
  const taskTile = document.createElement('section');
  taskTile.classList.add('task-tile');
  taskTile.dataset.label = item;

  const taskName = document.createElement('h3');
  const priority = document.createElement('div');
  const dueDate = document.createElement('p');
  const moreIcon = document.createElement('div');

  priority.classList.add('priority');

  taskName.textContent = projectArr[index].toDoList[item].title;
  priority.textContent = '•';
  priority.style.color = priorityObj[projectArr[index].toDoList[item].priority];
  dueDate.textContent = projectArr[index].toDoList[item].dueDate;
  moreIcon.textContent = '>'

  taskTile.append(taskName, priority, dueDate, moreIcon)

  document.querySelector('#project-main').append(taskTile);
}

export default buildProjectMain;