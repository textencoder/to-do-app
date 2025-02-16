const buildProjectMain = () => {
  const projectMain = document.createElement('main');
  projectMain.id = "project-main";

  document.querySelector('#app').append(projectMain);

  buildTaskTile()
}   

const buildTaskTile = () => {
  const taskTile = document.createElement('section');
  taskTile.classList.add('task-tile');

  const taskName = document.createElement('h3');
  const priority = document.createElement('div');
  const dueDate = document.createElement('p');
  const moreIcon = document.createElement('div');

  taskTile.append(taskName, priority, dueDate, moreIcon)

  document.querySelector('#project-main').append(taskTile);
}

export default buildProjectMain;