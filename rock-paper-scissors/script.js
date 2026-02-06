let humanScore = 0; 
let computerScore = 0; 

function getComputerChoice() {
    let randf = Math.random(); 
    if (randf > 0.66) 
    {
        return "ROCK";
    } 
    else if (randf > 0.33)
    {
        return "PAPER";
    }
    else
    {
        return "SCISSORS"; 
    }
}

function getPlayerChoice() {
    let choice = ""; 
    prompt("Enter rock, paper or scissors.", choice); 
    return choice.toUpperCase(); 
}

//Compare rock paper scissors choices 
function playRound(humanChoice, computerChoice) 
{
    console.log("Human:" + humanChoice)
    console.log("Computer:" + computerChoice); 
    if ((humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (humanChoice == "PAPER" && computerChoice == "ROCK") ||
        (humanChoice == "SCISSORS" && computerChoice == "PAPER")) 
    {
        humanScore += 1; 
    }
    computerScore += 1; 
}

function playGame() {
    for(let i = 0; i < 5; i++){
        let humanChoice = getPlayerChoice(); 
        let computerChoice = getComputerChoice(); 

        playRound(humanChoice, computerChoice); 
    }
    
    if (humanScore > computerScore) { console.log("Human wins!"); }
    else { console.log("Computer wins!"); } 
}

playGame(); 