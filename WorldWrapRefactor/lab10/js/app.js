// Kyle Herget 9/22/22 NEWM-N 220

//start setup
let ball = {x:0, y:300, w:50}

function setup() {
createCanvas(800,600); //canvas size 
background(110)



  }
 //end setup

 //start drawing 
function draw() {
ball.x = ball.x + 1

if(ball.x >= 600){ //if statement saying when the x cord is greater than 600 warp to 0
    ball.x = 0 //warp to 0 

 }
  ellipse(ball.x, ball.y, ball.w)

//end drawing
}


