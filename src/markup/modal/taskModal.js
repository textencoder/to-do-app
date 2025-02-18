import { projectArr, addToDo, setStorage } from "../../logic/create";
import buildProjectPage from "../../builds/buildProject";

const taskModal = (index) => {
    const dialog = document.createElement('dialog');
    dialog.classList.add('task-modal')

    const header = document.createElement('h3');
    header.textContent = 'New Task'

    const taskName = document.createElement('input');
    taskName.type = 'text'
    taskName.placeholder = 'Task Name...';
    taskName.required = true;
    taskName.autofocus = true;
    taskName.minLength = '1';
    taskName.maxLength = '20';

    const taskDesc = document.createElement('textarea');
    taskDesc.placeholder = "Task description..."
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:'
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Set Priority:'
    const priority = document.createElement('select');
    const highPriority = document.createElement('option');
    const mediumPriority = document.createElement('option');
    const lowPriority = document.createElement('option');
    highPriority.textContent = 'high'
    mediumPriority.textContent = 'medium'
    lowPriority.textContent = 'low'
    priority.append(highPriority, mediumPriority, lowPriority);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn')
    submitBtn.textContent = 'Submit';
    submitBtn.type = 'submit';

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn')
    closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`

    dialog.append(header, taskName, taskDesc, dueDateLabel, dueDate, priorityLabel, priority, submitBtn, closeBtn)

    document.querySelector('#app').append(dialog);

    closeBtn.addEventListener('click', () => {
        dialog.remove();
    })

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //console.log(taskName.value)
        addToDo(index, taskName.value, taskDesc.value, dueDate.value, priority.value, 'In Progress');
        setStorage()
        //dialog.close(taskName.value);
        dialog.remove();
        console.log("task name: ", taskName.value);
        console.log("description: ", taskDesc.value);
        console.log("due date: ", dueDate.value);
        console.log("priority: ", priority.value);
        
        document.querySelector('#app').innerHTML = '';
        buildProjectPage(index);
        /*
        for (let [index, task] of projectArr.toDoList.entries()) {
            if (task.title == taskName.value) {
                document.querySelector('#app').innerHTML = ''
                buildProjectPage(index)
            }
        }
            */
    })

    dialog.showModal();
}

export default taskModal;