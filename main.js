
const NUMBER_OF_ROUNDS = 5;
let roundCounter = 0;
let result;
let playerSelection;
let computerSelection;



function playRound() {

    console.log("Number of Rounds " + roundCounter);
    console.log("You Chose " + playerSelection, "Computer Chose " + computerSelection);
        if(playerSelection === computerSelection) {
            result = ("It's a draw! You Picked the Same");
        } else if(playerSelection == "Rock" && computerSelection == "Paper") {
            result = ("You Lose! Paper Beats Rock");
        } else if(playerSelection == "Rock" && computerSelection == "Scissors") {
            result = ("You Win! Rock Beats Scissors");
        } else if(playerSelection == "Scissors" && computerSelection == "Rock") {
            result = ("You Lose! Rock Beats Scissors");
        } else if(playerSelection == "Scissors" && computerSelection == "Paper") {
            result = ("You Win! Scissors Beat Rock");
        } else if(playerSelection == "Paper" && computerSelection == "Rock") {
            result = ("You Win! Paper Beats Rock");
        } else if(playerSelection == "Paper" && computerSelection == "Scissors") {
            result = ("You Lose! Scissors Beats Paper");
        };
        roundCounter++;

    

    };

    function startGame() {
        if(roundCounter >= NUMBER_OF_ROUNDS) {
            playerSelection = prompt("Pick Rock, Paper or Scissors!");
            computerChoice();
            playRound();
            return result;
        } else {
            alert("End Of the Game!")
        }
        console.log(roundCounter, NUMBER_OF_ROUNDS);
        
    };


computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
    if (computerChoice == 1){
        computerSelection = "Rock"
    } else if (computerChoice == 2) {
        computerSelection = "Paper"
    } else {
        computerSelection = "Scissors"
    }
}

  


  console.log(startGame()); 
//   console.log(playRound()); 
