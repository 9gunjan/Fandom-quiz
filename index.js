// input 
var myVar = require('readline-sync');
var chalk = require('chalk');

var Username = myVar.question(chalk.green("Hi! What is your name?\n"));
console.log(chalk.cyanBright("Welcome " + Username + 
" to the guiz game"));

var choice = myVar.question(chalk.green("Are you also a true fan of Money Heist? Do you think you know each detail of the episode? If Yes, then the below quiz is made for you. Take the quiz and find out how much do you really know!?\n Let's begin?")+ chalk.green("(Y/N)"));


// Score to keep a check
var score = 0; 



// Function to check Answer
function checkAnswer(question , answer){
  var userAnswer = myVar.question(chalk.cyanBright(question));
    if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log(chalk.green("Correct."));
    score ++;
    }

    else{
    console.log(chalk.red("Wrong."));
    console.log(chalk.white("Correct Answer = " + answer));
    }
    console.log(chalk.redBright("\n-------------------"));

}



// Question bank
var questionBank = [{
  question : "What was the Professor's  name??\n",
  answer : "Sergio Marquina"
},
{
  question : "Who planned the Bank of Spain heist?\n",
  answer : "Berlin"
},
{
  question : "Where did Raquel find The Professor after the first heist?\n",
  answer : "Thailand"
},
{
  question : "What was the name of Stockholm's son?\n",
  answer : "Cincinnati"
},
{
  question : "How many robbers died till the 2nd heist?\n",
  answer : "Four"
},
{
  question : "How does Professor tell Raquel that he knows she is alive?\n",
  answer : "He sent his watch."
}]


if(choice == "Y" || choice == "y"){
  console.log(chalk.red("HERE YOU GO!! "));
  for(var i = 0; i<questionBank.length; i++){
    current = questionBank[i];
    checkAnswer(current.question,current.answer);
  }
  console.log("Total = " + score + " out of " + questionBank.length);
}
console.log(chalk.redBright("\n-------------------"));



// LeaderBoard Score
const leaderBoard = [
  {
    name : "Rohini",
    score : "9"
  },
  {
    name : "Hitesha",
    score : "8"
  },
  {
    name : "Divi",
    score : "6"
  },
  {
    name : "Bhoomi",
    score : "3"
  }
];
for(var i = 0 ; i<leaderBoard.length; i++){
  var current = leaderBoard[i];
    console.log(current.name + " = " + current.score); 
}

for(var i = 0; i<leaderBoard.length; i++){
  var current1 = leaderBoard[i];
  if(score > current1.score){
    var rank = i+1;
    break;
  }
  else
    var rank = leaderBoard.length;
}
console.log(chalk.green("You achived Rank No." + rank));



if(score >= questionBank.length/2 ){
  console.log(chalk.yellow("\nCongratulations! You won a hamper." ));
}
else{
  console.log(chalk.redBright("\nBetter luck next time!"));
}
console.log(chalk.redBright("\n---------END----------"));