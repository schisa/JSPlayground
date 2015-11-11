//Story Creator 
/*alert("Welcome to the story creation. We will ask you a few questions to create a story.");
var noun = prompt("Please input a noun.").toLowerCase();
var story = "One day a " + noun + " decided to go for a walk. On this walk it saw a cat ";
var verb = prompt("Please input a verb.").toLowerCase();
story += verb + ". " + "'Wow' the " +  noun + " said. " ;
var adj = prompt("Please input an adjective.").toLowerCase();
story += "Then the cat said" + " '"+ noun + ", you look " + adj + "'. ";
document.write(story);
*/


//Seconds Alive 
/*var secPerMin = 60;
var minPerHour = 60;
var hourPerday = 24;
var dayPerWeek = 7;
var weekPerYear = 52;
var yearsAlive = 25; 
var totalSecAlive = yearsAlive * weekPerYear * dayPerWeek * minPerHour * secPerMin;
alert("You have been alive longer than " + totalSecAlive + " seconds");*/

//Random number based on user input
var userNum = prompt("Please tell me a number...");
var userInt = parseInt(userNum);
var randNum = Math.random() * userInt + 1; 
var roundNum = Math.floor(randNum);
console.log(roundNum);
document.write(roundNum);