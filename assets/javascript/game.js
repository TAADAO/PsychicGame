var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var allowedGuesses = 10;



var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text")
var allowedGuessesText = document.getElementById("allowedGuesses-text")


function psychicGame() {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    document.onkeyup = function (event) {

        var userGuess = event.key;


        if (userGuess === computerGuess) {
            wins++;
            allowedGuesses = 10;
            userGuess = "";
            computerChoiceText.textContent = "Congratulations";
            psychicGame();
        }

        else if (allowedGuesses > 0) {
            allowedGuesses--
        }
        else {
            losses++;
            allowedGuesses = 10;
            userGuess = "";
            computerChoiceText.textContent = "Your computer chose: " + computerGuess;
            psychicGame();
        }

        directionsText.textContent = "";

        allowedGuessesText.textContent = "Guesses left: " + allowedGuesses;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;

        if (allowedGuesses === 10) {
            userChoiceText.textContent = "Your Guesses so far: " + userGuess;
        }
        else {
            userChoiceText.textContent += ", " + userGuess;
        }

    }
};

psychicGame()
