import { projectArr } from "../../logic/create";

const buildHomeMain = () => {
  const homeMain = document.createElement('main');
  homeMain.id = 'home-main';

  document.querySelector('#app').appendChild(homeMain);

  buildProject();
}

const buildProject = () => {
  const projectTile = document.createElement('section');
  const projectName = document.createElement('h2');
  const tasksCompleted = document.createElement('p');

  projectTile.classList.add('project-tile')

  tasksCompleted.textContent = `0/${projectArr[0].toDoList.length} tasks • 0%`
  projectName.textContent = projectArr[0].title;

  document.querySelector('#home-main').appendChild(projectTile)
  projectTile.append(tasksCompleted, projectName);
}

export default buildHomeMain;