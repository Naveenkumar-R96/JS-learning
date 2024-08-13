let initGame = () =>{
  let startGame=confirm("Shall we play a rock papper scissor game?");
  startGame ? playGame() : "ok we will play after";
}

let playGame=()=>{
  while (true){
  let playerChoice = getPlayerChoice();
  playerChoice =formatPlayerChoice(playerChoice);
  if(playerChoice===""){
    invalidChoice();
    continue;
  
  }
  else if(!playerChoice){
    decidedNotToPlay();
    break;
  }
  playerChoice=evaluatePlayerChoice(playerChoice);
  if(!playerChoice){
    invalidChoice();
    continue;
  }
  const computerChoice=getComputerChoice();
  const result =determineWinner(playerChoice, computerChoice);
  displayResult(result);

  if(askToPlayAgain()){
    continue;
  }
  else{
    thanksForPlaying();
    break;
  }
}
}

let getPlayerChoice =()=>{
  return prompt ("Please enter rock,paper,or scissors.")
}
let formatPlayerChoice=()=>{
  if(playerChoice==="" || playerChoice){
    return playerChoice.trim().toLowerCase();
  }
  else{
    return false;
  }
}

let invalidChoice = ()=>{
  alert("you didnt enter rock paper ,scissor");
}

let decidedNotToPlay =()=>{
  alert("I guess you changed your mind Maybe next time");
}

let evaluatePlayerChoice= ()=>{
  if (playerChoice==="rock"||playerChoice==="paper"||playerChoice==="scissors"){
    return playerChoice;
  }
  else{
    return false;
  }
}

const computerChoice=()=>{
  const randomNumber=Math.floor(Math.random()*3+1);
  let computer = randomNumber===1 ? "rock" : randomNumber===2? "paper" :"scissor";
}

const determineWinner=(player,computer)=>{
  const winner =
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper"
      ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
      : player === "paper" && computer === "scissors"
      ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
      : player === "scissors" && computer === "rock"
      ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
      : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;

  return winner;
}
;
const displayResult =(result)=>{
  alert(result);
}

const askToPlayAgain=()=>{
  return confirm("play Again");

}
const thanksForPlaying=()=>{
  alert("ok, thanks for playing")
};



initGame();

