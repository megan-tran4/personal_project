import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  
  options = ['', 'X', 'O'];
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // X is 1 and O is 2
  gameOver = false;
  currentPlayer = 1;

  possibleWins = [
    // rows 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonals
    [0, 4, 8],
    [2, 4, 6]
  ]

  makeMove(position: number) {
    if (this.gameOver || this.board[position] !== 0) {
      return;
    } 
    this.board[position] = this.currentPlayer;
    console.log(this.board);

    if (this.checkWin()) {
      this.gameOver = true;
      alert(`Player ${this.currentPlayer} wins!`);
    } else if (this.board.every(cell => cell !== 0)) {
      this.gameOver = true;
      alert("It's a draw!");
    } else {
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    } 
  }

  checkWin(): boolean {
    for (let tile of this.possibleWins) {
      const hasWin = this.board[tile[0]] == this.board[tile[1]] && this.board[tile[1]] == this.board[tile[2]] && this.board[tile[0]] !== 0;
      if (hasWin) {
        return true;
      }
    }
    return false;
  }

  resetGame() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gameOver = false;
    this.currentPlayer = 1;
  }
}
