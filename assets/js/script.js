
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function (){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});



// to run game
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame (gameType) {


     // Creates two random numbers between 1 and 25

    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    if (gameType === "addition") {
        displayAdditionQuestion(num1,num2);
    }else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
    
}


// to check user's answer

function checkAnswer () {}

/* to perform the calculation and return the correct answer and 
the game type to check answer */

function calculateCorrectAnswer () {}

/*
to increment the score if the answer is correct */

function incrementScore() {}

// to increment the score if the answer is wrong

function incrementWrongAnswer() {}

/* to display the questions as we are creating four questions */

function displayAdditionQuestion(operand1 , operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(){}

function displayMultiplyQuestion(){}
