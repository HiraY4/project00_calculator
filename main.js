#!/usr/bin/env node
import inquirer from "inquirer";
import showBanner from "node-banner";
import gradient from "gradient-string";
import chalk from "chalk";
import { add, subtract, multiply, divide } from "./functions.js";
let answers = [
    {
        name: "number1",
        type: "number",
        message: chalk.blue("please add a number: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "please enter a number:";
            }
            return true;
        }
    },
    {
        name: "number2",
        type: "number",
        message: chalk.blue("please add a number: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "enter a number please:";
            }
            return true;
        }
    },
    {
        name: "Operator",
        type: "list",
        choices: ["+", "-", "*", "/", "^"],
        message: chalk.white("select operator:"),
    }
];
let answer = [
    {
        name: "again",
        type: "confirm",
        message: "Would you like to use the calculator again? "
    }
];
(async () => {
    await showBanner('The Calculator', 'it is used for multiple calculations!!', 'red', 'blue');
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { number1, number2, Operator } = await inquirer.prompt(answers);
        if (Operator === "+") {
            console.log(gradient.rainbow(`the result is ` + add(number1, number2)));
        }
        else if (Operator === "-") {
            console.log(gradient.rainbow(`the result is ` + subtract(number1, number2)));
        }
        else if (Operator === "*") {
            console.log(gradient.rainbow(`the result is ` + multiply(number1, number2)));
        }
        else if (Operator === "/") {
            console.log(gradient.rainbow(`the result is ` + divide(number1, number2)));
        }
        else if (Operator === "^") {
            console.log(gradient.rainbow(`the result is ` + Math.pow(number1, number2)));
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
setTimeout(() => {
    calculator();
}, 500);
