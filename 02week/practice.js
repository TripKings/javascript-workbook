let fruit1 = {
    name: "apple",
    possibleColors: ["red", "yellow", "green"],
    size: "medium",
    singleSeed: false
}

let fruit2 = {
    name: "peach",
    possibleColors: ["yellow", "orange", "peach"],
    size: "medium",
    singleSeed: true
}

let myFruits = []; 
myFruits.push(fruit1)
myFruits.push(fruit2)

let seedSubstring = ""; 
if(fruit1.singleSeed) {
    seedSubstring = " with a single seed";
} else {
    seedSubstring = " with many seeds";
}

printDiscription(fruit1);
printDiscription(fruit2);

function printDiscription(myFruit) {
    let seedSubstring = ""; 
if(fruit1.singleSeed) {
    seedSubstring = " with a single seed";
} else {
    seedSubstring = " with many seeds";
}
}

console.log('The ' + myFruit.name + ' is ' + myFruit.size + seedSubstring)