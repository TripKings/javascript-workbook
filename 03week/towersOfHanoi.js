'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
//This is starting to build the rules of the game and how pieces should start and end to indacate a win.
function isLegal(startStack, endStack) {
  console.log(endStack)
  if ((startStack === 'a' || startStack === 'b' || startStack === 'c') &&
  (endStack === 'a' || endStack === 'b' || endStack === 'c')) {
    let lastIndexStart = stacks[startStack].length - 1;
    let lastIndexEnd = stacks[endStack].length - 1;
    const moveTo = stacks[endStack];
//this is telling you if the move you made is legal or not by the size of the stack. 
    const moveFrom = stacks[startStack];
    if ((moveFrom[lastIndexStart] < moveTo[lastIndexEnd]) || (moveTo.length === 0)) {
      console.log('legal')
      return true;
    } else {
      console.log("Invalid entry");
      return false;
    }
  } else {
    console.log("Invalid entry");
  }
}
//this will move pieces around the board
function movePiece(startStack, endStack) {
  let grabbed = stacks[startStack].pop(); 
  console.log(grabbed)
  stacks[endStack].push(grabbed);

}
//this checks the b or c colum for a win if not return false. 
function checkForWin() {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    console.log("You win!");
    return true;
  } else {
    return false;

  }

}
//this are the rules of towers and how to check for a win
function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack) === true) {
    movePiece(startStack, endStack);
    checkForWin(startStack, endStack);
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}