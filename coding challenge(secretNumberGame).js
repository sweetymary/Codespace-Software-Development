
//display the secretNumberGame() function

function secretNumberGame() {

    //generate a random number from  1 to 50

    const secretNumberGame = Math.floor(Math.random * 50) + 1;

    // take input from the user from their guess

    const guess = parseInt(promt("Guess the secret number(between 1 and 50):  "));

    while (true) {

        //check if the guess is higher,lower or equal to the secret number

        if (guess < secretNumber) {

            console.log("You answered  ${guess}. The correct answer is higher .");

        } else if (guess > secretNumber) {

            console.log("Your answered ${guess}. The correct answer is lower. ");

        } else {

            console.log(" You answered ${guess}. This is the correct answer .");

            break;  // Exit the loop if the guess is correct.

        }

    }

}

//  call the function

secretNumberGame();







