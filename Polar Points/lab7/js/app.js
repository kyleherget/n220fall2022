// Kyle Herget 9/5/22 NEWM-N 220

// start of set up
function setup(){

createCanvas(1000,1000) // canvas size
background(194, 9, 235) // purple 

}

// end of set up 
  r = 10

//start of draw
function draw(){
 let res = {
    x:500, y:400, r:10 // setting values for ellipes
 
 }

   ellipse(res.x,res.y,r) //ell 1
    translate(30,25)
   ellipse(res.x,res.y,r) // ell 2
    translate(0,35)
   ellipse(res.x,res.y,r)// ell 3 
    translate(-30,25)
   ellipse(res.x,res.y,r)// ell 4
    translate(-30,-25)
   ellipse(res.x,res.y,r) //ell 5
    translate(0,-35)
   ellipse(res.x,res.y,r) //ell 6
 
}
// end of draw


//start of polarPoint
function polarPoint(r){ //return r 

var x = r * Math.sin(mouseX);
var y = r * Math.cos(mouseX);
return createVector(x,y) //return x,y

}
//end of polarPoint