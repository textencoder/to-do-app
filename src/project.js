class Project {
    constructor(title, ...todos) {
        this.title = title; //expects string
        this.todos = [...todos]; //expects array of strings
    }
}

export const project1 = new Project("sweep floor", "wash dishes", "take out garbage");

console.log(project1)