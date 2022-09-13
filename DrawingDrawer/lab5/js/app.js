// Kyle Herget 9/15/22 NEWM-N 220


let x = 0; // global = 0

//start of setup

function setup(){
createCanvas(windowWidth,windowHeight)
background(150, 142, 222) // purple canvas

}

//end of setup

// start of draw

function draw(){
    x = x + 10 // speed of animation 

    drawFace(x,100) //line 12-21 are faces 
     drawFace(x,250)
    drawFace(x,400)
     drawFace(x,550)
    drawFace(x,700)
     drawFace(x,850)
    drawFace(x,1000)
     drawFace(x,1150)
    drawFace(x,1300)
     drawFace(x,1450)
    
}
//end of draw

// start of draw function
function drawFace(x,y){
strokeWeight(5) //outline
 fill(138, 66, 237) // color 
circle(x,y,75) //main body
 circle(x-30,y-20,20) //left outer eye
circle(x+30,y-20,20) //right eye 
 fill(0) //color
circle(x+30,y-10,8) //right inner eye
 circle(x-30,y-10,8) //left inner eye
strokeWeight(7) //thickness 
 noFill() //no color
arc(x-1,y+20,50,50,0, PI) // mouth 

}
// end of funtion