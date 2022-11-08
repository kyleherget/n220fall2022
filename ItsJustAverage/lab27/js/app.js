// Kyle Herget 11/8/22 NEWM-N 220

function myAverage() { // function for average
var input = document.getElementById("nums").value // get by ID 
var array = input.split(",") //split values
let sum = 0 // sum starts at 0 
let average = 0 // average starts at 0

for( i = 0; i < array.length; i ++){ // loop for data 
    sum += parseInt(array[i])
}

average = sum / array.length; 
document.getElementById("sum").innerHTML = "sum: " + sum // get by id and write sum
document.getElementById("average").innerHTML = "average: " + average // get by id and write average
var input = document.getElementById("nums").value = "" // get by id 

//end 

}