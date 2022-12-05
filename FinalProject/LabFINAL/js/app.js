


(function() {

    let screen = document.querySelector('.screen'); // display
    let buttons = document.querySelectorAll('.btn'); // numbers
    let clear = document.querySelector('.btn-clear'); // clear entry
    let equal = document.querySelector('.btn-equal'); // evaluate entry 
    let CE = document.querySelector('.btn-CE'); // delete one entry place from the right
    let root = document.querySelector('.btn-root'); // evalaute a root 
    let percent = document.querySelector('.btn-percent'); // evaule a percent 

        //functions for buttons gets from dataset.num
        buttons.forEach(function(button){ 
            button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
         })
})

//work on delay
let audio = new Audio("js/click.wav");
let allbtns = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});





function blinker() {

        if ($('input[type=text]').attr('0')) {
          // get the placeholder text
          $('input[type=text]').attr('0', '');
        } else {
          $('input[type=text]').attr('0', '0');
        }
      
        setTimeout(blinker, 1000);
      
}
      
//equal is not working for some reason 
    equal.addEventListener('click', function(e) {
        if (screen.value === "") {
            
        }

        else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    // clear btn works
    clear.addEventListener('click', function(e){
        screen.value = "";
    })

   
    
        

    

})();



// add square root function
// add CE funtion --- working on 
// add percetn function


 //fix splice CE function
//CE.forEach(function(button){ 
   // CE.addEventListener('click', function(e){
    // screen.value = screen.value.splice(0,-1)
    //})})

   