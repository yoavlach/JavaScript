'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guess;
const changeMessage = newMessage =>
  (document.querySelector('.message').textContent = newMessage);
const changeBackgroundColor = newBackgroundColor =>
  (document.querySelector('body').style.backgroundColor = newBackgroundColor);
document.querySelector('.check').addEventListener('click', function () {
  guess = document.querySelector('.guess').value;
  if (!Number(guess) && guess !== '0') {
    // Input is empty
    changeMessage('No input');
  } else {
    guess = Number(guess);
    if (guess < 1 || guess > 20) {
      // Guess is not in the correct range
      changeMessage('Guess not in range!');
    } else if (guess === secretNumber) {
      // Guess is correct
      changeMessage('Correct!');
      changeBackgroundColor('#60b347');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        // Lose
        changeMessage('You lose!');
        document.querySelector('body').style.backgroundColor = '#b34747';
      } else {
        changeMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      }
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  changeMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  changeBackgroundColor('#222');
});
