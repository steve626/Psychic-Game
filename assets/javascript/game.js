//user has to guess letters randomly picked by computer

//globals

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemain = 9;
var lettersGuessed = [];
var letterToGuess = null;

//game play

//pick random letter
var randomLetter = letters[Math.floor(Math.random) * letters.length];

//only 9 guesses per round
var updateGuessesRemain = function() {
    document.querySelector('#guesses-remain').innerHTML = "Guesses Remain: " + guessesRemain;
};

var updateLetterToGuess = function() {
    this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};
//show progress by displaying remaining guesses
var updateGuessesSoFar = function() {
    document.querySelector('#guesses-so-far').innerHTML = "Letters guessed so far: " + lettersGuessed.join(', ');

};


//game reset
var reset = function(){
    totalGuesses = 9;
    guessesRemain = 9;
    lettersGuessed = [];
    +
    updateLetterToGuess();
    updateGuessesRemain();
    updateGuessesSoFar();
}

    updateLetterToGuess();
    updateGuessesRemain();
    updateGuessesSoFar();

//user picks by keyboard onclick
document.onkeyup = function(event){
    guessesRemain--;

    // makes guess lower case
    var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();

    lettersGuessed.push(userGuess);
    updateGuessesRemain();
    updateGuessesSoFar();

    
//tally wins to #wins
        if (guessesRemain > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML =  "Wins: "+ wins;
                alert("wow, you ARE psychic! The letter was: " + letterToGuess.toUpperCase());
                reset();
            }
    //tally losses to losses
        } else if(guessesRemain == 0) {
                 losses++;
                 document.querySelector("#losses").innerHTML = "Losses: " + losses;
                 alert("sorry, maybe you aren't pyschic, try again?");
                 reset();

        }
        //document.querySelector('#game').innerHTML = html;
        };




