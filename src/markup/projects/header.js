import buildHomePage from "../../builds/buildHome";

const buildProjectHeader = () => {
  const projectHeader = document.createElement('header');
  projectHeader.id = 'project-header';

  const projectName = document.createElement('h1');
  projectName.textContent = 'Project Name'
  projectHeader.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
        <line x1="19" y1="12" x2="5" y2="12">
        </line>
        <polyline points="12 19 5 12 12 5">
        </polyline>
        </svg>
  `

  projectHeader.appendChild(projectName);

  document.querySelector('#app').append(projectHeader);
}

export default buildProjectHeader;