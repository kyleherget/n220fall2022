// Kyle Herget 8/31/22 NEWM-N 220


function setup(){
    createCanvas(2560, 1400,); //big pacman canvas
    rectMode(CENTER); //starting from center


}
//end setup

//start drawing

    function draw(){  

        var black = "#000000"; // var 1
        var yellow = "#f1f73e"; // var 2 


        background(black); //black #000000
        fill(yellow); //yellow #f1f73e
        ellipse(800, 800, 1000, 1000); //pacman body

        //cut out for mouth 
        fill(0,0,0) //mouth fill black

        triangle(800, 800,1400, 400,1400,1100) //xy1, xy2, xy3
        
        
        fill(0,0,0) // pacman eye black

        ellipse(850,500,250,250) //pacman eye
        fill(255,255,255)

        ellipse(850,500,150,250) //pacman inside eye white\
        fill(255,255,255)

        ellipse(1800,790,150,150) //snacks lines (26-30)
        ellipse(1600,790,150,150)
        ellipse(1400,790,150,150)
        ellipse(1200,790,150,150)
        ellipse(1000,790,150,150)
        
        

    } 
