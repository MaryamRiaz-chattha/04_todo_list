import inquirer from "inquirer";
let todos = [];
let condition = "true";
while (condition) {
    let todosQuestion = await inquirer.prompt([
        {
            name: "Question1",
            type: "input",
            message: "What would you like to add in your todos",
        },
        {
            name: "Question2",
            type: "confirm",
            message: "Anything else you need to put  in your todos",
            default: "false",
        }
    ]);
    todos.push(todosQuestion.Question1);
    console.log(todos);
    condition = todosQuestion.Question2;
}
