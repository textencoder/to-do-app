export default class Project {
    constructor(title, ...toDoList) {
        this.title = title; //expects string
        this.toDoList = [...toDoList]; //expects array of strings
    }
}