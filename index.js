var readlineSync = require('readline-sync');

//Intro
console.log( " ------  QUIZ  ------- " );
console.log( "A quiz to check how well you know VALORANT" );
console.log( '\n' );

var userName=readlineSync.question("What is your name?");

console.log("Welcome "+userName+" to Valorant Quiz");
console.log('\n');

console.log( "# Total Questions: 09" );
console.log( "# 1 point for each right answer" );
console.log( "# No points for skipping questions or wrong answers" );


console.log( "-----------------------\n" );
readlineSync.keyInPause( " >> LET'S BEGIN! " ) ;

    
//declaring score
var score=0;

var questions=[{
  question:"What is a Valorant?",
  options:["FPS","Adventure","BattleRoyal"],
  answer:1
},
{
  question:"How many agents are in Valorant?",
  options:["18","12","15"],
  answer:2
},
{
  question:"What ability does sage has?",
  options:["Cloudbrust","Healing Orb","Cosmic Divide"],
  answer:2
},
{
  question:"Astra's ultimate is known as",
  options:["Cyber Cage","Paint Shells","Cosmic Divide"],
  answer:3,
},
{
  question:"Which region sova is from",
  options:["Germany","United States","Russia"],
  answer:3
},
{
  question:"Which region Reyna is from",
  options:["Mexico","United States","Korea"],
  answer:1
},
{
  question:"which agent voice line is-Aaaayyyy, I like this game!",
  options:["Phoenix","Astra","Raze"],
  answer:1
},
{
  question:"which agent voice line is-'This is fun. Who needs training dummies when you have real dummies!'",
  options:["sage","omen","jett"],
  answer:3
},
{
  question:"Which agent voice line is-'Strike at their weak points. If one link breaks the rest will follow'",
  options:["Omen","Brimstone","Sage"],
  answer:1
}
];

//function

function checkAnswer(question, options, answer){
var userAnswer= readlineSync.keyInSelect(options,question);
if (userAnswer == -1) {
        console.log("No points for skipping!");
    }
    else if (userAnswer +1 == answer) {
        console.log("That's right!");
        score=score+1;
    }
    else {
        console.log("Oops, that's incorrect!");
    }
    console.log("Current Score: "+score);
    console.log("-----------------------\n");
}




function askQuestions(questions) {
    for (var i = 0; i < questions.length; ++i) {
        var current = questions[i];
        checkAnswer(current.question, current.options, current.answer);
    }
}
function quizStart() {
    
askQuestions(questions);
}

quizStart();

console.log('\n');
console.log("Your total Score is: "+score);
