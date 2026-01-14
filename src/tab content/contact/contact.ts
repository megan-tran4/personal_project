import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  
  options = ['O', '', 'X'];
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // X is 1 and O is 2
  game_over = false;
  curr_player = -1;
  computer_player = 1;

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
    if (this.game_over || this.board[position] !== 0) {
      return;
    } 
    this.board[position] = this.curr_player;
    console.log(this.board);

    this.computer_move();
    if (this.checkWin(this.curr_player, this.board)) {
      this.game_over = true;
      let player = this.curr_player == -1 ? 2 : 1
      alert(`Player ${player} wins!`);
    } else if (this.checkWin(this.computer_player, this.board)) {
      this.game_over = true;
      let player = this.computer_player == -1 ? 2 : 1
      alert(`Player ${player} wins!`);
    } else if (this.board.every(cell => cell !== 0)) {
      this.game_over = true;
      alert("It's a draw!");
    } else {
      
    } 
  }

  checkWin(player: number, board: number[]): boolean {
    for (let tile of this.possibleWins) {
      const sum = board[tile[0]] + board[tile[1]] + board[tile[2]];
      if (sum == 3 * player) {
        return true;
      }
    }
    return false;
  }
  
  computerStarts() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.game_over = false;
    this.computer_player = 1;
    this.computer_move();
    this.curr_player = -1;
  }

  resetGame() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.game_over = false;
    this.curr_player = 1;
    this.computer_player = -1;
  }

  // computer_player = the number the computer is assigned to
  minimax(board: number[], moves: number, computer_turn: boolean) {
    if (this.checkWin(this.computer_player, board)) {
      return 10;
    }
    if (this.checkWin(-1 * this.computer_player, board)) {
      return -10;
    } 
    if (board.every(cell => cell !== 0)) {
      return 0;
    }

    if (computer_turn) {
      let best_score = -1 // placeholder
      for (let i = 0; i < 9; i++) {
        if (board[i] == 0) {
          board[i] = this.computer_player;
          let score = this.minimax(board, moves + 1, false);
          board[i] = 0;
          best_score = score > best_score? score : best_score;
        }
      }
      return best_score;
    } 

    else {
      let best_score = 1;
      for (let i = 0; i < 9; i++) {
        if (board[i] == 0) {
          board[i] = -1 * this.computer_player;
          let score = this.minimax(board, moves + 1, true)
          board[i] = 0;
          best_score = score < best_score ? score : best_score;
        }
      }
      return best_score;
    }
  }

  computer_move() {
    let best_score = -1;
    let position = -1;
    let sample_board = [...this.board];
    
    for (let i = 0; i < 9; i++) {
      if (sample_board[i] == 0) {
        sample_board[i] = this.computer_player;
        let score = this.minimax(sample_board, 0, false);
        sample_board[i] = 0;
        console.log("score" + score);
        if (score > best_score) {
          best_score = score;
          position = i;
        }
      }
    }

    if (position >= 0) {
      this.board[position] = this.computer_player;
    }

    console.log("we should move to" + position);
    
  }
}

