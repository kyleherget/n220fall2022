  // Kyle Herget 10/27/22 NEWM-N 220

  //start

let GuessedNumber = 5 // Var for guessed number = 5 
let guessed = document.getElementById('text') // gets the element by id 

document.getElementById("guess").onclick = () => { // on click by id / value = guessed
  let value = guessed.value 

  if (value == GuessedNumber) { // loop for guessed numbers 
    document.getElementById("snip").innerHTML = "Congrats You Guessed the Number!"
  } else if (isNaN(value)) {

    document.getElementById("snip").innerHTML = "Pick a Number!"

  } else if (value > 20 | value < 0) { // loop for number < 20 

    document.getElementById("snip").innerHTML = "Pick a Number Between 1 and 20"

  } else if (value <= 4 | value < 0) { // loop for number < 4 
    document.getElementById("low").innerHTML = "Your Guess is too low!"

  } else if (value  >= 5 | value < 0) { // loop for number = 5 / winning number 
    document.getElementById("high").innerHTML = "Your Guess is too high!"

    document.getElementById("snip").innerHTML = "Try Again" // try again 
  }

console.log("Number Guess: " + guessed.value) // logs all guesses to the console " format : "


}
  //end 