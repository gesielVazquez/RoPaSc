let options = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    let num = Math.floor(Math.random() * (3));
    let choose = options[num]
    return choose;
}

console.log(computerPlay());