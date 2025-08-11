# Guess My Number

A simple browser game where you try to guess a secret number between 1 and 20. Built with vanilla HTML, CSS, and JavaScript.

## Features
- Random secret number between 1–20 each round
- Score starts at 20 and decreases by 1 for each wrong guess
- High score tracking for the session
- Feedback messages: no input, out-of-range, too high/low, correct, lose
- Visual feedback: background color changes on win/lose
- Play again button to reset the game

## Project Structure
- index.html — Markup for the game UI
- style.css — Styles for layout and game elements
- script.js — Game logic and DOM interactions

## How to Run
1. Clone or download the project files.
2. Open `index.html` in any modern web browser.

## How to Play
1. Enter a number from 1 to 20 in the input field.
2. Click “Check!” to submit your guess.
3. Read the message for feedback:
   - “No input” if you didn’t enter a number
   - “Guess not in range!” if not within 1–20
   - “Too high!” or “Too low!” for hints
   - “Correct!” when you guess it
4. Your score decreases with each wrong guess. Reach 0 and you lose.
5. Click “Again!” to start a new round and try to beat your high score.

## Notes
- High score persists only for the current page session (not saved across reloads).
- The current script has a missing closing braces/brackets section causing a runtime error. Specifically, the event listener for the “Check” button is not properly closed after handling the high score and “too high/low” logic.
- The CSS file appears to be missing several closing braces for nested blocks (e.g., `html`, `body`, `header`, `main`, `.left`, `.right`, etc.). Add the corresponding closing braces to ensure styles apply correctly.

## License
MIT License. Use, modify, and share freely.
