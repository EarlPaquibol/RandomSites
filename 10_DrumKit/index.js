for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {                 //for looping through the buttons

  document.querySelectorAll("button")[i].addEventListener("click", function () {      //for adding an event listener to those buttons
    let buttonLetter = this.innerHTML;                                                //this is for which button triggered the event
    playSound(buttonLetter);  
    buttonAnimation(buttonLetter);                                                        //plays the sound depending on the button clicked
  });

}

document.addEventListener("keydown", function(event){                                 //for adding an event listener to the whole document
    let keyPressed = event.key;                                                       //passing the event of which key was pressed
    playSound(keyPressed);      
    buttonAnimation(keyPressed);                                                      //plays the sound depending on the keydown   
})


function playSound(buttonLetter){                                                      //play sound
    switch (buttonLetter) {
        case "w":
          let tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "a":
          let tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
  
        case "s":
          let tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
  
        case "d":
          let tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
  
        case "j":
          let snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
  
        case "k":
          let kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
  
        case "l":
          let crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
  
        default: console.log(buttonLetter);
      }
}


function buttonAnimation(key){

    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");


    setTimeout(function (){activeButton.classList.remove("pressed");}, 150);

}