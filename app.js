

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score — You: ${humanScore}  CPU: ${computerScore}`);
  }

  console.log("\nFinal result:");
  if (humanScore > computerScore) {
    console.log(`You win the game ${humanScore}–${computerScore}!`);
  } else if (computerScore > humanScore) {
    console.log(`CPU wins ${computerScore}–${humanScore}.`);
  } else {
    console.log(`It’s a draw ${humanScore}–${computerScore}.`);
  }
}

playGame();