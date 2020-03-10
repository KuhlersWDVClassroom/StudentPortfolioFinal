function CompLevel(){
document.getElementById("Main").style.display = "none";
document.getElementById("Main2").style.display = "none";
document.getElementById("Main3").style.display = "none";
document.getElementById("drawing").style.display = "none";
document.getElementById("Main4").style.display = "block";
}

function Level(){

document.getElementById("Main").style.display = "none";
document.getElementById("Main2").style.display = "block";

//CreateCookie()
document.documentElement.style.overflow = 'hidden'; 

WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;

//document.getElementById("Coin").innerHTML = "Coins: " + checkCookie("Coin");
//document.getElementById("Level").innerHTML = "Levels: " + checkCookie("Level");

document.getElementById("Size").value = checkCookie("Size")
document.getElementById("Diff").value = checkCookie("Diff")
document.getElementById("Mode").value = checkCookie("Mode")
}

function Des(){
var divs = document.getElementsByTagName('div');
for(var i = 0; i < divs.length; i++) {
  divs[i].style.display = "none";
}
}

function RanPreStart(){
Des()
Start(Math.floor(Math.random()*22)+3,Math.floor(Math.random()*2),Math.floor(Math.random()*2))
}

function PreStart(){
Des()
var slider = document.getElementById("Size").value;
var slider2 = document.getElementById("Diff").value;
var slider3 = document.getElementById("Mode").value;
Start(parseInt(slider),parseInt(slider2),parseInt(slider3))
}