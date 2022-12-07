(function(){

  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");
  let CE = document.querySelector('.btn-CE'); // delete one entry place from the right
  let root = document.querySelector('.btn-root'); // evalaute a root 
  let pi = document.querySelector('.btn-pi'); // evaule a percent


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

 // delete or clear entry function
   CE.addEventListener("click", function(){ // clears or deletes a value from the right 400 - DEL = 40
      screen.value = screen.value.slice(0,-1)

    })

// computes a root entry on click when event us active. 
    root.addEventListener("click", function() {
       screen.value = Math.sqrt(screen.value);
      
    })

    pi.addEventListener("click", function() {
      screen.value = 3.14159
      
    })

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

})
()
;