// Kyle Herget 11/17/22 NEWM-N 220

//start of function 
function changeColor(click){ // function 
  let element = document.getElementById(click.id) //gets element by id 
    element.style.backgroundColor = element.dataset.color // changes color by dataset color
}

//end of function