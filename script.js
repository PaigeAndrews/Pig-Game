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
let mainPictures = ["images/human.png", "images/human3.png", "images/robot-face-6-1074719.png",
"images/robot3.png"];

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


// Controls the logic when it is the player's turn
function computerTurn(){
    rollButton.disabled = true;
    holdButton.disabled = true;
    roundScore = 0
    playerIcon.src = mainPictures[0]
    computerIcon.src = mainPictures[3]
    rollAgain = "yes"

    while (rollAgain == "yes"){

        function pause(milliseconds) {
            var dt = new Date();
            while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
        }

       
        computerDie = (Math.floor(Math.random() * 6) + 1 )
        setTimeout(function() {
            computerDiceImage.src = dicePictures[computerDie - 1]
      }, 2000);
        
      pause(3000);
        console.log(`The computer rolled a ${computerDie}`)
        
        if (computerDie != 1){
            
            setTimeout(function() {
                computerDiceImage.src = dicePictures[computerDie - 1]
          }, 2000);
          pause(3000);

                roundScore += computerDie
            computerRoundScoreDisplay.innerHTML = roundScore
            if (computerScore + roundScore >= 100){
                bottomContainer.style.display = "none";
                playAgain.style.display = "block";
                winLose.innerHTML = "You Lose!"
                //    break
                rollAgain = "no"
            }
          
            
            
        } else {
            
            setTimeout(function() {
                computerDiceImage.src = dicePictures[computerDie - 1]
          }, 2000);
          pause(3000);
          
            roundScore = 0
            computerRoundScoreDisplay.innerHTML = roundScore
            rollAgain = "no"
        }

        if (roundScore > 14){
            // if (computerScore + roundScore >= 100){
            // alert("You lose!")
            // }
           
            console.log(computerScore + "computer score");
            console.log(roundScore + "computer round score");
            rollAgain = "no"
        } 

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


// myVar = setInterval(function(){ alert("Hello"); }, 5000);
// clearInterval(myVar);
// -Change eyes for Icons 
// -change timing for computer rolls 
// -fix design
//change image names
//add read me with rules and info and screen shot and add the link to it

