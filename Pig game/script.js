'use strict';

const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

const dice = document.querySelector('.dice');
const btns = document.querySelectorAll('.btn');

const newGameBtn = btns[0];
const rollDiceBtn = btns[1];
const holdBtn = btns[2];

let currDice = 0;
let currPlayer = '0';
let currScore = document.getElementById(`current--${currPlayer}`);
let totalScore = document.getElementById(`score--${currPlayer}`);
let isInWinState = false;
const winningNum = 100;

const initGame = () => {
    dice.classList.add('hidden');
    isInWinState = false;
    currPlayer = '0';

    document.getElementById('score--0').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    player1El.classList.remove('player--winner');
    player2El.classList.remove('player--winner');
    player2El.classList.remove('player--active');
    player1El.classList.add('player--active');

    currScore = document.getElementById('current--0');
    totalScore = document.getElementById('score--0');
};

const rollDice = () => {
    if (!isInWinState) {
        currDice = Math.floor(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${currDice}.png`;
        if (currDice === 1) switchPlayer();
        else currScore.textContent = Number(currScore.textContent) + currDice;
    }
};

const hold = () => {
    if (!isInWinState) {
        totalScore.textContent =
            Number(totalScore.textContent) + Number(currScore.textContent);
        currScore.textContent = 0;
        if (Number(totalScore.textContent) >= winningNum) win();
        else switchPlayer();
    }
};

const switchPlayer = () => {
    currScore.textContent = 0;
    currPlayer = currPlayer === '0' ? '1' : '0';
    currScore = document.getElementById(`current--${currPlayer}`);
    totalScore = document.getElementById(`score--${currPlayer}`);
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
};

const win = () => {
    document
        .querySelector(`.player--${currPlayer}`)
        .classList.toggle('player--winner');
    isInWinState = true;
    dice.classList.add('hidden');
};

initGame();
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
newGameBtn.addEventListener('click', initGame);
