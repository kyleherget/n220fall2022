// Kyle Herget 9/15/22 NEWM-N 220

let backgroundColor //color var

//start of setup
function setup(){
    createCanvas(1000,1000) // canvas size

}
//emd of set up 

//start of draw 
function draw(){
 backgroundColor = color((170, 200, 150)) // original color is like a grey 
     backgroundColor.setRed(0) // turns a blueish green when the red is removed 
         background(backgroundColor) // diplays new color without red 
    

}
//end of draw