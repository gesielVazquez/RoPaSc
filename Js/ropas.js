let options = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    let num = Math.floor(Math.random() * (3));
    let choose = options[num]
    return choose;
}

console.log(computerPlay());

function playerPlay(){
    let ansEnter = (prompt("Please enter your chose Rock, Paper, Scissors: "));
    let lower = ansEnter.toLowerCase();
    let first = lower.slice(0, 1);
    let second = lower.slice(1);
    let answer = first.toUpperCase() + second;
    return answer;
}

console.log(playerPlay());

