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

// the sites images: the main icon of robot and player and red eyes signifying whose turn is current
let mainPictures = ["images/human.png", "images/humanRedEyes.png", "images/robot-face.png",
"images/robotRedEyes.png"];

// the site images: each face of the die 
let dicePictures = ["images/die1.png", "images/2.png", "images/3.png",
"images/4.png", "images/5.png", "images/6.png"
];

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
        console.log(`The player rolled a ${die}`)

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
            console.log("Player round score: " + roundScore);
        } else {
            roundScore = 0
            playerRoundScoreDisplay.innerHTML = roundScore
            console.log("Player turn over")
            computerTurn()            
        }

    console.log(playerScore + "player score");
    console.log(roundScore + "player round score");      
};

// The computer turns logic that is set by timer in computerTurn function
function loopThrough(){
    computerDie = (Math.floor(Math.random() * 6) + 1 )
    console.log(`The computer rolled a ${computerDie}`)
    if (computerDie != 1){
        console.log("1 test")
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
        console.log(computerScore + "computer score");
        console.log(roundScore + "computer round score");
        rollAgain = "no"
    } 
}
// Computers turn logic that goes to loopThrough function, then continues here to add ending score and finishes his turn
async function computerTurn(){
    rollButton.disabled = true;
    holdButton.disabled = true;
    roundScore = 0
    playerIcon.src = mainPictures[0]
    computerIcon.src = mainPictures[3]
    rollAgain = "yes"

    while (rollAgain == "yes"){
        loopThrough()
        console.log("looped")
        await new Promise(resolve => setTimeout(resolve, 2000))
    }
    
    computerScore += roundScore
    computerTotalScoreDisplay.innerHTML = computerScore
    roundScore = 0
    computerRoundScoreDisplay.innerHTML = roundScore
    console.log(computerScore + "computer score");
    console.log(roundScore + "computer round score"); 
    playerIcon.src = mainPictures[1]
    computerIcon.src = mainPictures[2]
};




//fix buttons not being disabled upon computers turn
//add read me with rules and info and screen shot and add the link to it