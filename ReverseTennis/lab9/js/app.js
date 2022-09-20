// Kyle Herget 9/22/22 NEWM-N 220

//start setup
function setup(){ // setup function
createCanvas(1000,1000) //canvas 1000x100
background(115) // grey background

}
//end setup



//start draw
function draw(){ // draw function
 let tallRectangle = {X:10,Y:300,width:100,height:400} //rect vars
 let otherRectangle = {X:890,Y:350,width:100,height:300} //rec vars


 // up key moves them opposite 
  if (keyIsDown(UP_ARROW)) {
    tallRectangle.Y = tallRectangle.Y += 100 // up 100
  }


  if (keyIsDown(UP_ARROW)) {
    otherRectangle.Y -= 100 // down 100
  }

// down key moves them opposite 
  if (keyIsDown(DOWN_ARROW)) {
    tallRectangle.Y += 100 // up 100
  }


  if (keyIsDown(DOWN_ARROW)) {
    otherRectangle.Y -= 100 //down 100
  }


rect(tallRectangle.X,tallRectangle.Y,tallRectangle.width,tallRectangle.height) // left rect

rect(otherRectangle.X,otherRectangle.Y,otherRectangle.width,otherRectangle.height) // right rect

}
//end draw