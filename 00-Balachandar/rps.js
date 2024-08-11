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


  let playGame=confirm("Shall we play rock papper scissor Game");

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