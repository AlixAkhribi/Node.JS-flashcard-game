var inquirer = require('inquirer');
var cardCon = require("./cardConstructors");
var questions = require("./questions");

var currentQuestionBasic = 0;
var currentQuestionCloze = 0;
var correct = 0;
var wrong = 0;


// Prom the User with the choices of Basic Cards or Cloze // 

inquirer
    .prompt({
        name: "BasicOrCloze",
        type: "list",
        message: "Would you like basic card or cloze cards",
        choices: ["basic", "cloze"]
    })
    .then(function (answer) {
        if (answer.BasicOrCloze === "basic") {
            basicCard();
        }
        else {
            clozeCard();
        }
    });


// Basic Card Option Function // 

function basicCard() {

    if (i = 0, 1 < basicCard.questions, i++)

        inquirer
            .prompt({
                type: "input",
                message: basicCard.questions[i].front[i],
                name: "userguess"
            })
            .then(function (answers) {

                // Check if the user has guessed correctly //

                if (answers.userGuess === basicCard.questions[i].back[i]) {
                    console.log('Correct!');
                    correct++
                    currentQuestionBasic++;
                } else {
                    console.log('Incorrect!');
                    wrong++;
                    currentQuestionBasic++;
                }
            })
}

if (currentQuestionBasic < basicCard.questions.length) {
    basicCard()
}
else {
    console.log('Game Over!');
    console.log('Correct Answers: ' + correct);
    console.log('Incorrect Answers: ' + wrong);
}


// Cloze Card Option Function // 

function clozeCard() {

    if (i = 0, 1 < clozeCard.questions, i++)

        inquirer
            .prompt({
                type: "input",
                message: clozeCard.questions[i].partial,
                name: "userguess"
            })
            .then(function (answers) {

                // Check if the user has guessed correctly // 

                if (answers.userGuess === bclozeCard.questions[i].cloze[i]) {
                    console.log('Correct!');
                    correct++
                    currentQuestionCloze++;
                } else {
                    console.log('Incorrect!');
                    wrong++;
                    currentQuestionCloze++;
                }
            })
}


if (currentQuestionCloze < clozeCard.questions.length) {
    clozeCard()
}
else {
    console.log('Game Over!');
    console.log('Correct Answers: ' + correct);
    console.log('Incorrect Answers: ' + wrong);
}