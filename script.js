let playerTotalScoreDisplay = document.querySelector("#playerTotalScore")
let computerTotalScoreDisplay = document.querySelector("#computerTotalScore")
let playerRoundScoreDisplay = document.querySelector("#playerRoundScoreDisplay")
let computerRoundScoreDisplay = document.querySelector("#computerRoundScoreDisplay")
let playerDiceImage = document.querySelector("#playerDiceImage")
let computerDiceImage = document.querySelector("#computerDiceImage")
let rollButton = document.querySelector("#rollDie")
let holdButton = document.querySelector("#hold")
let playerIcon = document.querySelector("#playerIcon")
let computerIcon = document.querySelector("#computerIcon")
let bottomContainer = document.querySelector(".bottomContainer")
let playAgain = document.querySelector("#playAgainContainer")
let playAgainButton = document.querySelector("#playAgainButton")
let winLose = document.querySelector("#winLose")
let questionIcon = document.querySelector(".questionIcon")
let modal = document.getElementById("myModal")
let span = document.getElementsByClassName("close")[0];


// the sites images: the main icon of robot and player and red eyes signifying whose turn is current
let mainPictures = ["images/human.png", "images/humanRedEyes.png", "images/robot-face.png",
"images/robotRedEyes.png"];

// the site images: each face of the die 
let dicePictures = ["images/die1.png", "images/2.png", "images/3.png",
"images/4.png", "images/5.png", "images/6.png"
];



// When the user clicks the button, open the modal 
questionIcon.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// listening for a click on roll die button
rollButton.addEventListener("click", playerTurn);

// listening for a click of the hold your turn button that switches to the computers turn
holdButton.addEventListener("click", function(){
    playerScore += roundScore
    playerTotalScoreDisplay.innerHTML = playerScore
    playerRoundScoreDisplay.innerHTML = 0
    computerTurn()
});


// reload page upon clicking play again button
playAgainButton.addEventListener("click", function(){
    window.location.reload();
});

playerScore = 0;
computerScore = 0;
roundScore = 0;
die = null;
rollAgain = null;


// Controls the logic when it is the player's turn
function playerTurn(){
    
        die = (Math.floor(Math.random() * 6) + 1 )
        playerDiceImage.src = dicePictures[die - 1]

        if (die != 1){
            roundScore += die
            
            if (playerScore + roundScore >= 100){
                bottomContainer.style.display = "none";
                playAgain.style.display = "block";
                playerScore += roundScore
                playerTotalScoreDisplay.innerHTML = playerScore
                winLose.innerHTML = "You win!"
            }
            playerRoundScoreDisplay.innerHTML = roundScore
        } else {
            roundScore = 0
            playerRoundScoreDisplay.innerHTML = roundScore
            computerTurn()            
        }     
};

// The computer turns logic that is set by timer in computerTurn function
function loopThrough(){
    computerDie = (Math.floor(Math.random() * 6) + 1 )
    if (computerDie != 1){
        computerDiceImage.src = dicePictures[computerDie - 1]
        roundScore += computerDie
        computerRoundScoreDisplay.innerHTML = roundScore
        if (computerScore + roundScore >= 100){
            bottomContainer.style.display = "none";
            playAgain.style.display = "block";
            winLose.innerHTML = "You Lose!"
            rollAgain = "no"
        }
    } else {
        computerDiceImage.src = dicePictures[computerDie - 1]
        roundScore = 0
        computerRoundScoreDisplay.innerHTML = roundScore
        rollAgain = "no"
    }

    if (roundScore > 14){
        rollAgain = "no"
    } 
}
// Computers turn logic that goes to loopThrough function, then continues here to add ending score and finishes his turn
async function computerTurn(){
    rollButton.style.pointerEvents = 'none';
    holdButton.style.pointerEvents = 'none';
    roundScore = 0
    playerIcon.src = mainPictures[0]
    computerIcon.src = mainPictures[3]
    rollAgain = "yes"

    while (rollAgain == "yes"){
        loopThrough()
        await new Promise(resolve => setTimeout(resolve, 2000))
    }
    
    computerScore += roundScore
    computerTotalScoreDisplay.innerHTML = computerScore
    roundScore = 0
    computerRoundScoreDisplay.innerHTML = roundScore
    playerIcon.src = mainPictures[1]
    computerIcon.src = mainPictures[2]
    rollButton.style.pointerEvents = 'auto';
    holdButton.style.pointerEvents = 'auto';
};
