

var allSeconds = 7890493;
var secondsPerDay = 60*60*24;
var secondsPerHour = 60*60;
var secondsPerMin = 60;

var wholeDays = Math.floor(allSeconds / secondsPerDay);
var remainingSeconds = allSeconds % secondsPerDay;

console.log("wholeDay = ", wholeDays)
console.log("remaining seconds = ", remainingSeconds)

var wholeHours = Math.floor(remainingSeconds / secondsPerHour)
console.log("whole hours = " , wholeHours);

remainingSeconds = remainingSeconds % secondsPerHour;
console.log("remaining seconds = ", remainingSeconds)

var wholeMins = Math.floor(remainingSeconds/secondsPerMin)
console.log("whole mins ", wholeMins)
console.log("remaining seconds ", remainingSeconds)


