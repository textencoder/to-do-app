import buildHomeHeader from '../markup/home/header.js';
import buildHomeMain from '../markup/home/main.js';
import buildHomeFooter from '../markup/home/footer.js';
import buildProjectPage from './buildProject.js';

import projectModal from '../markup/modal/projectModal.js';

let globalState = '';

export default function buildHomePage() {
    buildHomeHeader();
    buildHomeMain();
    buildHomeFooter();

    document.querySelector('#home-footer button').addEventListener('click', () => {
        //document.querySelector('#app').innerHTML = '';
        projectModal();
    })

    document.querySelectorAll('.project-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            document.querySelector('#app').innerHTML = '';
            globalState = Number(tile.dataset.label);
            buildProjectPage(globalState);
    })
    })
}