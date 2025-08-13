# 🎲 Pig Dice Game

A simple **two-player dice game** implemented in **JavaScript, HTML, and CSS**.  
Players take turns rolling a die and accumulating points. The first player to reach the winning score (default: 100) wins the game.

---

## 📜 How to Play

1. **Game Start**  
   - Player 1 starts, with both players' scores at `0`.

2. **Rolling the Dice**  
   - Click **Roll Dice** to roll a die (1–6).
   - The roll result is added to the player's **current score**.
   - If you roll a `1`, you **lose your current score** and your turn ends.

3. **Hold**  
   - Click **Hold** to add your **current score** to your **total score** and pass the turn to the other player.

4. **Winning the Game**  
   - First player to reach **100 points** (configurable in code) wins.
   - The winner is highlighted, and the game stops until you start a new game.

---

## 🛠️ Features

- Turn-based game for **two players**.
- Winning condition configurable via a `winningNum` constant.
- UI automatically updates:
  - Highlights the active player.
  - Shows dice image after each roll.
  - Displays winner styling at game end.
- **Responsive layout** for desktop and mobile.

---

## 📂 Project Structure


```plaintext
.
├── index.html     # Main HTML structure
├── style.css      # Game styling
├── script.js      # Game logic
├── img/
│   ├── dice-1.png
│   ├── dice-2.png
│   ├── dice-3.png
│   ├── dice-4.png
│   ├── dice-5.png
│   └── dice-6.png
└── README.md

---

## 🚀 Installation & Running Locally

1. **Clone the repository**
  git clone https://github.com/your-username/pig-dice-game.git
  cd pig-dice-game


2. **Open in Browser**  
Just open `index.html` in your favorite browser — no build tools required.

---

## ⚙️ Game Controls

- **🎲 Roll Dice** → Roll the die and add to your current score (risk losing it if 1 is rolled).
- **📥 Hold** → Add current score to total score and switch to the other player.
- **🔄 New Game** → Reset the game to initial state.

---

## 📌 Configuration

Change the winning score by editing the constant 'winningNum' in `script.js`:

---

## 📄 License

This project is open-source under the **MIT License**.  
You’re free to use, modify, and distribute it.

---

