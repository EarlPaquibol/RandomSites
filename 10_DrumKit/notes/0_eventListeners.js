//listens for a click of the first button
document.querySelector("button").addEventListener("click", gotClicked);  //addeventlistener("$EVENT", FUNCTIONTOBECALLED)

function gotClicked(){
    alert("I got clicked!");
}

//loop through all buttons
for (let i = 0; i<7; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){   //anonymous function
        alert("I got clicked!");
    });
}

//or
for (let i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){   //anonymous function
        alert("I got clicked!");
    });
}