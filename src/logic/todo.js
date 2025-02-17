export default class ToDo {
    constructor(title, description, dueDate, priority, status) {
        this.title = title; // expects string
        this.description = description; // expects string
        this.dueDate = dueDate; //expects formatted date
        this.priority = priority; //low, medium, high
        this.status = status; //in progress, completed
    }
}