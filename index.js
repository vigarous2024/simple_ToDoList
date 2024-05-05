#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoquestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your Todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your Todos?",
            default: "true",
        }
    ]);
    todos.push(todoquestions.firstQuestion);
    console.log(todos);
    condition = todoquestions.secondQuestion;
}
