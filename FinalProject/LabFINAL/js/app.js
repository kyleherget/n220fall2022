(function(){

  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");
  let CE = document.querySelector('.btn-CE'); // delete one entry place from the right
  let root = document.querySelector('.btn-root'); // evalaute a root 
  let percent = document.querySelector('.btn-percent'); // evaule a percent


  // functions for all buttons 
  buttons.forEach(function(button) { // each button
      button.addEventListener("click", function(e){ // listens for clicks on buttons and event has to be active 
          let value = e.target.dataset.num; // assigns value from data-num when event is active 
          screen.value += value; // adds value to the right of the screen
      })
  });
  
  // equal function 
  equal.addEventListener("click", function(e){ // listens for click on = button 
     if (screen.value === "") { // if - else loop to evaule the input and the value to the right of the last value
        screen.value = ""; // clears 
      } else{
          let answer = eval(screen.value); // evluates with function 
          screen.value = answer; // puts answer on the screen. 

      } 
  })

 // clear function
   clear.addEventListener("click", function(){ // listens for clicks on the C button 
      screen.value = ""; // if event is active set screen value to ""
      })

      
   CE.getElementsByClassName("btn-CE", function(){
      screen.value = screen.value.splice(0,-1)

    })


})();








/*
//plays sound
let audio = new Audio("js/click.wav");
let allbtns = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

// add square root function
// add CE funtion --- working on 
// add percetn function

*/
