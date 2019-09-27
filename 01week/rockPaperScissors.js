'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should detect which hand lost', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand one looses!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand one looses!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand two looses!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should scrub input if just a letter is entered, () => {
      assert.equal(rockPaperScissors('R', ' P '), "Hand two wins!");
      assert.equal(rockPaperScissors('P', 'S'), "Hand two wins!");
      assert.equal(rockPaperScissors('R ', 'S'), "Hand one wins!");
    });
    it('should detect wrong input, () => {
      assert.equal(rockPaperScissors('rOcK', ' hammer '), "Invalid entry!");
      assert.equal(rockPaperScissors('Paper', 'car'), "Invalid entry!");
      assert.equal(rockPaperScissors('rock ', 'baby'), "Invalid entry!");
    });
  });
} else {

  getPrompt();

}
