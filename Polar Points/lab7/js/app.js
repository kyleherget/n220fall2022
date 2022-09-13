// Kyle Herget 9/5/22 NEWM-N 220
res = 

// start of set up
function setup(){

createCanvas(1000,1000)
background(194, 9, 235)


}
// end of set up 


//start of draw
function draw(){
    translate(100,100)
    circle(100,100,10)
   translate(mouseX)
 
 


}
// end of draw


//start of polarPoint
function polarPoint(){
r = 100
var x = r * Math.sin(mouseX);
var y = x
return createVector(x,y)




}
//end of polarPoint