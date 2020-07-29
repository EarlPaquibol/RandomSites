// let randomNumber1 = Math.random();
// randomNumber1 = randomNumber1*6;
// randomNumber1 = Math.floor(randomNumber1+1);

// let randomNumber2 = Math.random();
// randomNumber2 = randomNumber2*6;
// randomNumber2 = Math.floor(randomNumber2+1);

// let rollOne = "images/dice"+randomNumber1+".png";

// let rollTwo = "images/dice"+randomNumber2+".png";

// if (randomNumber1 === randomNumber2){
//     document.querySelector("h1").textContent = "Draw!"
// }
// else if (randomNumber1 > randomNumber2){
//     document.querySelector("h1").textContent = "Player 1 wins!"
// }
// else{
//     document.querySelector("h1").textContent = "Player 2 wins!"
// }


var randomNumber1 = 0;
var randomNumber2 = 0;

function player1Roll(){
    if (document.querySelector("#checked").checked){
        document.querySelector("h1").textContent = "Game time!";
        document.querySelector("h2").innerHTML = "Let player two roll second!"
    }
    else{
        randomNumber1 = Math.random();
        randomNumber1 = randomNumber1*6;
        randomNumber1 = Math.floor(randomNumber1+1);
        var rollOne = "images/dice"+randomNumber1+".png";
        document.querySelector(".img1").setAttribute("src", rollOne);
        document.querySelector("h2").innerHTML = "Player 2! Roll the dice!";
        document.querySelector("#checked").click();
        document.querySelector("h1").textContent = "Game time!";
    }

}

function player2Roll(){
    if (document.querySelector("#checked").checked){
        randomNumber2 = Math.random();
        randomNumber2 = randomNumber2*6;
        randomNumber2 = Math.floor(randomNumber2+1);
        var rollTwo = "images/dice"+randomNumber2+".png";
        document.querySelector(".img2").setAttribute("src", rollTwo);
        document.querySelector("h2").innerHTML = "";
        document.querySelector("#checked").click();
        winner();
    }
    else{
        document.querySelector("h2").innerHTML = "Let player one roll first!"
    }
    
}

function winner(){
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "Draw!";
      } 
      else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 wins!";
      } 
      else {
        document.querySelector("h1").textContent = "Player 2 wins!";
      }
}