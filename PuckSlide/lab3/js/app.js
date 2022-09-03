// Kyle Herget 9/5/22 NEWM-N 220

//start setup
function setup(){
    createCanvas(400, 300)
    


}
//end setup

//start drawing

function draw(){

    background(0,0,0) // black canavs 
    
    fill(66, 191, 245) //fill circle blue on left side of canvas

    circle(mouseX, mouseY, 50) //circle position size is at 50 pixels

    if (pmouseY, pmouseX > 200) //if mouse location on cavas is > 200 

    fill(245, 66, 81) //fill circle red on right side of canvas

    circle(mouseX, mouseY, 50) // circle is now < 200 so circle is red

} 
//end drawing