import './style.css'
import { project1 } from './project'

document.querySelector('#app').innerHTML = `
  <div>
    ${project1.title}
  </div>
  <div>
    ${project1.todos}
  </div>
`