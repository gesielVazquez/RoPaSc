let options = ["Rock", "Paper", "Scissors"];
let player = "";
let computer = "";
let score = [0 , 0];
let macht = "";

const container = document.querySelector('.points');
const result = document.querySelector('.container');
const scorePlayer = document.createElement("h1");
const scoreCPU = document.createElement("h1");
const winner = document.createElement("h1");

function computerPlay(){
    let num = Math.floor(Math.random() * (3));
    let choose = options[num]
    return computer = choose;
}

function playerPlay(){
    computerPlay();
    round(player, computer);
    scoreScreen(score[0], score[1]);
}

function round (playerSelection, computerSelection){

    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        macht = "You Win!! " + playerSelection + " beats " + computerSelection;
        score[0] += 1;
    }

    if (playerSelection === "Paper" && computerSelection === "Rock"){
        macht = "You Win!! " + playerSelection + " beats " + computerSelection;
        score[0] += 1;
    }

    if (playerSelection === "Scissors" && computerSelection === "Paper"){
        macht = "You Win!! " + playerSelection + " beats " + computerSelection;
        score[0] += 1;
    }

    if (playerSelection === "Rock" && computerSelection === "Paper"){
        macht = "You Lose!! " + computerSelection + " beats " + playerSelection;
        score[1] += 1;
    }

    if (playerSelection === "Paper" && computerSelection === "Scissors"){
        macht = "You Lose!! " + computerSelection + " beats " + playerSelection;
        score[1] += 1;
    }

    if (playerSelection === "Scissors" && computerSelection === "Rock"){
        macht = "You Lose!! " + computerSelection + " beats " + playerSelection;
        score[1] += 1;
    }

    if (playerSelection === "Rock" && computerSelection === "Rock"){
        macht = "This one it's a tie!! " + computerSelection + " equals " + playerSelection;
    }

    if (playerSelection === "Paper" && computerSelection === "Paper"){
        macht = "This one it's a tie!! " + computerSelection + " equals " + playerSelection;
    }

    if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        macht = "This one it's a tie!! " + computerSelection + " equals " + playerSelection;
    }
}

function scoreScreen (player, cpu){
    scorePlayer.style.color = "blue";
    scorePlayer.textContent = player;
    container.appendChild(scorePlayer);

    scoreCPU.style.color = "red";
    scoreCPU.textContent = cpu;
    container.appendChild(scoreCPU);

}

  document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      player = event.target.textContent;
      playerPlay();
    }
    if (score[0] == 5){
        winner.textContent = "Felicidades Ganaste!!";
        result.appendChild(winner);
    }
    else if(score[1] == 5){
        winner.textContent = "Tu perdiste";
        result.appendChild(winner);
    }
  });