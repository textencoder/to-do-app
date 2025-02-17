import { addProjectToMemory } from "../../logic/create";

const projectModal = () => {
    const dialog = document.createElement('dialog');
    dialog.classList.add('project-modal')

    const header = document.createElement('h3');
    header.textContent = 'New Project'

    const projectName = document.createElement('input');
    projectName.placeholder = 'Project Name...';
    projectName.required = true;
    projectName.autofocus = true;
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn')
    submitBtn.textContent = 'Submit';

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn')
    closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`

    dialog.append(header, projectName, submitBtn, closeBtn)

    document.querySelector('#app').append(dialog);

    closeBtn.addEventListener('click', () => {
        dialog.remove();
    })

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(projectName.value)
        //addProjectToMemory(projectName.value)
        //dialog.close(projectName.value);
        dialog.remove();
    })

    dialog.showModal();
}

export default projectModal;