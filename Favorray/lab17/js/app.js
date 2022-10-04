// Kyle Herget 10/4/22 NEWM-N 220

let things = document.getElementById("things")
let favs = ["pizza", "pasta", "steak", "coca-cola", "beer"]


//start loop
for(let i = 0; i< favs.length; i++) { //loop to run the array by lenght and include statement 
let itemAtIndex = favs[0]
console.log(favs) // logs to console my favs
}


//end loop

//start
let statement = " One of my favorite things is: " + favs[0] // other option using the array for index at 0-4
things.innerHTML = statement  //writes statement
let statement1 = " One of my favorite things is: " + favs[1] // other option using the array for index at 0-4
things1.innerHTML = statement1 //writes statement
let statement2 = " One of my favorite things is: " + favs[2] // other option using the array for index at 0-4
things2.innerHTML = statement2 //writes statement
let statement3 = " One of my favorite things is: " + favs[3] // other option using the array for index at 0-4
things3.innerHTML = statement3 //writes statement
let statement4 = " One of my favorite things is: " + favs[4] // other option using the array for index at 0-4
things4.innerHTML = statement4 //writes statement

// end
