import buildTaskHeader from "../markup/tasks/header";
import buildTaskMain from "../markup/tasks/main";
import buildTaskFooter from "../markup/tasks/footer";

import buildProjectPage from "./buildProject";

export default function buildTaskPage(index) {
    buildTaskHeader(index);
    buildTaskMain();
    buildTaskFooter();

    document.querySelector('svg').addEventListener('click', () => {
            document.querySelector('#app').innerHTML = '';
            buildProjectPage();
          })
}