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
/*var userNum = prompt("Please tell me a number...");
var userInt = parseInt(userNum);
var randNum = Math.random() * userInt + 1; 
var roundNum = Math.floor(randNum);
console.log(roundNum);
document.write(roundNum); */

//Quiz
/*
var answer = prompt("How are you?");
if(answer.toLowerCase() === 'good'){
	alert("Happy to hear that!");
}else {

	alert("lame.");
}
*/

/*
    Ask at least five questions
 	Keep track of the number of questions the user answered correctly
    Provide a final message after the quiz letting the user know the number of questions he or she got right.
    Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/

//5 question quiz
/*
var correct = 0;
var question1 = prompt("What state is San Francisco in?");
var question2 = prompt("What state is Detroit in?");
var question3 = prompt("What state is Boston in?");
var question4 = prompt("What state is San Jose in?");
var question5 = prompt("What state is Seattle in?");
if (question1.toLowerCase() === "ca") {
	correct++;
};
if (question2.toLowerCase() === "mi") {
	correct++;
};
if (question3.toLowerCase() === "ma") {
	correct++;
};
if (question4.toLowerCase() === "ca") {
	correct++;
};
if (question5.toLowerCase() === "wa") {
	correct++;
};
if (correct === 5){
	alert("You got all 5 questions right! You get a gold crown!");
}else if (correct >= 3){
	alert("You got all 3 or 4 questions right! You get a silver crown!");
}else if (correct >= 1){
	alert("You got all 1 or 2 questions right! You get a bronze crown!");
}else{
	alert("You got 0 questions right! You get nothing!");
}	
*/

//Functions
function alertRandom(lower, upper){
	if(isNaN(lower)  || isNaN(upper) ){
		throw new Error('This function needs numbers');
	}
	return Math.floor(Math.random()* (upper - lower + 1) + lower);
}
console.log(alertRandom(1,'five'));
console.log(alertRandom(200,500));
console.log(alertRandom(20,24));




