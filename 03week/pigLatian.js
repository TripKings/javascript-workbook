'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

console.log("I am here");
// piglatin('brother')
function pigLatin(word) {
  let trimWord = word.trim().toLowerCase();// triming the word and making it lowercase

  let vowels = 'aeiou';// defines the vowels 

  function vowelsDetected(trimWord) {
    for(let i = 0; i < trimWord.length; i++) {
      if(vowels.indexOf(trimWord[i])!== -1) {
        return(i);
      }
    }
  }
  
  let firstVowel = vowelsDetected(trimWord);
    if(firstVowel > 0) {
      return trimWord.slice(firstVowel) + trimWord.slice(0, firstVowel) + "ay"
    } else {
      return trimWord + "yay"
    }
    
  


}

function handleTranslate(){
    console.log("I am inside handleTranslate")
    
    var inputBox = document.getElementById("plainText")

    var englishWord = inputBox.value;
    console.log("english word", englishWord)

    pigLatin(englishWord)

    var pigLatinWord = pigLatin(englishWord)
    console.log(pigLatinWord)

    var spanElement = document.getElementById("pigLatinText")
    console.log("span element", spanElement)

    spanElement.innerHTML = pigLatinWord;

    //1. get the input value from input box
    //2. call the pig latin function with this value
    //3. write the result that the pig latin function retunrs to the screen 
}

  

  // Your code here




function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

//   getPrompt();

}