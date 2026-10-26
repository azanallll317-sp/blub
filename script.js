// var pera = document.getElementById("pera")
// console.log("pera")


// var pID = document.querySelectorAll("#p1")
// var pClass = document.querySelectorAll(".pera")
// var pTag = document.querySelectorAll("p")
// console.log("#p1")
// console.log(".pera")
// console.log("p")


function  offblub(){
    document.querySelector("#img").src = "offblub.png";
}
function  onblub(){
    document.querySelector("#img").src = "onblub.png";
}
// create div with Js
function creatediv(){
  var clr =  document.querySelector("#color").value;
  var wid =  document.querySelector("#width").value;
  var hig =  document.querySelector("#heigth").value;

             document.querySelector("#div").style.backgroundColor= clr
             document.querySelector("#div").style.width = wid + "px"
             document.querySelector("#div").style.height =hig + "px"
}
