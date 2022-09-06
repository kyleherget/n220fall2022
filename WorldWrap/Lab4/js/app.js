// Kyle Herget 9/5/22 NEWM-N 220

//start setup
var x = 0 // warp var

function setup() {
    createCanvas(800,600); //canvas size 
    frameRate(25) //frame rate slowed down so you can see the warp back at 600 easier.  
    
  }
 //end setup

 //start drawing 
function draw() {
   background(181, 181, 181); //canvas color grey
   ellipse(x,300, 50); //circle pos cord and size
   x = x + 12 //make it move to the right 5 pixels per frame. "60 / 5 = 12" speed is 12 per frame or... 600 / 60 = 10?

     if(x >= 600){ //if statement saying when the x cord is greater than 600 warp to 0
     x = 0 //warp to 0 
     
    } //end loop block 

 fill(0) //fill black 
 text(x,400,580); //prints the x cord on the bottom middle to identify it warps at 600
 }
//end drawing

