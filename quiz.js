class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    play(){
        question.hide();
        background("yellow");
        fill("black");
        textSize(30);
        text("Result of the quiz", 340,50);
        Contestant.getContestantInfo();
        if(allContestants!==undefined){
            var y = 230;
            fill("blue");
            textSize(20);
            text("Note: Contestants who answered correct are highlighted in green", 130,200);
            for(var plr in allContestants){
              var correctAnswer = "2";
              if(correctAnswer === allContestants[plr].answer){
                fill("green");
              } else{
                fill("red");
                y = y+30;
                textSize(20);
                text(allContestants[plr].name+":"+allContestants[plr].answer, 250,y);
              }
            }
        }
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
            question = new Question();
            question.display();
      }
    }
}
