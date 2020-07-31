let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;



function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $("h1").text("Level "+level);
    userClickedPattern = [];
}



$(".btn").on("click", function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})  

function playSound(fileName){
    let sound = new Audio("sounds/"+fileName+".mp3");
    sound.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function (){$("#"+currentColor).removeClass("pressed");}, 100);
}

$(document).on("keypress", function(){
    if (level === 0){
        setTimeout(function() {nextSequence()}, 100);
    }
})


function checkAnswer(input){
    if (userClickedPattern[input] === gamePattern[input]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function() {nextSequence()}, 1000);
        }
    }
    else{
        $("h1").text("Game over, Press any key to restart");
        $("body").addClass("game-over");
        setTimeout(function() {$("body").removeClass("game-over");}, 200);
        playSound("wrong");
        playAgain();
    }
}


function playAgain(){
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
}
