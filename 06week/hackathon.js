const text = 'The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.';
const textAsArray = text.toLowerCase().replace(/[^a-z0-9]/g,'').split('').sort();//changes all uppercase to lowercase letters and removes white space
let charactersList = {};//creates a new array that is blank.
//made a loop that goes by each index and adds a new letter each time it finds one in the loop
for(char of textAsArray) {
    if(!charactersList[char]) {
        charactersList[char] = 1; //gets each letter from the array and gives it a value of one.

    } else {
        charactersList[char]++ // if the loop finds more than one of the same letter add by 1 each time it is used. 
    }
}

console.log(charactersList)

