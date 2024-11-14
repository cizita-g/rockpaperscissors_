const choices = ['rock', 'paper', 'scissors'];
const handIcons = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  animateHands(userChoice, computerChoice);
}

function animateHands(userChoice, computerChoice) {
  const userHand = document.getElementById('user-hand');
  const computerHand = document.getElementById('computer-hand');

  const countdownChoices = ['✊', '✋', '✌️'];
  
  // Start hand animation
  let count = 0;
  const interval = setInterval(() => {
    userHand.textContent = countdownChoices[count % 3];
    computerHand.textContent = countdownChoices[count % 3];
    count++;
    if (count === 9) {
      clearInterval(interval);
      userHand.textContent = handIcons[userChoice];
      computerHand.textContent = handIcons[computerChoice];
      showResult(userChoice, computerChoice);
    }
  }, 100); // Change hand symbol every 100ms
}

function showResult(userChoice, computerChoice) {
  const resultText = getResult(userChoice, computerChoice);
  document.getElementById('user-choice').children[0].textContent = userChoice;
  document.getElementById('computer-choice').children[0].textContent = computerChoice;
  document.getElementById('outcome').textContent = resultText;
}

function getResult(user, computer) {
  if (user === computer) return 'It\'s a Draw!';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 'You Win! 🎉';
  } else {
    return 'You Lose! 😢';
  }
}
