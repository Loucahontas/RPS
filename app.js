function getComputerChoice() {
  const n = Math.floor(Math.random() * 3); // 0,1,2
  if (n === 0) return "rock";
  if (n === 1) return "paper";
  return "scissors";
}

for (let i = 0; i < 5; i++) {
  console.log("CPU:", getComputerChoice());
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors?").trim().toLowerCase();
}

console.log("You chose:", getHumanChoice());