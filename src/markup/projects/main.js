import { projectArr } from "../../logic/create";
import { priorityObj } from "../modules/priorityObj.js";
import { statusObj } from "../modules/statusObj.js";

const buildProjectMain = (index) => {
  const projectMain = document.createElement("main");
  projectMain.id = "project-main";

  document.querySelector("#app").append(projectMain);

  if (index == null || projectArr[index].toDoList.length == 0) {
    return;
  } else {
    for (let i = 0; i < projectArr.length; i++) {
      buildTaskTile(index, i);
    }
  }
};

const buildTaskTile = (index, item) => {
  const taskTile = document.createElement("section");
  taskTile.classList.add("task-tile");
  taskTile.dataset.label = item;

  const taskName = document.createElement("h3");
  //const priority = document.createElement('div');
  const statusContainer = document.createElement("div");
  const dueDate = document.createElement("p");
  const moreIcon = document.createElement("div");

  statusContainer.classList.add("status");
  //priority.classList.add('priority');

  taskName.textContent = projectArr[index].toDoList[item].title;
  statusContainer.innerHTML =
    projectArr[index].toDoList[item].status == "In Progress"
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  //priority.textContent = '•';
  //priority.style.color = priorityObj[projectArr[index].toDoList[item].priority];
  dueDate.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>` + projectArr[index].toDoList[item].dueDate;
  moreIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

  taskTile.style.borderColor = projectArr[index].toDoList[item].status == "In Progress" ? 'gold'
  : 'green';

  taskTile.append(taskName, statusContainer, dueDate, moreIcon);

  document.querySelector("#project-main").append(taskTile);
};

export default buildProjectMain;
