'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let correctLetter = 0;
let correctLocation = 0;

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess, solution) {
  const sArray = solution.split('');
  const gArray = guess.split('');
  let targetIndex = null;
  for(let i = 0; i < sArray.length; i++) {
    for(let t =0; i < gArray.length; i++) {
      if((i === t) && (sArray[i] === gArray[i]) && (sArray[i] !== null)) {
        sArray[i] = null;
        correctLocation++;
        console.log('correctLocation:', correctLocation)
      }else if (i !== t) {
        targetIndex = sArray.indexOf(gArray[t]);
        console.log('targetIndex:', targetIndex)
        if(targetIndex > -1) {
          correctLetter++;
          console.log('correctLetter:', correctLetter)
        }
      }
    }
    if(gArray[i] === sArray[i]) {
      correctLetter++
      sArray[i] = null;
      console.log('correctLocation:', correctLocation)
    }else {
      correctLocation = 0;
    }
  }
  return `${correctLocation} - ${correctLetter}`
}

function mastermind(guess) {
  solution = 'abcd';
  if(guess == solution){
  console.log('You guessed it!')
  }else{
    const hint = generateHint(guess, solution)
    return hint;
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
