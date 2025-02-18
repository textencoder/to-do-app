import buildProjectHeader from '../markup/projects/header.js';
import buildProjectMain from '../markup/projects/main.js';
import buildProjectFooter from '../markup/projects/footer.js';

import buildHomePage from './buildHome.js';
import buildTaskPage from './buildTask.js';

import taskModal from '../markup/modal/taskModal.js';

export default function buildProjectPage(index) {
    buildProjectHeader(index);
    buildProjectMain(index);
    buildProjectFooter();

    let globalState = index;
    let secondaryState = ''

    document.querySelector('svg').addEventListener('click', () => {
        document.querySelector('#app').innerHTML = '';
        buildHomePage();
      })

      document.querySelectorAll('.task-tile').forEach(tile => {
        tile.addEventListener('click', () => {
          document.querySelector('#app').innerHTML = '';
          secondaryState = Number(tile.dataset.label);
          buildTaskPage(globalState, secondaryState);
        })
      })

      document.querySelector('#project-footer button').addEventListener('click', () => {
        //document.querySelector('#app').innerHTML = '';
        taskModal(index);
    })
}