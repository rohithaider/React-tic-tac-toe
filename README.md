# Tic-Tac-Toe Game

This project is a simple Tic-Tac-Toe game built using React. The game allows two players to take turns placing "X" and "O" on a 3x3 grid. The game tracks moves, allows players to jump to previous moves, and determines the winner.

## Features

- 3x3 grid for Tic-Tac-Toe gameplay.
- Two-player turn-based gameplay (Player "X" and Player "O").
- Winner determination based on standard Tic-Tac-Toe rules.
- Ability to go back to previous moves using a move history.
- Responsive design using Tailwind CSS.

## Project Structure

- **Square Component**: Represents an individual square on the Tic-Tac-Toe board.
- **Board Component**: Handles the game logic, including checking the winner and managing clicks on the board squares.
- **Game Component**: Manages the history of moves, current player, and renders the board and move list.
- **Helper Functions**: Includes a `calculateWinner` function to determine the winner based on the current board state.



