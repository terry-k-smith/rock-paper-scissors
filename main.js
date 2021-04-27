const selectionButtons = document.querySelectorAll(['data-selection']);

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e=> {
        const selectionName = ()

    })
})

const SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissors',
    },
    {
        name: 'paper',
        beats: 'rock',
    },
    {
        name: 'scissors',
        beats: 'paper',
    },
];

let roundCounter = 0;
let userScore = 0;
let computerScore = 0;


function randomChoice() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
};

function userChoice() {
    const userInput = prompt("Rock, Paper or Scissors?");

    const userSelection = SELECTIONS.find(Selection => Selection.name === userInput);
    return userSelection;
};


function isWinner(selectionA, selectionB ) {
    return selectionA.beats === selectionB.name;
};

function playRound() {
    const userSelection = userChoice();
    const computerSelection = randomChoice();
    const youWin = isWinner(userSelection, computerSelection);
    const computerWin = isWinner(computerSelection, userSelection); 
    console.log(youWin, computerWin);
    roundCounter++;
    console.log(roundCounter);

    if(!youWin && !computerWin) {
        return "Draw you both chose " + userSelection.name;
    }
    else if(youWin) {
        userScore++;
        return "You Win " + userSelection.name + " beats " + userSelection.beats
    } else {
        computerScore++;
        return "You Lost " + computerSelection.name + " beats " + computerSelection.beats
    }
}

function playGame() {
userScore = 0; 
computerScore = 0;
roundCounter = 0

for(let i=0; i < 5; i++) {
    if( i < 5) {
        setTimout(playRound, 1000;
    } 
}
 alert("End of Game!! You Scored " + userScore + " The Computer Scored " + computerScore)
    

};



console.log(playGame());