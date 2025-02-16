const buildTaskMain = () => {
    const taskMain = document.createElement('main');
    taskMain.id = "task-main";
  
    document.querySelector('#app').append(taskMain);

    //buildTaskTile();
  }   

  /*
  const buildTaskTile = () => {
    const taskTile = document.createElement('section');
    taskTile.classList.add('task-tile');
  
    const taskName = document.createElement('h3');
    const priority = document.createElement('div');
    const dueDate = document.createElement('p');
    const moreIcon = document.createElement('div');
  
    taskTile.append(taskName, priority, dueDate, moreIcon)

    document.querySelector('#task-main').append(taskTile);
  }
    */
  
  export default buildTaskMain;