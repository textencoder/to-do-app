const buildHomeFooter = () => {
  const homeFooter = document.createElement('footer');
  homeFooter.id = 'home-footer';

  const newProjectBtn = document.createElement('button');
  newProjectBtn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          New Project
  `

  homeFooter.appendChild(newProjectBtn)
  document.querySelector('#app').appendChild(homeFooter)
}

export default buildHomeFooter;