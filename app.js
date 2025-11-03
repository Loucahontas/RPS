
function getComputerChoice() {
  const n = Math.floor(Math.random() * 3); // 0,1,2
  if (n === 0) return "rock";
  if (n === 1) return "paper";
  return "scissors";
}

let humanScore = 0;
let computerScore = 0;

// 3) One round: update scores + return outcome (keep console logs for now)
function playRound(humanChoice, computerChoice) {
  const h = humanChoice.toLowerCase();
  const c = computerChoice.toLowerCase();

  if (h === c) {
    console.log(`Draw! You both chose ${h}.`);
    return { outcome: "draw", h, c };
  }

  const humanWins =
    (h === "rock" && c === "scissors") ||
    (h === "paper" && c === "rock") ||
    (h === "scissors" && c === "paper");

  if (humanWins) {
    humanScore++;
    console.log(`You win! ${h} beats ${c}.`);
    return { outcome: "win", h, c };
  } else {
    computerScore++;
    console.log(`You lose! ${c} beats ${h}.`);
    return { outcome: "lose", h, c };
  }
}

// 4) Wire up the UI
const buttons  = document.querySelectorAll('button[data-move]');
const statusEl = document.getElementById('status');
const scoreEl  = document.getElementById('score');
const resetBtn = document.getElementById('reset');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const human = btn.dataset.move;     // 'rock' | 'paper' | 'scissors'
    const cpu   = getComputerChoice();  // random CPU choice

    const result = playRound(human, cpu);   // updates scores
    console.log('round:', result);          // keep logs for this step

    // Update the page
    statusEl.textContent = renderMessage(result);
    scoreEl.textContent  = `You: ${humanScore} — CPU: ${computerScore}`;

    // First to 5 → announce & pause game
    if (humanScore === 5 || computerScore === 5) {
      const winner = humanScore === 5 ? 'You win the game!' : 'CPU wins the game.';
      statusEl.textContent = `${winner} Final ${humanScore}—${computerScore}.`;
      buttons.forEach(b => b.disabled = true);
      resetBtn.hidden = false;
    }
  });
});

// Reset flow
resetBtn.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  statusEl.textContent = 'Click a button to play.';
  scoreEl.textContent  = 'You: 0 — CPU: 0';
  buttons.forEach(b => b.disabled = false);
  resetBtn.hidden = true;
});

function renderMessage({ outcome, h, c }) {
  if (outcome === 'draw') return `Draw! You both chose ${h}.`;
  if (outcome === 'win')  return `You win! ${cap(h)} beats ${cap(c)}.`;
  return `You lose! ${cap(c)} beats ${cap(h)}.`;
}
function cap(s) { return s[0].toUpperCase() + s.slice(1); }