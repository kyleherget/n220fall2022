// Kyle Herget 11/3/29/22 NEWM-N 220


function DivideBy7(){ //function

    let myDiv = document.getElementById("input").value //get by ID

    if( myDiv % 7 == 0){ //If statment to evaulate if number is / by 7 or not 
    document.getElementById("returns").innerHTML="Cool! The number you chose is divisible by 7." // updates div to .innerhtml
    return true // is / by 7 
    
}
    else{  //else if not / by 7 
    document.getElementById("returns").innerHTML="Sorry, The number you chose is not divisible by 7. Try another number!" // updates div to .innerhtml
    return false // in not / by 7 
    }
    }   

    console.log() // log to consoles