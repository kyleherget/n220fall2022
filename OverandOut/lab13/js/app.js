    // Kyle Herget 9/29/22 NEWM-N 220

    
    let width = 100 // setting width var
    let height = 100 // setting height var

    //start DOM
    div.style.backgroundColor = "#0000cc"; // the color blue 
    let div = document.getElementById('mydiv') // getting element by ID
    div.addEventListener("mouseOver",(mouse) => { // uses the event listener to change the color to black when the mouse is over the box 
        mouse.target.style.color = "#000000"; // the color black 
    })
    //end DOM 