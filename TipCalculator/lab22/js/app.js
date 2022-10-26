// Kyle Herget 10/27/22 NEWM-N 220

//start

function Tip() {
var Bill = document.getElementById("total").value //gets element by id
var tip = Bill * 0.15 // bill multiplied by 0.15 cents which is considered the starting point for dining 
var total = parseInt(Bill) + parseInt(tip) // gathers bill and tip input
console.log("Tip Amount: $ " + tip + " Total: $ " + total ) //logs values to the console
}

//end 