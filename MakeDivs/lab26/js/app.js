// Kyle Herget 11/8/22 NEWM-N 220

function makeDiv(obj) { //function
let div = document.createElement("div") //get by id & div
div.innerText = "My Div" // .inner text fro divs 
div.style.background = obj.color //color requests for divs 
document.body.appendChild(div)// appends to div
}
  
function myDiv() { // function 
let objects = // array start

[

{ color: "#FF0000", height: 100, width: 300 },
{ color: "#FFFF00", height: 200, width: 200 },
{ color: "#ff0000", height: 300, width: 100 },

]
  
  
for(i = 0; i < objects.length; i ++) // for loop that creates the divs 
    makeDiv(objects[i])
  
  }
  