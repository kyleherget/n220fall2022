// Kyle Herget 11/8/22 NEWM-N 220

let badwords = ["clear","water","tires"] // bad words 
let count = 0 // start count at 0 

function myBad(){ // bad word function with loops
count = 0 
let input = "" 

input = document.getElementById("button").value // get by id button
let text = [] // input of text
text = input.split(" ") //splits input from text 

for(let i = 0; i < badwords.length; i ++) { // fo loop for badwords 
for(let z = 0; z < text.length; z ++){ // for loop for the text lenght
    if(text[z] == badwords[i]) { // if text has a bad word add to count 
    count ++ // counts bad words 
}}}

if (count == 0) { // when  badword is found changes .inner to below tag
document.querySelector(".result").innerHTML = "No bad words have been found in that sentence."
}

else { // else add to count when the bad words have been found.  
document.querySelector(".result").innerHTML = "Bad word(s) found: Total of bad word(s) found = " + count // adds to count 
}

document.getElementById("button").value = "" // end 
}

