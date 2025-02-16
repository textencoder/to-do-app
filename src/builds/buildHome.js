import buildHomeHeader from '../markup/home/header.js';
import buildHomeMain from '../markup/home/main.js';
import buildHomeFooter from '../markup/home/footer.js';
import buildProjectPage from './buildProject.js';

export default function buildHomePage() {
    buildHomeHeader();
    buildHomeMain();
    buildHomeFooter();

    document.querySelector('#home-footer button').addEventListener('click', () => {
        document.querySelector('#app').innerHTML = '';
        buildProjectPage();
    })
}