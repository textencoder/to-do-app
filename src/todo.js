class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title; // expects string
        this.description = description; // expects string
        this.dueDate = dueDate; //expects formatted date
        this.priority = priority; //low, medium, high
    }
}

const todo1 = new ToDo('sweep floor', 'use swiffer to clean up debris and mop floor', null, 'high');

console.log(todo1)