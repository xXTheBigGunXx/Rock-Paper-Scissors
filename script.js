let button = document.querySelector("#options");
let tempSet = [" rock", " paper", " scissors"];

button.addEventListener("click", event => {
    let targetedButton = event.target;

    let computerChose = Math.floor(Math.random() * 3);
    let picked;

    let name = document.querySelector("#name");
    let win = document.querySelector(".element");

    switch(targetedButton.className)
    {
        case "rock": picked = 0; break;
        case "paper": picked = 1; break;
        case "scissors": picked = 2; break;
    }

    console.log(event.target.className);
    console.log({computerChose, picked});

    let text;

    if(picked == computerChose)
        text = " DRAW!";

    else if (picked == 0){
        if(computerChose == 1)
            text = " WINNER!";
        else if (computerChose == 2)
            text = " LOSER!";
    }

    else if (picked == 1){
        if(computerChose == 2)
            text = " WINNER!";
        else if(computerChose == 0)
            text = " LOSER!";
    }

    else if(picked == 2){
        if(computerChose == 1)
            text = " WINNER!";
        else if(computerChose == 0)
            text = " LOSER!";
    }

    name.textContent = text;
    win.textContent = tempSet[computerChose];
});