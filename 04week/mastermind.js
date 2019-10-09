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

function generateHint(guess) {
  const sArray = solution.split('');
  const gArray = guess.split('');
  let correctLetter = 0;
  let correctLocation = 0;
  for(let i = 0; i < sArray.length; i++) {
    console.log('location loop', i)
      if(gArray[i] === sArray[i]) {
        console.log('g', gArray, 's', sArray)
        console.log('at correct locations', i)
        correctLocation+=1;
        sArray[i] = null; 
        console.log('after nulling: g', gArray, 's', sArray)
        // console.log('correctLocation:', correctLocation, 'index', i)
      }
  }

  for (let j = 0; j < sArray.length; j++) {
    console.log('letter loop', j)
    const targetIndex = sArray.indexOf(gArray[j]);
    // console.log('targetIndex:', targetIndex)
    if(targetIndex > -1) {
      correctLetter++;
      sArray[targetIndex] = null;
      // console.log('correctLetter:', correctLetter, 'index:', j)
    }
      // console.log('sArray', sArray)
      // console.log('solution', solution)
  }
  return `${correctLocation}-${correctLetter}`
}

function mastermind(guess) {
  solution = 'abcd';
  if(guess === solution){
  console.log('You guessed it!')
  return 'You guessed it!'
  }else{
    var hint = generateHint(guess)
    var hintGuess = guess + hint;
    board.push(hintGuess)
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
