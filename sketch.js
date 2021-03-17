var canvas;

var gameState = 0;
var contestantCount;
var allContestants;
var database;
var answer;
var question, contestant, quiz;




function setup(){
  canvas = createCanvas(1000,800);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(200, 200, 255);
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  
}


