let playGame = confirm("Shall we play a game");
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
      playerOne === computer ? "tie":
      playerOne === "rock" && computer === "paper" ? "lose":
      playerOne === "rock" && computer === "scissors" ?
      "win":
      playerOne === "papper"&& computer === "rock" ?
      "win":
      playerOne === "papper"&& computer === "scissor" ?
      "lose":
      playerOne === "scissor"&& computer === "rock" ?
      "lose":
      playerOne === "scissor"&& computer === "papper" ? 
      "win" :
      
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
}