const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let pointer = [0, 0]
let turn = 'X'
let positions = [['*', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
let pieces = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
let round = 0;

let board = positions[0][0] + '' + pieces[0][0] + ' |' + positions[0][1] + '' + pieces[0][0] + ' |' + positions[0][2] + '' + pieces[0][0] + ' \n___|___|___\n' + positions[1][0] + '' + pieces[0][0] + ' |' + positions[1][1] + '' + pieces[0][0] + ' |' + positions[1][2] + '' + pieces[0][0] + ' \n___|___|___\n   |   |   \n' + positions[2][0] + '' + pieces[0][0] + ' |' + positions[2][1] + '' + pieces[0][0] + ' |' + positions[2][2] + '' + pieces[0][0] + ' '
console.clear();
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } if (key.name === 'right') {
    if (pointer[1] < 2) {
      positions[pointer[0]][pointer[1]] = positions[pointer[0]][pointer[1]].replace(/\*/g,' ');
      pointer[1] += 1;
      positions[pointer[0]][pointer[1]] = '*';
      board = positions[0][0] + '' + pieces[0][0] + ' |' + positions[0][1] + '' + pieces[0][1] + ' |' + positions[0][2] + '' + pieces[0][2] + ' \n___|___|___\n' + positions[1][0] + '' + pieces[1][0] + ' |' + positions[1][1] + '' + pieces[1][1] + ' |' + positions[1][2] + '' + pieces[1][2] + ' \n___|___|___\n   |   |   \n' + positions[2][0] + '' + pieces[2][0] + ' |' + positions[2][1] + '' + pieces[2][1] + ' |' + positions[2][2] + '' + pieces[2][2] + ' '
      console.clear();
      console.log(board);
    }
  } if (key.name === 'left') {
    if (pointer[1] > 0) {
      positions[pointer[0]][pointer[1]] = positions[pointer[0]][pointer[1]].replace(/\*/g, ' ');
      pointer[1] -= 1;
      positions[pointer[0]][pointer[1]] = '*';
      board = positions[0][0] + '' + pieces[0][0] + ' |' + positions[0][1] + '' + pieces[0][1] + ' |' + positions[0][2] + '' + pieces[0][2] + ' \n___|___|___\n' + positions[1][0] + '' + pieces[1][0] + ' |' + positions[1][1] + '' + pieces[1][1] + ' |' + positions[1][2] + '' + pieces[1][2] + ' \n___|___|___\n   |   |   \n' + positions[2][0] + '' + pieces[2][0] + ' |' + positions[2][1] + '' + pieces[2][1] + ' |' + positions[2][2] + '' + pieces[2][2] + ' '
      console.clear();
      console.log(board);
    }
  } if (key.name === 'up') {
    if (pointer[0] > 0) {
      positions[pointer[0]][pointer[1]] = positions[pointer[0]][pointer[1]].replace(/\*/g, ' ');
      pointer[0] -= 1;
      positions[pointer[0]][pointer[1]] = '*';
      board = positions[0][0] + '' + pieces[0][0] + ' |' + positions[0][1] + '' + pieces[0][1] + ' |' + positions[0][2] + '' + pieces[0][2] + ' \n___|___|___\n' + positions[1][0] + '' + pieces[1][0] + ' |' + positions[1][1] + '' + pieces[1][1] + ' |' + positions[1][2] + '' + pieces[1][2] + ' \n___|___|___\n   |   |   \n' + positions[2][0] + '' + pieces[2][0] + ' |' + positions[2][1] + '' + pieces[2][1] + ' |' + positions[2][2] + '' + pieces[2][2] + ' '
      console.clear();
      console.log(board);
    }
  } if (key.name === 'down') {
    if (pointer[0] < 2) {
      positions[pointer[0]][pointer[1]] = positions[pointer[0]][pointer[1]].replace(/\*/g, ' ');
      pointer[0] += 1;
      positions[pointer[0]][pointer[1]] = '*';
      board = positions[0][0] + '' + pieces[0][0] + ' |' + positions[0][1] + '' + pieces[0][1] + ' |' + positions[0][2] + '' + pieces[0][2] + ' \n___|___|___\n' + positions[1][0] + '' + pieces[1][0] + ' |' + positions[1][1] + '' + pieces[1][1] + ' |' + positions[1][2] + '' + pieces[1][2] + ' \n___|___|___\n   |   |   \n' + positions[2][0] + '' + pieces[2][0] + ' |' + positions[2][1] + '' + pieces[2][1] + ' |' + positions[2][2] + '' + pieces[2][2] + ' '
      console.clear();
      console.log(board);
    }
  } if (key.name === 'return') {
    if (pieces[pointer[0]][pointer[1]] === ' ') {
      console.clear();
      pieces[pointer[0]][pointer[1]] = turn;
      board = positions[0][0] + '' + pieces[0][0] + ' |' + positions[0][1] + '' + pieces[0][1] + ' |' + positions[0][2] + '' + pieces[0][2] + ' \n___|___|___\n' + positions[1][0] + '' + pieces[1][0] + ' |' + positions[1][1] + '' + pieces[1][1] + ' |' + positions[1][2] + '' + pieces[1][2] + ' \n___|___|___\n   |   |   \n' + positions[2][0] + '' + pieces[2][0] + ' |' + positions[2][1] + '' + pieces[2][1] + ' |' + positions[2][2] + '' + pieces[2][2] + ' '
      console.log(board);
      checkWin(turn);
      if (turn === 'X') {
          turn = 'O';
      } else {
          turn = 'X';
      }
      round += 1
      if (round === 9){
        console.log('TIE GAME')
        process.exit();
      }
    }
  }
});
console.log(board);

const checkWin = (player) => {
  for (let i = 0; i < 3; i += 1) {
    if (pieces[i][0] === player && pieces[i][1] === player && pieces[i][2] === player) {
      console.log('Player ' + player + ' Wins !!!');
      process.exit();
    }
    if (pieces[0][i] === player && pieces[1][i] === player && pieces[2][i] === player) {
      console.log('Player ' + player + ' Wins !!!');
      process.exit();
    }
  }
  if (pieces[0][0] === player && pieces[1][1] === player && pieces[2][2] === player) {
    console.log('Player ' + player + ' Wins !!!');
    process.exit();
  }
  if (pieces[0][2] === player && pieces[1][1] === player && pieces[2][0] === player) {
    console.log('Player ' + player + ' Wins !!!');
    process.exit();
  }
}
