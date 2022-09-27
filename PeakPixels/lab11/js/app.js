   // Kyle Herget 9/29/22 NEWM-N 220

   
   // decalre vars 
    let width = 100 // setting width var
    let height = 100 // setting height var

    //start 
    let div = document.getElementById('mydiv') // getting element by ID

    //start of function, passing and math
    div.addEventListener('click',() => { // passing the parameters thru using the event-listener

        width *= 1.1 // 10% is .1 bigger,or 1.1 * the original size -  for width
        height *= 1.1 //10% is .1 bigger,or 1.1 * the original size - for height
        div.style.width = width + 'px' // increasing the width by 10px per-click / from listener - used from hints 
        div.style.height = height + 'px' // increasing the height by 10px per-click / from listener - used from hints 
        console.log(width,height) // logs the increase of width and height per click to the console. its not exactly 10 :( 
            
    }) // end 