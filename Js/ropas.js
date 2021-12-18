let options = ["Rock", "Paper", "Scissors"];
let player = "";
let computer = "";
let score = [0 , 0];
let macht = "";

function computerPlay(){
    let num = Math.floor(Math.random() * (3));
    let choose = options[num]
    return computer = choose;
}



function playerPlay(){
    let ansEnter = (prompt("Please enter your chose Rock, Paper, Scissors: "));
    let lower = ansEnter.toLowerCase();
    let first = lower.slice(0, 1);
    let second = lower.slice(1);
    let answer = first.toUpperCase() + second;
    return player = answer;
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

function game (){
    for (i = 0; i < 5; i++){
        computerPlay();
        console.log(computer);
        playerPlay();
        console.log(player);
        round(player, computer);
        console.log(macht);
    }
    if(score[0] > score[1]){
        return console.log("You Win the game " + score[0] + " a " + score[1]);
    }
    else if (score[0] < score[1]){
        return console.log("You Lose the game " + score[0] + " a " + score[1]);
    }
    else{
        return console.log("This match was a Draw " + score[0] + " a " + score[1]);
    }
}

game();