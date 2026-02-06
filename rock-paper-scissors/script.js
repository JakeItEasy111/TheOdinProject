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

//Compare rock paper scissors choices 
function playRound(humanChoice, computerChoice) 
{
    const choice = document.querySelector("#choice"); 
    const score = document.querySelector("#score"); 
    const wincon = document.querySelector("#wincon"); 

    choice.textContent = "Human:" + humanChoice + ", Computer: " + computerChoice; 

    if ((humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (humanChoice == "PAPER" && computerChoice == "ROCK") ||
        (humanChoice == "SCISSORS" && computerChoice == "PAPER")) 
    {
        humanScore += 1; 
    }
    else 
    {
        computerScore += 1; 
    }

    score.textContent = humanScore + " : " + computerScore; 

    if (humanScore >= 5 || computerScore >= 5)
    {
        if (humanScore >= 5) {
            wincon.textContent = "Human wins!"; 
        }
        else {
            wincon.textContent = "Computer wins!";
        }
        let buttons = document.querySelector(".buttons").querySelectorAll(); 

        buttons.forEach(btn => {
            btn.removeEventListener("click"); 
        });
    }
}

function playGame() {
    const rock_btn = document.querySelector("#rock"); 
    rock_btn.addEventListener("click", () => { playRound("ROCK", getComputerChoice())});
    const paper_btn = document.querySelector("#paper");
    paper_btn.addEventListener("click", () => { playRound("PAPER", getComputerChoice())});
    const scissors_btn = document.querySelector("#scissors"); 
    scissors_btn.addEventListener("click", () => { playRound("SCISSORS", getComputerChoice()) });
}

playGame(); 