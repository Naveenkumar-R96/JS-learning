/* let playGame = confirm("Shall we play a game");
if(playGame){
  let playerChoice = prompt("Please enter rock, papper, scissor");

  if(playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if(
      playerOne ==="rock" ||
      playerOne ==="papper"||
      playerOne ==="scissor"
    )
    {
      let computerChoice =Math.floor(Math.random()*3+1) ;
      let computer = computerChoice===1 ? "rock":
      computerChoice===2? "papper":
      "scissors";

      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
      
      alert(result);

      let playAgain = confirm("play Again");
      playAgain ? location.reload() : alert("thanks for play")

      
       
      
    }
    else{
     alert("you didnt write the about")
    }
  }
    else{
      alert("nothing")
    }
}
else{
  alert("ok We will play later")
} */


/*   let playGame=confirm("Shall we play rock papper scissor Game");

  if(playGame){

    playerChoice=prompt("Write rock or papper or scissor");

    if(playerChoice= "rock"|| "papper"||"scissor"
    ){
       let computerMove=Math.floor(Math.random()*3+1)
       let computer= computerMove==1 ? "rock" :computerMove==2 ?"scissor" : "papper";

       

       if(computer==playerChoice){
        result="tie";
       }
       else if(playerChoice=="rock" && computer=="papper"){
        result="Computer won";
       }
       else if(playerChoice=="papper" && computer=="scissor"){
        result="Computer won";
       }
       else if(playerChoice=="scissor" && computer=="rock"){
        result="Computer won";
       }
       else{
        result="you won";
       }

       alert(result);

       let playAgain= confirm("Lets play Again");
       playAgain ? location.reload() : alert("thanks for playing");

       
    }
    else{
      alert("you didnt write the above thing");
    }


  }
  else{
    alert("ok we will play after")
  }


 */

  const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};
// Game flow function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  console.log(rpsArray);
  return rpsArray[randomNumber];
  
};

const determineWinner = (player, computer) => {
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
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play Again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};

initGame();
