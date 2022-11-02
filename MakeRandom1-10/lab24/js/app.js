// Kyle Herget 11/3/29/22 NEWM-N 220

function randomNumber() { // random number function
    let num = Math.ceil(Math.random() * 10) // sets the number ceiling at 10 and then picks a random number 1-10
    document.getElementById('button').innerHTML = num // gets by ID and changes .inner
}
