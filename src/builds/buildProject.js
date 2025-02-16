import buildProjectHeader from '../markup/projects/header.js';
import buildProjectMain from '../markup/projects/main.js';
import buildProjectFooter from '../markup/projects/footer.js';

import buildHomePage from './buildHome.js';
import buildTaskPage from './buildTask.js';

export default function buildProjectPage() {
    buildProjectHeader();
    buildProjectMain();
    buildProjectFooter();

    document.querySelector('svg').addEventListener('click', () => {
        document.querySelector('#app').innerHTML = '';
        buildHomePage();
      })

      document.querySelector('#project-footer button').addEventListener('click', () => {
        document.querySelector('#app').innerHTML = '';
        buildTaskPage();
    })
}