// Kyle Herget 9/22/22 NEWM-N 220

//start setup
function setup(){ // setup function
createCanvas(1000,1000)
background(110)

}
//end setup


//start draw
function draw(){ // draw function

    let drawSpider = {height:50,width:50,color:"#fcba03",}

    fill(drawSpider.height, drawSpider.width, drawSpider.color)

}
//end draw 

//start of spider draw function 
function draw(draw) {
// head
  ellipse(50,15,20,15)

  //body
  ellipse(50, 50, 60, 60)

  //eyes
  ellipse(40,40,10,10)
  ellipse(60,40,10,10)

  // right legs
  line(70, 50, 100, 50)
  line(70, 45, 100, 37)
  line(70, 55, 100, 63)

  // left legs
  line(30, 50, 0, 50)
  line(30, 45, 0, 37)
  line(30, 55, 00, 63)    
}
//end of spider draw function 

