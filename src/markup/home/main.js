import { projectArr } from "../../logic/create";

const buildHomeMain = () => {
  const homeMain = document.createElement('main');
  homeMain.id = 'home-main';

  document.querySelector('#app').appendChild(homeMain);

  for (let i=0; i<projectArr.length; i++) {
    buildProjectTile(i);
  }
}

const buildProjectTile = (index) => {
  const projectTile = document.createElement('section');
  const projectName = document.createElement('h2');
  const tasksCompleted = document.createElement('p');
  projectTile.dataset.label = index;

  projectTile.classList.add('project-tile')

  let count = 0;
  for (const item of projectArr[index].toDoList) {
    if (item.status == 'Completed') {
      count++
    }
  }

  let percentCompleted = Number(((count / projectArr[index].toDoList.length) * 100).toFixed(0));
  if (percentCompleted == 100) {
    projectTile.style.borderColor = 'green';
    tasksCompleted.style.color = 'green';
  }
  
  tasksCompleted.textContent = `${count}/${projectArr[index].toDoList.length} tasks • ${percentCompleted}%`
  projectName.textContent = projectArr[index].title;

  projectTile.append(tasksCompleted, projectName);

  document.querySelector('#home-main').appendChild(projectTile);
}

export default buildHomeMain;