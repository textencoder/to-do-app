import './style.css';
import homeHeader from './markup/home/header.js';
import homeMain from './markup/home/main.js';
import homeFooter from './markup/home/footer.js';

import projectHeader from './markup/projects/header.js';
import projectMain from './markup/projects/main.js';
import projectFooter from './markup/projects/footer.js';


let homeTab = homeHeader + homeMain + homeFooter;
let projectTab = projectHeader + projectMain + projectFooter;

let flag = 'home';

document.querySelector('#app').innerHTML = homeTab;

window.addEventListener("DOMContentLoaded", tabSwitcher)

function tabSwitcher() {
  if (flag == 'home') {
  document.querySelector('#home-footer button').addEventListener('click', () => {
    document.querySelector('#app').innerHTML = projectTab;
    flag = 'project';
    tabSwitcher();
  });
} else if (flag == 'project') {
  document.querySelector('#project-header svg').addEventListener('click', () => {
    document.querySelector('#app').innerHTML = homeTab;
    flag = 'home';
    tabSwitcher();
  });
}
}



