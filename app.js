let humanScore = 0;
let computerScore = 0;

// quick check
console.log({ humanScore, computerScore });


function getComputerChoice() {
  const n = Math.floor(Math.random() * 3); // 0,1,2
  if (n === 0) return "rock";
  if (n === 1) return "paper";
  return "scissors";
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors?").trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  const h = humanChoice.toLowerCase();
  const c = computerChoice.toLowerCase();

  if (h === c) {
    console.log(`Draw! You both chose ${h}.`);
    return;
  }

  const humanWins =
    (h === "rock" && c === "scissors") ||
    (h === "paper" && c === "rock") ||
    (h === "scissors" && c === "paper");

  if (humanWins) {
    humanScore++;
    console.log(`You win! ${h} beats ${c}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${c} beats ${h}.`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`Score — You: ${humanScore}  CPU: ${computerScore}`);