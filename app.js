/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- If two consecuitve rolls of player results in two sixes then complete score of that player becomes zer0 and its another player turn

*/


var scores,roundScore,activePlayer,gamePlaying,dice;
init();
function rollingDice(){
    if(gamePlaying){
    let d=dice;
    dice=Math.floor(Math.random() * 6) +1;
    document.querySelector(".dice").src="dice-"+dice+".png"
    if(dice !== 1 && dice !==6){
        roundScore=roundScore+dice;
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
    }
    else{
        if(dice===6 && (dice+d)===12){
            scores[activePlayer]=0;
            document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];
            nextTurn();
        }
        else if(dice===6){
            roundScore+=dice;
        }
        else{
        nextTurn();
    }
}
}
}

document.querySelector(".btn-roll").addEventListener("click",rollingDice);
document.querySelector(".btn-hold").addEventListener("click",function (){
    if(gamePlaying){
    scores[activePlayer]+=roundScore;
    document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=30){
        document.getElementById("name-"+activePlayer).textContent="Winner";
        gamePlaying=false;
    
    }
    else{
        nextTurn();
    }
}

});

document.querySelector(".btn-new").addEventListener("click",init)

function init(){
    scores=[0,0];
    roundScore=0;
    dice=0;
    activePlayer=0;
    gamePlaying=true;
    document.getElementById("score-0").textContent="0";
    document.getElementById("current-0").textContent="0";
    document.getElementById("score-1").textContent="0";
    document.getElementById("current-1").textContent="0";
}
function nextTurn(){
    roundScore=0;
    document.getElementById("current-"+activePlayer).textContent=roundScore;
    document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
    activePlayer===0 ? activePlayer=1 : activePlayer=0
    document.querySelector(".player-"+activePlayer+"-panel").classList.add("active")

}