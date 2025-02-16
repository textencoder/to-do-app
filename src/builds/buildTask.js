import buildTaskHeader from "../markup/tasks/header";
import buildTaskMain from "../markup/tasks/main";
import buildTaskFooter from "../markup/tasks/footer";

import buildProjectPage from "./buildProject";

export default function buildTaskPage(index, task) {
    buildTaskHeader(index, task);
    buildTaskMain();
    buildTaskFooter();

    let globalState = index;

    document.querySelector('svg').addEventListener('click', () => {
            document.querySelector('#app').innerHTML = '';
            buildProjectPage(globalState);
          })
}