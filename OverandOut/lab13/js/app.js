    let width = 100 // setting width var
    let height = 100 // setting height var

    //start 
    div.style.backgroundColor = "#0000cc"; // the color blue 
    let div = document.getElementById('mydiv') // getting element by ID
    div.addEventListener("mouseOver",(mouse) => { // uses the eevent listneer to change the color to black when the mouse is over the box
        mouse.target.style.color = "#000000"; // the color black 
    })