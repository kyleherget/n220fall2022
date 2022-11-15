// Kyle Herget 11/17/22 NEWM-N 220

//start

function flashcard(clicked) {
    if (clicked == "Indianapolis") // loop start / clicked
    document.getElementById("answer").innerHTML = "Correct. Indianapolis is the capital of Indiana."  //right message
    else
    document.getElementById("answer").innerHTML = "Incorrect. The Answer is: Indianapolis." //wrong message
    }
    //end