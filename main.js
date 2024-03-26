#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please guess a number between 1-10",
        type: "number",
        name: "userGuessedNumber",
    },
]);
console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed correct number.");
}
else {
    console.log("Oops! you guessed wrong number.");
}
if (answer.userGuessedNumber !== randomNumber) {
    console.log(`The correct answer was ${randomNumber}`);
}
