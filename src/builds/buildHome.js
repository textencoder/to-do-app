import buildHomeHeader from '../markup/home/header.js';
import buildHomeMain from '../markup/home/main.js';
import buildHomeFooter from '../markup/home/footer.js';
import buildProjectPage from './buildProject.js';

import { projectArr } from '../logic/create.js';

export default function buildHomePage() {
    buildHomeHeader();
    buildHomeMain();
    buildHomeFooter();

    document.querySelector('#home-footer button').addEventListener('click', () => {
        document.querySelector('#app').innerHTML = '';
        buildProjectPage();
    })

    document.querySelectorAll('.project-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            document.querySelector('#app').innerHTML = '';
            buildProjectPage(tile.dataset.label);
    })
    })
}